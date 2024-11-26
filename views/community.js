import html from "html-literal";
export default (state) => html`
<section class="community" id="community">
     <h2>Disscussion Forum</h2>
     <div class="forum-container">
        <div class="display-post">
          <h2>Shared posts</h2>
           ${state.usesrPosts.map(post =>{
             return `

             <p>${post.firstName}</p>
             <p>${post.postTitle}</p>
             <p>${post.postBody}</p>
             <p>${post.Date}</p>

             `
           }).join("")}

          <div id="user-posts-display"></div>
        </div>
        <div class="form-box">
              <p>Ask your question or share your success stories</p>
                <form id="user-posts">
                  <label for="name">First Name</label>
                  <input type="text" id="first-name" name="name" placeholder="First Name" required>
                  <label for="subject">Select a topic</label>
                    <select id="subject" name="subject" required>
                        <option value="general">General</option>
                        <option value="language Improvment">Language Improvment</option>
                        <option value="language">Career</option>
                        <option value="career">Navigation</option>
                        <option value="culture">Culture</option>
                    </select>

                    <label for="body">Type your success and helpfull story</label>
                    <textarea id="body" name="body" required></textarea>
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        </div>
    </div>
</section>
`;
