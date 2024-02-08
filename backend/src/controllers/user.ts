// import User from "../models/user";
// import bcrypt from "bcryptjs";
// import { generateToken } from "../utils";

// import { Request, Response } from "express"; 

// const signup = async (req: Request, res: Response): Promise<void> => {
//     const { name, email, password } = req.body;

//     const newUser = new User({
//         name: name,
//         email: email,
//         password: bcrypt.hashSync(password),
//     });

//     try {
//         const user = await newUser.save();

//         res.send({
//             _id: user._id,
//             name: user.name,
//             email: user.email,
//             token: generateToken(user),
//         });
//     } catch (error) {
//         res.status(500).send({ message: "Error in user creation" });
//     }
// };

// const signin = async (req: Request, res: Response): Promise<void> => {
//     const { password: passwordFromWebsite, email } = req.body;

//     try {
//         const user = await User.findOne({ email: email });
//         if (user) {
//             if (bcrypt.compareSync(passwordFromWebsite, user.password)) {
//                 res.send({
//                     _id: user._id,
//                     name: user.name,
//                     email: user.email,
//                     token: generateToken(user),
//                 });
//                 return;
//             }
//         }
//         res.status(401).send({ message: "Invalid User/Password" });
//     } catch (error) {
//         res.status(500).send({ message: "Error in user sign in" });
//     }
// };

// export { signup, signin };
