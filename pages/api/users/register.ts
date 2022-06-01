
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../utils/connectMongo';
import User from '../../../models/User';
import bcrypt from 'bcryptjs';


// type Data = {
//     _id: string,
//     name: string,
//     email: string,
//     password: string
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
   
        await dbConnect();
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
        });

     const user = await newUser.save();
         
     res.send({
             _id: user._id, 
             name: user.name, 
             email:user.email,
         });

    }


// handler.post(async(req, res) => {
//     await db.connect();
//     const newUser = new User({
//         name: req.body.name,
//         email: req.body.email,
//         password: bcrypt.hashSync(req.body.password),
//         isAdmin: false,
//     });
//     const user = await newUser.save();
//     await db.disconnect();

//         const token = signToken(user);
//         res.send({
//             token,
//             _id: user._id, 
//             name: user.name, 
//             email:user.email, 
//             isAdmin: user.isAdmin,
//         });
//     } 
  
// );

// export default handler; 