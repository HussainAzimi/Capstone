import html from "html-literal";

export default state => html`
    <section id="location" class="location">
      <div class="search-location">
        <h2>Search public service type</h2>
        <form>
            <label for="service-type">Please Select Public Service Type:</label>
            <select id="service-type" name="service-type">
                <option value="healthcare">Healthcare</option>
                <option value="schools">Schools</option>
                <option value="transport">Transport</option>
                <option value="recreation">Park</option>
            </select>
            <button type="submit">Search</button>
        </form>
      </div>
      <div class="location-container">
            <div class="location-items">item 1</div>
            <div class="location-items">item 2</div>
            <div class="location-items">item 3</div>
    </div>
      <div class="directions-result">
            <h2>Public Locations Table information</h2>
            <table>
                  <thead>
                        <tr> <th>Stop Number</th> <th>Stop Name</th> <th>Line</th> <th>Direction</th> </tr>
                   </thead>
                  <tbody>
                        ${state.stops.features.map(stop => html `
                              <tr>
                                <td>${stop.properties.StopID}</td>
                                <td>${stop.properties.StopName}</td>
                                <td>${stop.properties.LineName}</td>
                                <td>${stop.properties.Dir}</td>
                              </tr>
                        `)};
                  </tbody>
            </table>
      </div>
    </section>
`;
