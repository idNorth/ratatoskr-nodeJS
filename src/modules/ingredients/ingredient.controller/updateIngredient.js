import { Ingredient } from '../ingredient.schema.js';

export const updateIngredient = async (req, res) => {
  try {
    const dataName = Object.entries(res.body.name || {}).reduce((acc, [k, v]) => {
      acc[`name.${k}`] = v;
      return acc;
    }, {})
    await Ingredient.updateOne(
      { _id: req.query.id },
      { $set: { ...dataName } }
    );
    res.status(200).json();
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}