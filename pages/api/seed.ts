import type { NextApiRequest, NextApiResponse } from 'next'
import User from '../../models/User';
import Food from '../../models/Food';
import Data from '../../utils/Data';
import dbConnect from '../../utils/connectMongo';

// type Data = {
//   name: string,
//   email: string,
//   password: string
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    await dbConnect();
    await User.deleteMany();
    await User.insertMany(Data.users)
    await Food.deleteMany();
    await Food.insertMany(Data.foods);
    res.send({message: 'seeded successfully'})
}


// const handler = nc();

// handler.get(async(req, res) => {
//     await db.connect();
//     await User.deleteMany();
//     await User.insertMany(Data.users);
//     await Product.deleteMany();
//     await Product.insertMany(Data.products);
//     await db.disconnect();
//     res.send({message: 'seeded successfully'});
// })

// export default handler;