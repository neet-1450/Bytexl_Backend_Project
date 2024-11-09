// const mongoose = require('mongoose');
// const mongoose = require("mongoose");

const mongoose=require("mongoose");


const SubscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subscribedChannel:{
        type: String,
        required: true,
    },
    subscribedDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Subscriber',SubscriberSchema);