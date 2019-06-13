const { customersModel} = require('../../schema/customers');
const { paymentsModel} = require('../../schema/payments');

const { ordersModel} = require('../../schema/orders');
const handler = require('../../utils/responseHandler');

exports.edit = async (req, res) => {
    // console.log(req.body);
    const { customerId, quantity, price,product,date,bill_no ,order} = { ...req.body };
    /* first check user exists or not , if exists check password */

    // let data = await ordersModel.create({customer:customerId,product:product,price:price,quantity:quantity,bill_no:bill_no,status:"Delivered",date,payment:quantity * price} );

    let data = await ordersModel.findByIdAndUpdate(order,{customer:customerId,product:product,price:price,quantity:quantity,bill_no:bill_no,date:date,payment:quantity * price},{new:true} );

    // let data =
    // console.log(data);
    let payment = await paymentsModel.findOneAndUpdate({order:data._id},{  amount:quantity * price * (-1)});

    // console.log(payment);
    let customer = await customersModel.findByIdAndUpdate(customerId, { $inc: {payment:((payment.amount*(-1)) + (quantity * price * (-1)))}});

    console.log(req.get('userName') +" edited Order with Order Id=" + data._id +" of Rs. "+payment.amount+" to customer "+customer.name);

    // console.log(customer.payment);
    // const customerData = await customersModel.updateOne({ });
    // if (customerData) return handler.errorMessage(res, {error:'Already Inserted'});

    // const customer = await customersModel.findByIdAndUpdate(customerId, { $push: { "payments": data }},{upsert:true});
    // res.json(data);
    // console.log(data);

    handler.yahResponse(res, {status:true});
};
