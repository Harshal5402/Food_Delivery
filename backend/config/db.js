import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://FoodDelivery:Food_Delivery@cluster0.r2h57.mongodb.net/Food_Delivery')
    .then(() => console.log('Connecting to the DataBase'))
    .catch(err => console.error('Error Connecting to the DataBase', err))
}