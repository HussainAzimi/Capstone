import html from "html-literal";
export default (state) => html`
<section class="community" id="community">
     <h2>Disscussion Forum</h2>
     <div class="forum-container">
        <div class="display-post">
          <h2>Shared posts</h2>
           ${state.usesrPosts.map(post => {
  return `

             <p>${post.firstName}</p>
             <p>${post.postTitle}</p>
             <p>${post.postBody}</p>
             <p>${post.Date}</p>

             `
}).join("")}
        </div>
        <div class="form-box">
              <p>Ask your question or share your success stories</p>
                <form id="post-form">
                   <input type="hidden" id="post-id" value ="postId">
                   <label for="author">First Name: </label>
                    <input type="text" id="author" name="author" placeholder="Your Name">
                    <label for="content">Your Comment: </label>
                    <textarea id="content" name="content" required></textarea>
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </form>
                <div id="user-posts"></div>
            </div>
        </div>
    </div>
</section>
`;
