import html from "html-literal";
export default (state) => html`
<section class="community" id="community">
     <h2>Disscussion Forum</h2>
     <div class="forum-container">
        <div class="display-post">
           ${state.usesrPosts.map(post => {
              return `

                <p>${post.author}</p>
                <p>${post.content}</p>
                <p>${post.create}</p>

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
