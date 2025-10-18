import mongoose from "mongoose";

const ingredientSchema = new mongoose.Schema(
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

export const Ingredient = mongoose.model("Ingredient", ingredientSchema);