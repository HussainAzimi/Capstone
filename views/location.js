import html from "html-literal";

export default state => html`
    <section id="location" class="location">
      <div class="search-location">
        <form>

            <label for="zip-code">Enter your zip code:</label>
             <input type="text" placeholder="ZIP code" id="zipcode">


            <label for="location-catg">Select location Category:</label>
            <select id="location-catg" name="location-catg">

                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
                <option value="commercial">Store</option>
                <option value="leisure">Park</option>

            </select>
            <button type="submit" id="btn-search-loc">Search</button>

        </form>
      </div>
      <div class="search-result" id="result-items">

            ${state.places.map(place => html `
                  <div class="result-items">

                      <p>Place Name: ${place.name}</p>
                      <p>Place Zip Code: ${place.postcode}</p>
                      <p>Place District: ${place.district}</p>
                      <p>Place Street: ${place.street}</p>
                      <p>Place House Number: ${place.housenumber}</p>

                   </div>
                   <div class="result-item-img"></div>
            `)}
      </div>
    </section>
`;
