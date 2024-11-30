import userImage from "../assets/User-image.jpg";
import html from "html-literal";
// import router from "../server/routers/userPosts.js";
// import axios from "axios";
// import * as store from "../store";


export default (state) => html`
<section class="community" id="community">
   <div class="forum-container">
     <h2>Disscussion Forum</h2>
     <div class="message-info"><h2 class=".message-title"></h2></div>
     <div class="display-post">
       ${state.userPosts.map(post => {
              const formatedDate = new Date(post.create).toLocaleString("en-us");
              return `
                <div class="post-items">
                    <div class="items-head">
                        <img src="${userImage}">
                        <p>Author: ${post.author}</p>
                        <p>Post Date: ${formatedDate}</p>
                    </div>
                    <p>${post.content}</p>
                    <div class="items-actions">
                        <p class="delete-post" data-id="${post._id}" data-author ="${post.author}">Delete Post</p>
                        <p class="reply-post">Reply</p>
                    </div>
                </div>
             `
        }).join("")}
     <div>

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
</section>
`;

