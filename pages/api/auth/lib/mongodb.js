// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
require('dotenv').config();
import { MongoClient } from "mongodb";
const uri = process.env.MONGODB_URI;
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

if (!uri) {
    throw new Error("uri missing")
}

let client = new MongoClient(uri, options);
let clientPromise = client.connect();

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;