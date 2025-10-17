import bcrypt from 'bcrypt';

import { User } from '../user.schema.js';

export const userSignUp = async (req, res) => {
    const user = await User.findOne({name: req.body.name, email: req.body.email});
    if (user) return res.status(409).json({ message: "Login exist" });

    bcrypt.hash(req.body.password, 10, async (err, hash) => {
      if(err){
          return res.status(500).json({error: err});
      } else {
        try {
          const result = await new User({
              name: req.body.name,
              email: req.body.email,
              password: hash
          })
          .save()
          res.status(201).json({ message: "User created"})
        } catch(error) {
            res.status(500).json({  error });
        }
      }
    });   
};
