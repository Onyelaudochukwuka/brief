// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient } from "mongodb"

const uri = "mongodb+srv://udoka:furthermaths$1@cluster0.bmcxh.mongodb.net/auth?retryWrites=true&w=majority";
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

if (!process.env.MONGODB_URI) {
    throw new Error("Please add your Mongo URI to .env.local")
}

let client = new MongoClient(uri, options);
let clientPromise = client.connect();

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;