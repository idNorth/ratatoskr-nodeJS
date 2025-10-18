import { Ingredient } from '../ingredient.schema.js';

export const getIngredients = async (req, res) => {  
  try {
    const ingredients = await Ingredient.find();    
    res.status(200).json(ingredients);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}