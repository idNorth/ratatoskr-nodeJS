import { Category } from '../category.schema.js';

export const addCategory = async (req, res) => {  
  try {
    const category = await new Category({ name: res.body.name }).save();  
    res.status(200).json(category);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}