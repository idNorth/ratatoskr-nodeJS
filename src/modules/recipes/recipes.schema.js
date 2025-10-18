import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    name: {
      type: Map,
      of: String,
      required: true,
      trim: true
    },
    description: {
      type: Map,
      of: String,
      required: true,
      trim: true
    },
    cooking_time: { type: Number, required: true, trim: true },
    calories: { type: Number, required: true, trim: true },
    uid: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'category' },
  },
  { timestamps: true }
);

export const Recipe = mongoose.model("recipe", recipeSchema);