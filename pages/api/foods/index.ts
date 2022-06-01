import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../utils/connectMongo';
import Food from '../../../models/Food';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
        await dbConnect();
        const foods = await Food.find({});

        res.send(foods);

}