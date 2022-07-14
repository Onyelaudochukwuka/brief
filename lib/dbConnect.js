// /lib/dbConnect.js
import mongoose from 'mongoose'

/** 
Source : 
https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/utils/dbConnect.js 
**/


const MONGODB_PARAMS = process.env.MONGODB_USERNAME && process.env.MONGODB_PASSWORD;

if (!MONGODB_PARAMS) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }
  const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}$1@cluster0.bmcxh.mongodb.net/url?retryWrites=true&w=majority`;
  const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }

  if (!cached.promise) {

    cached.promise = mongoose.connect(uri,options).then(mongoose => {
      return mongoose
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect