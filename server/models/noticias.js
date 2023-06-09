import { Schema, model } from "mongoose";

const noticiaSchema = new Schema(
  {
    file: {
      type: String,
    },
    image_url: {
      type: String,
    },
    image_id: {
      type: String,
    },
    title: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    content: {
      type: String,
      trim: true,
    },

    date: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("noticias", noticiaSchema);
