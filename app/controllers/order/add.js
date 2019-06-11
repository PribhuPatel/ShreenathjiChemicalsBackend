const { customersModel} = require('../../schema/customers');
const { paymentsModel} = require('../../schema/payments');

const { ordersModel} = require('../../schema/orders');
const handler = require('../../utils/responseHandler');

exports.add = async (req, res) => {
    // console.log(req.body);
    const { customerId, quantity, price,product,date,bill_no } = { ...req.body };
    /* first check user exists or not , if exists check password */

    let data = await ordersModel.create({customer:customerId,product:product,price:price,quantity:quantity,bill_no:bill_no,status:"Delivered",date,payment:quantity * price} );

    // let data =
       let payment = await paymentsModel.create({ customer:customerId, amount:quantity * price * (-1), type:"Ordered",status:"Approved",order:data._id,description:req.get('userName')+" New Order Added" });
    // let customerData =
    // let customer = await customersModel.findByIdAndUpdate(customerId, { $inc: {payment:payment},$push:{payments:data}},{new: true,select:'name address gst phone payment payments'});
    // console.log()
    // let customerData =
    let customer = await customersModel.findByIdAndUpdate(customerId, { $push:{orders:data,payments:payment},$inc: {payment:quantity * price * (-1)}});
    // const customerData = await customersModel.updateOne({ });
    // if (customerData) return handler.errorMessage(res, {error:'Already Inserted'});

    console.log(req.get('userName') +" added Order with Order Id=" + data._id +" of Rs. "+payment.amount+" to customer "+customer.name);

    // const customer = await customersModel.findByIdAndUpdate(customerId, { $push: { "payments": data }},{upsert:true});
    // res.json(data);
    // console.log(data);

    handler.yahResponse(res, {status:true});
};
