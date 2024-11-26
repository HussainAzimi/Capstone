import { template } from "lodash";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  phone: {
    type: string,
    required: true,

  },
  type: {
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
