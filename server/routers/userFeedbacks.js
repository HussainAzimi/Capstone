
import { Router } from  'express';
import userFeedback from '../models/UserFeedback.js';

const router = Router();

// Create userfeedback route
router.post("/", async (request, response) => {
    try {
      const newfeedback = new userFeedback(request.body);

      const data = await newfeedback.save();

      response.json(data);
    } catch(error) {
      // Output error to the console incase it fails to send in response
      console.log(error);

      if ('name' in error && error.name === 'ValidationError') return response.status(400).json(error.errors);

      return response.status(500).json(error.errors);
    }
  });


  // Get all feedbacks route (Read feedback)
router.get("/", async (request, response) => {
    try {
      // Store the query params into a JavaScript Object
      const query = request.query; // Defaults to an empty object {}

      const data = await userFeedback.find(query);

      response.json(data);
    } catch(error) {
      // Output error to the console incase it fails to send in response
      console.log(error);

      return response.status(500).json(error.errors);
    }
  });

  // Get a single feedback by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await userFeedback.findById(request.params.id);

    response.json(data);
  } catch(error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors)
  }
});


// Delete a feedback by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await userFeedback.findByIdAndDelete(request.params.id);

    response.json(data);
  } catch(error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});


// Update a single feedback by ID
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await userFeedback.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          author: body.author,
          phoneNumber: body.phoneNumber,
          satisfy: body.satisfy,
          body: body.body,
          date: body.date
        }
      },
      {
        new: true,
        runValidators: true
      }
    );

    response.json(data);
  } catch(error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ('name' in error && error.name === 'ValidationError') return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});


export default router;
