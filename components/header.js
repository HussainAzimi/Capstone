import html from "html-literal";
import imgLogo from "../assets/Logo.png";
import nav from "./nav.js";
import * as store from "../store/index.js";

export default state => html `
<header class="header">
        <div class="logo">
            <img src="${imgLogo}" alt="Logo Image">
             <h2 class="logo-text">Immigrant Assistance</h2>

        </div>
        ${nav(store.nav)}

</header>
`;
