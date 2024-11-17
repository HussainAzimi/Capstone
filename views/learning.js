import html from "html-literal";

export default () => html`
<section class="learning" id="learning">
    <div class="search-learning">
        <h2>Search learning materials type</h2>
        <form>
            <label for="materials-type">Please Select materials Type:</label>
            <select id="materials-type" name="materials-type">
                <option value="general">General</option>
                <option value="language">Language</option>
                <option value="career">Career</option>
                <option value="calture">Calture</option>
            </select>
            <button type="submit">Search</button>
        </form>
    </div>
   <h1 class="title">Learning Materials</h1>
<div class="learning-container">
    <div class="learning-items">item 1</div>
    <div class="learning-items">item 2</div>
    <div class="learning-items">item 3</div>
</div>
<div class="form-container">
        <div class="form-box">
            <h2>Share Your learning materials</h2>
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
                    <label for="dropdown">Select Topic</label>
                    <select id="dropdown" name="dropdown">
                        <option value="general">select one option</option>
                        <option value="general">General</option>
                        <option value="language">Language</option>
                        <option value="career">Career</option>
                        <option value="calture">Calture</option>
                    </select>
                </div>

                <div class="form-row">
                    <label for="msg">Materials Description</label>
                    <textarea id="msg" name="msg" placeholder="say somthing about your learning materials..."></textarea>
                </div>

                <div class="form-row">
                    <label for="file">Attach your files</label>
                    <input type="file" id="file" name="file">
                </div>

                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </form>
        </div>
    </div>
</section>

`;
