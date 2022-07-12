import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../lib/dbConnect';
const Url = require('../../models/Url');
const validUrl = require('valid-url');
const shortid = require('shortid');
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
const { method } = req;
  await dbConnect()

  switch (method) {
    case 'GET':
  try {
      const url = await Url.findOne({ urlCode: req.query.slug });
      if (url) {
          return res.redirect(308,url.longUrl);
      } else {
          return res.status(404).json('No url found');
      }
  } catch (err) {
      console.error(err);
      res.status(500).json('Server error');
  }  
      break
     
    default:
      res.status(500).json('Server error');
      break
  }
}
