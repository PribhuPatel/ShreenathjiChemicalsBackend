// const { customersModel } = require('../../schema/customers');
const { productsModel } = require('../../schema/products');

const handler = require('../../utils/responseHandler');

exports.getAll = async (req, res) => {
    // const { phone, name,address,gst } = { ...req.body };
    /* first check user exists or not , if exists check password */
    let products = await productsModel.find({},'name base_price sell_price');
    // if (customerData) return handler.errorMessage(res, {error:'Already Inserted'});

    handler.yahResponse(res, {products:products});
};

exports.get = async  (req,res)=>{
        let customerId = req.params.id;
        let customer = await customersModel.find({_id:customerId},'name gst phone address payment');
        console.log(customer[0]);
        handler.yahResponse(res,{customer:customer[0]});
};
exports.getName = async  (req,res)=>{
    let products = await productsModel.find({},'name sell_price');
    // if (customerData) return handler.errorMessage(res, {error:'Already Inserted'});

    handler.yahResponse(res, {products:products});
};