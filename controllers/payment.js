const BigPromise = require("../middleware/Bigpromise");
const Payment = require("../models/payment")
const express = require("express");
const app = express();
const stripe = require("stripe")(
  process.env.STRIPT_ID
);

exports.paymentcollegefree = BigPromise(async (req, res, next) => {
  // const { amount } = req.body;
  const {id} = req.params
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
    success_url: `https://school-management-system-frontend-rosy.vercel.app/payment/pay/${id}/success`,
    cancel_url: `https://school-management-system-frontend-rosy.vercel.app/pay/${id}/cancel`,
  });
  const addingID = await Payment.findByIdAndUpdate({"_id":id},{"paymentId":session.id})
  res.status(200).json({
    success: true,
    session,
  });
  }
  throw new CustomError("Fake id Entered", 400);
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
  const pay =  await Payment.updateOne({"_id":id},{"ispaid":ispaid})
  console.log(pay)
  res.status(200).json({
    success: true,
    ispaid:ispaid,
  });

})

// cs_test_a1aOkTwJuMfRTJIhLxKBSp31yloPs9OxK1YHU7dFWImomojkrB3ufVDXr5


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