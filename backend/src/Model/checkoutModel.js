const mongoose = require('mongoose')


const paymentSchema = new mongoose.Schema({
    email:{
        type: String,
        require: true,
        trim: true,
    },
    transactionId: {
        type: String,
    },
    products: {
        type: Array,
    },
    paymentStatus:{
        type: String,
    }
},{timestamps: true})

const payment = mongoose.model('payment', paymentSchema)

module.exports = payment