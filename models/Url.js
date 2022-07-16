import mongoose from 'mongoose'
const urlSchema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    email: String,
    linkClicks: Number,
    date: { type: String, default: Date.now() },
});

module.exports = mongoose.models.Url || mongoose.model('Url', urlSchema);