import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  title: {
    type: String,
    required: true,
    enum: ["question", "answear", "success-story", "feedback"]
  },
  body: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  create: {
    type: Date,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
});

const post = mongoose.model("post", postSchema);

export default post;
