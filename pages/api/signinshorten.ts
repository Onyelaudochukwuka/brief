import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../lib/dbConnect';
const Url = require('../../models/Url');
const validUrl = require('valid-url');
const shortid = require('shortid');
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { longUrl, customExt, email } = req.body;
  const baseUrl = process.env.BASE_URL;
  await dbConnect()

  switch (method) {
    case 'POST':
        if (!validUrl.isUri(baseUrl)) {
        return res.status(400).json('invalid base url');
    }
      const Code = shortid.generate();
      const urlCode = customExt ? customExt : Code;
      if (validUrl.isUri(longUrl)) {
        try {
       
          let extExists = await Url.findOne({ urlCode });
          
          if (!extExists) {
          const shortUrl = baseUrl + urlCode;
           let url = new Url({
                userEmail: email,
                longUrl,
                shortUrl,
                urlCode,
                linkClicks: 0,
                date: new Date(),
              });
              await url.save();

              res.status(200).json(url);
      
          } else {
            res.status(400).json({error: "Link with extension all ready exists please try again with another one"})
          }
        }
        catch (err) {
          console.error(err);
          res.status(500).json('Server error');
        }
      }
         else {
        res.status(401).json('Invalid long url');
    }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}