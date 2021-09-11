const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NewsSchema = new Schema({
    unit: {
        type: String,
    },
    bloodType: {
        type: String,
    },
    status: {
        type: Number,
    },
    imgUrl: {
        type: String,
    },
    reason: {
        type: String,
    },
},{timestamps: true})

module.exports = mongoose.model('news', NewsSchema)