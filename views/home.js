import html from "html-literal";
import imgWelcome from "../assets/Welcome.png";
export default (state) => html`

<section id="main">
        <div class="left">
        <img src="${imgWelcome}" alt="Positive image representing integration into the community" class="image">
        </div>
        <div class="right">
            <h2>Welcome to Immigrant Assistance</h2>
            <p>in this website you can learn essential things, connect with other communities,
                 share your stories and helpful resources, and find service provider locations
                  like bus stations, Hospitals, Schools, and others, we are working here to make
                  this site more friendly and
                  efficient and we are looking forward for your nice and helpful feedbacks.</p>
                  <h3>
                    The weather in ${state.weather.city} is ${state.weather.description}.
                    Temperature is ${state.weather.temp}F, and it feels like
                    ${state.weather.feelsLike}F.
                  </h3>
             <span class="show-feedback">I have a feedback</span>
        </div>
    <div class="form-container" id="display-hide">
        <div class="form-box">
            <h2>Send Your feedback</h2>
            <form>
                <div class="form-row">
                    <div class="form-item">
                        <label for="first-name">First Name</label>
                        <input type="text" id="first-name" name="first-name" placeholder="First Name">
                    </div>
                    <div class="form-item">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" placeholder="(000) 000-0000">
                    </div>
                </div>
                <div class="form-row">
                    <label>Do You Satisfy With Our Service?</label>
                    <div class="radio-group">
                        <input type="radio" id="yes" name="satisfy" value="yes">
                        <label for="yes">Yes</label>
                        <input type="radio" id="no" name="satisfy" value="no">
                        <label for="no">No</label>
                    </div>
                </div>
                <div class="form-row">
                    <label for="msg">Write your Suggestions:</label>
                    <textarea id="msg" name="msg" placeholder="Write your suggestions here..."></textarea>
                </div>

                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </form>
        </div>
    </div>
</section>
`;
