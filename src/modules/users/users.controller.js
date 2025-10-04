import bcrypt from 'bcrypt';
import { User } from './user.schema.js';

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


export const userSignIn = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if(!user) return res.status(401).json({ message: 'Auth failed' });

    bcrypt.compare(req.body.password, user.password, (err, result) => {
      if(err) return res.status(401).json({ message: 'Auth failed' });
      if(result) {
          const token = jwt.sign({ name: user.name, userId: user._id }, 
              process.env.JWT_KEY,
              {  expiresIn: "1h" }
          );
          return res.status(200).json({
              message: 'Auth successful',
              token: token
          });
      }
      res.status(401).json({ message: 'Auth failed <password>' });
    })
};



export const getUser = async (req, res) => {  
  try {
    const users = await User.find();
    console.log({ users });
    
    res.status(200).json(users);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}