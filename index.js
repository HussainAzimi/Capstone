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

async function communityEventHandler(){
    // Add an event handler for the submit button on the form
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      // Get the form element
      const inputList = event.target.elements;
      console.log("Input Element List", inputList);


      // Create a request body object to send to the API
      const requestData = {
        author: inputList.author.value,
        content: inputList.content.value,
      };
      // Log the request body to the console
      console.log("request Body", requestData);

      axios
        // Make a POST request to the API to create a new pizza
        .post(`${process.env.USER_POSTS_API_URL}/posts`, requestData)
        .then(response => {
        //  Then push the new post onto the post state post attribute, so it can be displayed
          store.community.userPosts.push(response.data);
          console.log(store.community.userPosts);
          router.navigate("/community");
        })
        // If there is an error log it to the console
        .catch(error => {
          console.log("Error in Creating new post", error);
        });
    });
}


  async function getPosts(done = () =>{}) {
    await axios.get(`${process.env.USER_POSTS_API_URL}/posts`)
    .then(postResponse =>{
        console.log(postResponse.data);
        store.community.userPosts = postResponse.data;
    });
     done();//move this to axios then
  }


async function getLocations(done = () => { }) {
  console.log("store is this now", store.location.category);
  console.log("sotore is this now", store.location.zipcode);
  let zipcode = store.location.zipcode || '63110'
  let category = store.location.category || 'healthcare'
  console.log("it worked", category)
  let response = await axios
    .get(`https://api.geoapify.com/v1/geocode/search?text=${zipcode}&lang=en&limit=1&type=postcode&filter=countrycode:us&&format=json&apiKey=${process.env.GEO_API_FY_API_KEY}`)
  console.log(response);
  await axios
    .get(`https://api.geoapify.com/v2/places?categories=${category}&filter=place:${response.data.results[0].place_id}&apiKey=${process.env.GEO_API_FY_API_KEY}`)
    .then(response => {
      console.log("data", response.data)
      // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
      store.location.places = response.data.features.map((feature) => {

        const propertyName = feature.properties.name;
        const postcode = feature.properties.postcode;
        const propertyDistrict = feature.properties.district;
        const propertyStreet = feature.properties.street;
        const propertyHouseNumber = feature.properties.housenumber;



        return {
          name: propertyName,
          postcode: postcode,
          district: propertyDistrict,
          street: propertyStreet,
          housenumber: propertyHouseNumber,


        };

      });
      console.log(store.location.places);
      done();
    })
    .catch((error) => {
      console.log(error);
      done();
    });

}



function locationEventHandler() {
  let categoryDropdown = document.getElementById("location-catg")
  categoryDropdown.addEventListener("change", (e) => {
    store.location.category = e.target.value;
    console.log("state is this", store.location.category)
  })

  let location = document.getElementById("zipcode")
  location.addEventListener("input", (e) => {
    store.location.zipcode = e.target.value;
    console.log("state is this", store.location.zipcode)
  })

  document.getElementById("btn-search-loc").addEventListener("click", async (event) => {
    event.preventDefault();
    // const categoryType = document.getElementById("location-catg").value
    // store.location.category = categoryType;
    // console.log("event", e.target.value);
    // store.location.category = e.target.value;
    console.log("store", store.location.category);
    await getLocations()
    router.navigate('/location');
  });
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
      case "community":
        getPosts(done);
        break;

      case "location":
        console.log("category change", store.location.category);
        await getLocations(done)
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
      default:
        // We must call done for all views so we include default for the views that don't have cases above.
        done();
      // break is not needed since it is the last condition, if you move default higher in the stack then you should add the break statement.
    }
  },
  already: async (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";
    if (view === "location") {
      await getLocations();
    }

    if (view === "community") {

      getPosts();
    }

    render(store[view]);

    if(view === "location"){
      locationEventHandler();
    }

    if (view === "community") {

      communityEventHandler();
    }

  },
  after: async (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";



    // hide and show feedback form in home page
    if (view === "home") {
      document.querySelector(".show-feedback").addEventListener("click", () => {
        const frmStatus = document.querySelector("#display-hide");
        if (frmStatus.style.display === "none") {
          frmStatus.style.display = "flex";
        } else {
          frmStatus.style.display = "none";
        }

      });
    }


    if (view === "community") {

      communityEventHandler();
    }



    if (view === "location") {

      locationEventHandler();


    }



    router.updatePageLinks();

    // add menu toggle to bars icon in nav bar
    document.querySelector(".fa-bars").addEventListener("click", () => {
      document.querySelector("nav > ul").classList.toggle("hidden--mobile");
    });


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

