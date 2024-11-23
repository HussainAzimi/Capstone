
import { header, main, nav, footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { camelCase, fromPairs } from "lodash";
import axios from "axios";




const router = new Navigo("/");

function render(state = store.home) {
  document.querySelector("#root").innerHTML = `
      ${header(state)}
      ${main(state)}
      ${footer()}
    `;
}

router.hooks({
  // We pass in the `done` function to the before hook handler to allow the function to tell Navigo we are finished with the before hook.
  // The `match` parameter is the data that is passed from Navigo to the before hook handler with details about the route being accessed.
  // https://github.com/krasimir/navigo/blob/master/DOCUMENTATION.md#match
  before: async (done, match) => {

    // We need to know what view we are on to know what data to fetch
    const view = match?.data?.view ? camelCase(match.data.view) : "home";
    // Add a switch case statement to handle multiple routes
    switch (view) {

      case "location":

      axios
      .get(`https://api.geoapify.com/v2/places?categories=education&filter=rect:-90.20,38.77,-90.30,38.58&apiKey=${process.env.GEO_API_FY_API_KEY}`)
      .then(response => {
        // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
              response.data.features.map((feature) => {

              const propertyName = feature.properties.name;
              const postcode = feature.properties.postcode;
              const propertyDistrict = feature.properties.district;
              const propertyStreet = feature.properties.street;
              const propertyHouseNumber = feature.properties.housenumber;



              store.location.places.push({
                name: propertyName,
                postcode: postcode,
                district: propertyDistrict,
                street: propertyStreet,
                housenumber: propertyHouseNumber,


              });

         });

        done();
      })
      .catch((error) => {
        console.log(error);
        done();
      });

        break;
      // Add a case for each view that needs data from an API
      case "home":
        // New Axios get request utilizing already made environment variable
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis&units=imperial`)
          .then(response => {
            // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
            store.home.weather = {
              city: response.data.name,
              temp: response.data.main.temp,
              feelsLike: response.data.main.feels_like,
              description: response.data.weather[0].main
            };
            done();
          })
          .catch((error) => {
            console.log(error);
            done();
          });
          break;
      default :
        // We must call done for all views so we include default for the views that don't have cases above.
        done();
        // break is not needed since it is the last condition, if you move default higher in the stack then you should add the break statement.
    }
  },
  already: (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    render(store[view]);
  },
  after: (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";
    router.updatePageLinks();

    // add menu toggle to bars icon in nav bar
    document.querySelector(".fa-bars").addEventListener("click", () => {
        document.querySelector("nav > ul").classList.toggle("hidden--mobile");
    });
   if(view === "home"){
    document.querySelector(".show-feedback").addEventListener("click", () =>{
          const frmStatus = document.querySelector("#display-hide");
          if(frmStatus.style.display === "none"){
            frmStatus.style.display = "flex";
          }else{
            frmStatus.style.display = "none";
          }

      });
   }
  }
});


router
      .on({
        "/": () => render(store.home),
        ":view": (match) => {
          const view = match?.data?.view ? camelCase(match.data.view) : "home";
          if (view in store) {
            render(store[view]);
          } else {
            render(store.viewNotFound);
            console.log(`View ${view} not defined`);
          }
        },
      })
      .resolve();







