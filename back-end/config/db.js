import mongoose from "mongoose";

export const connectDB= async()=>{
 await mongoose.connect('mongodb+srv://zishankhan:khan.1234@cluster0.klxao1r.mongodb.net/food-del').then(()=>console.log("DB connected"))

}