const express = require('express');
const OrderItem = require("../models/orders")
const router = express.Router();

//get list of orders and goods
router.get('/api/allOrders', async (req, res) => {
   try {
      const allOrders = await OrderItem.find()
      res.json(allOrders);
   } catch (err) {
      res.status(500).json('internal error');
   }
});

//post new data
//the main for database
// router.post('/api/allOrders/new', (req, res) => {
//    console.log(req.body);
//
//    const newOrder = new OrderItem(req.body)
//
//    newOrder
//        .save()
//        .then((result) => res.json(result))
//        .catch((err) => res.status(400).json({success: false, err}))
// });


//for the testing purposes
router.post('/api/allOrders/new', (req, res) => {

   const newOrder = new OrderItem({
      name: "fly with plane",
      price: 29.99,
      quantity: 1,
      description: "a true plane ply in the sky",
      length : 1,
      type: "service",
   })

   newOrder
       .save()
       .then((result) => res.json(result))
       .catch((err) => res.status(400).json({success: false, err}))
});


module.exports = router;