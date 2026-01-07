const mongoose = require("mongoose")

const announceSchema = new mongoose.Schema({
    title:String,
    message:String,
    category:String,
    priority:String,
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model("announcements",announceSchema);