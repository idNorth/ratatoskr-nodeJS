import { User } from '../user.schema.js';

export const getUser = async (req, res) => {  
  try {
    const users = await User.find();    
    res.status(200).json(users);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}