const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ordersItemSchema = new Schema(
    {
       name: {
          type: String,
          required: true,
       },
       price: {
          type: Number,
          required: true,
       },
       quantity: {
          type: Number,
       },
       description: {
          type: String,
          required: true,
       },
       length: {
          type: Number,
          required: false,
       },
       type : {
          type: String,
          required: true,
       }
    },
    {timestamps: true} /// adds timestamps
);

// exportuoti naujai sukurta objekta pagal sia schema
//                           turetu buti vienaskai musu kolecijos pav.
const OrderItem = mongoose.model('orders', ordersItemSchema);

module.exports = OrderItem;