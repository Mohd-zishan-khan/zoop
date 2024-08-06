// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";
// import Stripe from "stripe"

// const stripe=new Stripe(process.env.STRIPE_SECRET_KEY)

// // placing user ordr from frontend
// const placeOrder=async(req,res)=>{

//   try {
//     const newOrder=new orderModel({
//       userId:req.body.userId,
//       items:req.body.items,
//       amount:req.body.amount,
//       address:req.body.address  
//     })
    
//     await newOrder.save();
//     await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});
    
//     const line_items=req.body.items.map((item)=>({
//         price_data:{
//             currency:"inr",
//             product_data:{
//                 name:item.name
//             },
//             unit_amount:item.price*100
//         },
//         quantity:item.quantity

//     }))

//     line-items.push({
//         price-data:{
//             currency:"inr",
//             product_data:
//         }

//     })



//   } catch (error) {
    
//   }
// }


// export {placeOrder}