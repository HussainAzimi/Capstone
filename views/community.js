import html from "html-literal";

export default () => html`

<section id="community">
     <div class="container">
      <h1 class="title">Welcome to community page,this page is under processing</h1>
      <div class="communication"><h2 class="title">message board</h2></div>
      <div class="story-container">
         <h2 class="title">story list</h2>
         <ul class="story-items">
            <li class="item">item 1</li>
            <li class="item">item 2</li>
            <li class="item">item 3</li>
         </ul>
     </div>
     <div class="form-container form-visible">
        <h2 class="title">Please submit your success story through below form</h2>
        <form id="frm-feedback" method="GET" action="/index.html">
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name..">

            <label for="subject">Your Story</label>
            <textarea id="subject" name="subject" placeholder="Write your success story.." style="height:200px"></textarea>

            <input type="submit" value="Submit">
            <input type="reset" value="Reset">
        </form>
      </div>
     </div>
    </section>

`;
