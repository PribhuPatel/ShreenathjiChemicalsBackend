const { customersModel } = require('../../schema/customers');
const handler = require('../../utils/responseHandler');

exports.getAll = async (req, res) => {
    // const { phone, name,address,gst } = { ...req.body };
    /* first check user exists or not , if exists check password */
    let customers = await customersModel.find({},'name');
    // if (customerData) return handler.errorMessage(res, {error:'Already Inserted'});

    handler.yahResponse(res, {customers:customers});
};

exports.get = async  (req,res)=>{
        let customerId = req.params.id;
        let customer = await customersModel.find({_id:customerId},'name gst phone address payment payments').populate({path:'payments',select:'amount date'});
        console.log(customer[0]);
        handler.yahResponse(res,{customer:customer[0]});
};