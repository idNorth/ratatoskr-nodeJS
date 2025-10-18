import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  { 
    name: {
      type: Map,
      of: String,
      required: true,
      trim: true
    } 
  },
  { timestamps: true }
);

export const Category = mongoose.model("category", categorySchema);