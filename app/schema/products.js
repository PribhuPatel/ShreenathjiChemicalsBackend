const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* this is schema, which includes colomn names and their expected values */
// let { type: Schema.Types.ObjectId, ref: 'customers' }, = {};
const productsSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    base_price:{
        required: true,
        type: Number
    },
    sell_price:{
        required: true,
        type: Number
    },
});

/* this is for create mongodb collection(table in general) based on created schema */
const productsModel = mongoose.model('products', productsSchema);

module.exports = {
    productsModel
};
