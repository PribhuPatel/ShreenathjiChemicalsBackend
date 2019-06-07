const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* this is schema, which includes colomn names and their expected values */
// let { type: Schema.Types.ObjectId, ref: 'customers' }, = {};
const ordersSchema = new Schema({
    customer:{type: Schema.Types.ObjectId, ref: 'customers',required:true},
    product:{type: Schema.Types.ObjectId, ref: 'products',required:true},
    price:{
        required: true,
        type: Number
    },
    quantity:{
        required: true,
        type: Number
    },
    bill_no:{
        type: String,
        default:""
    },
    status:{
        required: true,
        type: String
    },
    date:{
        required: true,
        type: Date
    },
    payment:{
        required: true,
        type: Number
    }
});

/* this is for create mongodb collection(table in general) based on created schema */
const ordersModel = mongoose.model('orders', ordersSchema);

module.exports = {
    ordersModel
};
