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
        const user = await User.findOne({email:req.body.email});

    if (user && bcrypt.compareSync(req.body.password, user.password)){
        res.send({
            _id: user._id, 
            name: user.name, 
            email: user.email, 
        });
    } else {
        res.status(401).send({ message: 'Invalid email or password'})
    }

}