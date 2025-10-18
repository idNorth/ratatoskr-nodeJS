import { Ingredient } from '../ingredient.schema.js';

export const addIngredient = async (req, res) => {  
  try {
    const ingredient = await new Ingredient({ name: res.body.name }).save();  
    res.status(200).json(ingredient);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}