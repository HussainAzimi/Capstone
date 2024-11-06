// import * as components from "./components";
import { header, main, nav, footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { camelCase } from "lodash";

const router = new Navigo("/");

function render(state = store.home) {
  document.querySelector("#root").innerHTML = `
      ${header(state)}
      ${main(state)}
      ${footer()}
    `;
    router.updatePageLinks();
}

render();
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

document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");

});

document.querySelector(".show-feedback").addEventListener("click", () =>{
document.querySelector(".form-container").style.display = "block";
});

