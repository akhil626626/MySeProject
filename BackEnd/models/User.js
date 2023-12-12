
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    emailID: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: "String"
    },
    resetPasswordExpires:{
        type: Date,
    },
    accountType: {
        type: String,
        enum: ["Buyer", "Seller", "Admin"],
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    additionalDetails: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Profile",
    },
    inventory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
        }
    ],

})

module.exports = mongoose.model("User", userSchema);