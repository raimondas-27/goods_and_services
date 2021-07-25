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

// post new data
// the main for database
router.post('/api/allOrders/new', (req, res) => {
   console.log(req.body);

   const newOrder = new OrderItem(req.body)

   newOrder
       .save()
       .then((result) => res.json(result))
       .catch((err) => res.status(400).json({success: false, err}))
});


//for the testing purposes
// router.post('/api/allOrders/new', (req, res) => {
//
//    const newOrder = new OrderItem({
//       name: "motorbike",
//       price: 799.99,
//       quantity: 1,
//       description: "a vehicle to reach your selected destination",
//       type: "good",
//    })
//
//    newOrder
//        .save()
//        .then((result) => res.json(result))
//        .catch((err) => res.status(400).json({success: false, err}))
// });

///delete data

router.delete('/api/allOrders/delete/:id', async (req, res) => {
   try {
      const deletingGoodOrService = await OrderItem.findByIdAndDelete({_id: req.params.id})
      res.json(deletingGoodOrService);
   } catch (err) {
      res.status(500).json(err);
   }
});

//update data

router.put('/api/allOrders/edit/:id', async (req, res) => {
   console.log("req body",req.body)
   try {

      const updatingGoodOrService = await OrderItem.findByIdAndUpdate({_id: req.params.id},
          req.body)
      console.log(updatingGoodOrService)
      res.json({success: true, msg: updatingGoodOrService});
   } catch (err) {
      res.json(err);
   }

});

//filtering data by selected choice

router.get('/api/allOrders/:type', async (req, res) => {
   const filterBy = req.params.type;
   try {
      const filteringByGoodOrService = await OrderItem.find({type : filterBy})
      res.json({filteringByGoodOrService});
   } catch (err) {
      res.json(err);
   }
});




module.exports = router;