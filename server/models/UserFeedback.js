import { max } from "lodash";
import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  phoneNumber: {
    type: phoneNumber,
    required: true,
  },
  satisfy: {
    type: Boolean,
  },

  body: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },

  date: {
    type: Date,
    required: true,

  },
});

const feedback = mongoose.model("feedback", feedbackSchema);

export default feedback;
