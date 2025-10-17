import dotenv from "dotenv";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { User } from '../user.schema.js';

export const userSignIn = async (req, res) => {    
    const user = await User.findOne({ email: req.body.email });
    if(!user) return res.status(401).json({ message: 'Auth failed' });

    bcrypt.compare(req.body.password, user.password, (err, result) => {
      if(err) return res.status(401).json({ message: 'Auth failed' });
      if(result) {          
          const token = jwt.sign({userId: user._id }, 
              process.env.JWT_SECRET_KEY,
              {  expiresIn: "1h" }
          );
          res.cookie('ACCESS_TOKEN', token, { secure: true, maxAge: 3600000 })
          return res.status(200).json({  message: 'Auth successful' });
      }
      res.status(401).json({ message: 'Auth failed <password>' });
    })
};



