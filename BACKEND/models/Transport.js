const mongoose = require("mongoose");
const Schema =mongoose.Schema;
const transportSchema = new Schema({
    Vehicle_Registration_No :{
        type : String,
        required : true
    },

    Date :{
        type: Date,
        required: true
    },
    Driver_Name:{
        type : String,
        required:false
    },

    Description:{
        type : String,
        required:false
    },
    Delivery_Status:{
        type : String,
        required:false
    }
})

const Transport = mongoose.model("Transport", transportSchema);
module.exports =Transport;
