// /lib/dbConnect.js
import mongoose from 'mongoose'

/** 
Source : 
https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/utils/dbConnect.js 
**/




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
  const uri = await process.env.MONGODB_URI;
  console.log(uri);
  if (!uri) {
  throw new Error("uri missing")
}
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