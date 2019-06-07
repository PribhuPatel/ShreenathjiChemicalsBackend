const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* this is schema, which includes colomn names and their expected values */
const customersSchema = new Schema({
    payment:{
        required:true,
        type:Number
    },
    phone: {
        unique : true,
        required: true,
        type: Number,
    },
    address: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    gst: {
        type: String,
        required: true,
        unique: true,
    },
    orders: [{ type: Schema.Types.ObjectId, ref: 'orders' }],
    created_at: {
        type: Date,
        default: Date.now
    },
    payments:[{ type: Schema.Types.ObjectId, ref: 'payments' }]
});

/* this is for create mongodb collection(table in general) based on created schema */
const customersModel = mongoose.model('customers', customersSchema);

module.exports = {
    customersModel
};
