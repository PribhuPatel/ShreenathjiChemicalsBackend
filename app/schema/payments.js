const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* this is schema, which includes colomn names and their expected values */
// let { type: Schema.Types.ObjectId, ref: 'customers' }, = {};
const paymentsSchema = new Schema({

    customer: { type: Schema.Types.ObjectId, ref: 'customers' },
    amount: {
        required: true,
        type: Number
    },
    type:{
        required: true,
        type: String
    },
    status:{
        required: true,
        type: String
    },
    date: {type:Date,default:Date.now(),required:true}
});

/* this is for create mongodb collection(table in general) based on created schema */
const paymentsModel = mongoose.model('payments', paymentsSchema);

module.exports = {
    paymentsModel
};
