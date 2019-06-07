const { paymentsModel } = require('../../schema/payments');
const handler = require('../../utils/responseHandler');

exports.getAll = async (req, res) => {
    // const { phone, name,address,gst } = { ...req.body };
    /* first check user exists or not , if exists check password */
    let payments = await paymentsModel.find({}).populate({path:'customer',select:'name'});
    // if (customerData) return handler.errorMessage(res, {error:'Already Inserted'});

    handler.yahResponse(res, {payments:payments.reverse()});
};

exports.get = async  (req,res)=>{
        let skip = req.params.skip;
    let payments = await paymentsModel.find({}).populate({path:'customer',select:'name'}).sort({_id:-1}).skip(Number(skip)).limit(10);
    // if (customerData) return handler.errorMessage(res, {error:'Already Inserted'});

    handler.yahResponse(res, {payments:payments});
};