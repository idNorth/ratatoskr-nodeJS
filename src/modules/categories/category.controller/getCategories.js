import { Category } from '../category.schema.js';

export const getCategories = async (req, res) => {  
  try {
    const categories = await Category.find();    
    res.status(200).json(categories);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}