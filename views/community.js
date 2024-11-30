import userImage from "../assets/User-image.jpg";

import html from "html-literal";
export default (state) => html`
<section class="community" id="community">
     <h2>Disscussion Forum</h2>
     <div class="forum-container">
        <div class="display-post">
           ${state.userPosts.map(post => {
              const formatedDate = new Date(post.create).toLocaleString();
              return `
                <div class="post-items">
                    <div class="items-head">
                    <img src="${userImage}">
                    <p>Author: ${post.author}</p>

                    <p>Post Date: ${formatedDate}</p>
                    </div>

                    <p>${post.content}</p>
                 </div>

             `
             }).join("")}
            </div>
            <div class="form-box">
              <p>Ask your question or share your success stories</p>
                <form id="post-form">
                   <input type="hidden" id="post-id" value ="postId">
                   <label for="author">Name: </label>
                    <input type="text" id="author" name="author" placeholder="Your Name">
                    <label for="content">Your Post: </label>
                    <textarea id="content" name="content" required></textarea>
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    </div>
</section>
`;
