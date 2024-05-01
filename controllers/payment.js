const BigPromise = require("../middleware/Bigpromise");
const Payment = require("../models/payment")
const express = require("express");
const app = express();
const stripe = require("stripe")(
  "sk_test_51MbnZVSJHHXXNgLXlV6jBeCNuwzdZ3SsPrsTAKnndxcYHbkQT4vTtkXp6Ax5Nq4muNvrMhPAQvgjNTDKsuXONSdB00Baei0TdI"
);


exports.paymentcollegefree = BigPromise(async (req, res, next) => {
  // const { amount } = req.body;
  const {id} = req.params
  console.log(`"${process.env.STRIPT_ID}"`)
  const payment = await Payment.findOne({"_id":id})
  if(payment){
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "inr",
          product_data: {
            name: "XYZ college free payment",
          },
          unit_amount: payment.amount * 100,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `http://localhost:3000/payment/pay/${id}/success`,
    cancel_url: `http://localhost:3000/pay/${id}/cancel`,
  });
  console.log( session )
  const addingID = await Payment.findOne({"_id":id})
  addingID.paymentId = session.id
  addingID.save()
  console.log(addingID)
  res.status(200).json({
    success: true,
    session,
  });
  }
 
  // return next(new CustomError("fake id entered", 400));
  
});

exports.checkstatus = BigPromise(async (req, res, next) => {
  const {id} = req.params
  const payment = await Payment.findOne({"_id":id})
  const session = await stripe.checkout.sessions.retrieve(
  payment.paymentId
    // "cs_test_a1wA1FCSdDh6vOQ79KO2OpO5UaHqyVlwFCdJdtT0VSFPtMOG0XKOK5FObz"
  );

let ispaid = null
  if (session.payment_status === "paid") {
  ispaid = true
  
  }
  else{
ispaid = false
 
  }
  console.log(ispaid)
  const pay =  await Payment.updateOne({"_id":id},{"ispaid":ispaid})
  // console.log(pay)
  res.status(200).json({
    success: true,
    ispaid:ispaid,
  });

})




exports.addNewPayment = BigPromise(async (req, res, next) => {
const{sid, amount,lastDay,title,description} = req.body;
const lid = req.user.id
// const newPayment = await Payment.create({sid,lid,amount,lastDay,description,title});
const newPayment = await Payment.create({sid,amount,lastDay,description,title,lid });


newPayment.save({ validateBeforeSave: false });
res.status(200).json({
  success: true,
 newPayment
});
})


exports.findPaymentList = BigPromise(async (req, res, next) => {
  const{sid} = req.params
  // const lid = req.user.id
  // const newPayment = await Payment.create({sid,lid,amount,lastDay,description,title});
  const paymentList = await Payment.find({sid});

  res.status(200).json({
    success: true,
   paymentList
  });
  })

  exports.findPaymentPendingCount = BigPromise(async (req, res, next) => {
    const{sid} = req.params
    // const lid = req.user.id
    // const newPayment = await Payment.create({sid,lid,amount,lastDay,description,title});
    const paymentPendingCount = await Payment.find({sid,ispaid:false}).count();
  
    res.status(200).json({
      success: true,
      paymentPendingCount
    });
    })


    exports.findPaymentPendingCount = BigPromise(async (req, res, next) => {
      const{sid} = req.params
      // const lid = req.user.id
      // const newPayment = await Payment.create({sid,lid,amount,lastDay,description,title});
      const paymentPendingCount = await Payment.find({sid,ispaid:false}).count();
    
      res.status(200).json({
        success: true,
        paymentPendingCount
      });
      })