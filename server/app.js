// 'Import' the Express module
import express from 'express';
// Initialize the Express application
import dotenv from 'dotenv';
import mongoose from 'mongoose';
const app = express();

// Load environment variables from .env file
dotenv.config();
mongoose.connect(process.env.MONGODB);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);



// Handle the request with HTTP GET method from http://localhost:4040/status
app.get("/status", (request, response) => {
   // Create the headers for response by default 200
   // Create the response body
   // End and return the response
  response.send(JSON.stringify({ message: "Service healthy" }));
});

// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040
app.listen(4040, () => console.log("Listening on port 4040"));

app.use(express.json());
app.use(ligging);
