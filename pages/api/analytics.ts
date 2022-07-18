import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../lib/dbConnect';
const Url = require('../../models/Url');
const validUrl = require('valid-url');
const shortid = require('shortid');
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const {  email } = req.body;
  await dbConnect()

  switch (method) {
    case 'POST':
        try {
          let url = await Url.find({  userEmail: email });
            if (url) {
            res.status(200).json(url);
          } else {
            res.status(200).json(false);
          }
        } catch (err) {
          console.error(err);
          res.status(500).json('Server error');
        }
      break
    default:
    res.status(400).json({ success: false })
      break
  }
};