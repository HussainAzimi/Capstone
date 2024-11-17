import html from "html-literal";
export default () => html`
    <section class="community" id="community">
    <div class="forum">
        <h2>Forum</h2>
        <div class="forum-post">
            <h3>Question Title : direction</h3>
            <p>Askedd by: Userx</p>
            <p>Does anyone can help me to find public shcool?</p>
        </div>
        <button type="submit">Ask a Question</button>
    </div>

    <div class="stories">
        <h2>Success Stories</h2>
        <div class="story">
            <h3>Language improvment</h3>
            <p>Posted by: User3</p>
            <p>Sharing my experience in how to improve my language skill...</p>
        </div>
    </div>
    <div class="form-container">
        <div class="form-box">
            <h2>Share Your Story</h2>
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
                    <label for="msg">Type your success and helpfull story</label>
                    <textarea id="msg" name="msg" placeholder="Write your sotry here..."></textarea>
                </div>

                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
           </form>
        </div>
    </div>
</section>
`;
