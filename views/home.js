import html from "html-literal";
import imgLogo from "../assets/Logo.png";
import imgWelcome from "../assets/Welcome.png";
export default () => html`

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
             <spane class="show-feedback">I have a feedback</spane>
        </div>
        <div class="form-container">
            <h2 class="title">Please submit your feedback through below form</h2>
            <form id="frm-feedback" method="GET" action="/index.html">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name..">

                <label for="subject">Your Feedback</label>
                <textarea id="subject" name="subject" placeholder="Write your helpfull feedback.." style="height:200px"></textarea>

                <input type="submit" value="Submit">
                <input type="reset" value="Reset">
            </form>
        </div>
    </section>
`;
