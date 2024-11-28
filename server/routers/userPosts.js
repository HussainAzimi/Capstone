
import { Router } from  'express';
import userPost from '../models/UserPost.js';


const router = Router();

// Create userPost route
router.post("/", async (request, response) => {
  console.log("request", request.body);
   const {author, content} = request.body;
    try {
      const post = new userPost({
        author,
        content
      });

      const data = await post.save();

      response.json(data);
      console.log(data);
    } catch(error) {
      // Output error to the console incase it fails to send in response
      console.log(error);

      if ('name' in error && error.name === 'ValidationError') return response.status(400).json(error.errors);

      return response.status(500).json(error.errors);
    }
  });


  // Get all userPost route (Read userPost)
router.get("/", async (request, response) => {
    try {
      // Store the query params into a JavaScript Object
      const query = request.query; // Defaults to an empty object {}

      const data = await userPost.find(query);

      response.json(data);
    } catch(error) {
      // Output error to the console incase it fails to send in response
      console.log(error);

      return response.status(500).json(error.errors);
    }
  });

export default router;
