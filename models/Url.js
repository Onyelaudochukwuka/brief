const moongoose = require('mongoose');

const urlSchema = new moongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    date: { type: String, default: Date.now() },
});

module.exports = moongoose.model('url', urlSchema);