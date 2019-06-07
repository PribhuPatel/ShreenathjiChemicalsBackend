const { customersModel } = require('../../schema/customers');
const handler = require('../../utils/responseHandler');

exports.add = async (req, res) => {
    const { phone, name,address,gst } = { ...req.body };
    /* first check user exists or not , if exists check password */
    const customerData = await customersModel.findOne({ phone });
    if (customerData) return handler.errorMessage(res, {error:'Already Inserted'});

    const data = await customersModel.create({ phone, address, name,gst,payment:0,orders:[],payments:[] });
    // res.json(data);


    handler.yahResponse(res, {status:true});
};
