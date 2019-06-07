// const { customersModel } = require('../../schema/customers');
const { productsModel } = require('../../schema/products');

const { ordersModel} = require('../../schema/orders');
const handler = require('../../utils/responseHandler');

exports.getAll = async (req, res) => {
    // const { customerId } = { ...req.body };
    let skip = Number(req.query.skip);
    /* first check user exists or not , if exists check password */
    let orders = await ordersModel.find({}).populate('product').populate({path:'customer',select:'name'}).sort({_id:-1}).skip(Number(skip)).limit(10);
    // if (customerData) return handler.errorMessage(res, {error:'Already Inserted'});

    handler.yahResponse(res, {orders:orders});
};

exports.get = async  (req,res)=>{
        let customerId = req.params.id;
        let orders = await ordersModel.find({customer:customerId}).populate('product');
    // if (customerData) return handler.errorMessage(res, {error:'Already Inserted'});

    handler.yahResponse(res, {orders:orders});
};

// exports.getName = async  (req,res)=>{
//     let products = await productsModel.find({},'name sell_price');
//     // if (customerData) return handler.errorMessage(res, {error:'Already Inserted'});
//
//     handler.yahResponse(res, {products:products});
// };