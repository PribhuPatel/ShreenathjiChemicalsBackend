const { customersModel} = require('../../schema/customers');
const { paymentsModel} = require('../../schema/payments');
const handler = require('../../utils/responseHandler');

exports.add = async (req, res) => {
    const { customerId, payment,description,date } = { ...req.body };
    /* first check user exists or not , if exists check password */

    let data = await paymentsModel.create({ customer:customerId, amount:payment, type:"Cash",status:"Approved",description,date });
    // let customerData =
       let customer = await customersModel.findByIdAndUpdate(customerId, { $inc: {payment:payment},$push:{payments:data}},{new: true,select:'name address gst phone payment payments'});
    // const customerData = await customersModel.updateOne({ });
    // if (customerData) return handler.errorMessage(res, {error:'Already Inserted'});

    // const customer = await customersModel.findByIdAndUpdate(customerId, { $push: { "payments": data }},{upsert:true});
    // res.json(data);
    console.log(data);

    handler.yahResponse(res, {status:true,customer});
};
