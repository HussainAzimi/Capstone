import mongoose from "mongoose";

const postSchema = new mongoose.Schema({


  author: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },

  content: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  create: {

      type: Date,
      default: Date.now
  },
});

const post = mongoose.model("post", postSchema);

export default post;
