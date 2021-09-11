const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventSchema = new Schema({
    title: {
        type: String,
    },
    descriptions: {
        type: String,
    },
    content: {
        type: String,
    },
    status: {
        type: Number,
    },
    imgUrl: {
        type: String,
    },
    date:{
        type: String
    }
},{timestamps: true})

module.exports = mongoose.model('event', EventSchema)