const { paymentsModel } = require('../../schema/payments');
const handler = require('../../utils/responseHandler');

exports.getAll = async (req, res) => {
    // const { phone, name,address,gst } = { ...req.body };
    // {
        let skip = req.query.skip;
    /* first check user exists or not , if exists check password */
    let payments = await paymentsModel.find({}).populate({path:'customer',select:'name'}).sort({_id:-1}).skip(Number(skip)).limit(10);
    // if (customerData) return handler.errorMessage(res, {error:'Already Inserted'});

    handler.yahResponse(res, {payments:payments});
};

exports.get = async  (req,res)=>{
        let skip = req.query.skip;
        let customerId = req.params.customerId;
    let payments = await paymentsModel.find({customer:customerId}).sort({_id:-1}).skip(Number(skip)).limit(10);
    // if (customerData) return handler.errorMessage(res, {error:'Already Inserted'});

    handler.yahResponse(res, {payments:payments});
};