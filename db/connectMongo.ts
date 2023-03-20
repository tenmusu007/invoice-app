import mongoose from 'mongoose';

const connectMongo = async () => {
  await mongoose.set('strictQuery', false);
  await mongoose
    .connect(process.env.NEXT_PUBLIC_MONGO_URL as string)
    .then(() => {
      console.log('DB connect');
      return;
    })
    .catch((error) => {
      console.log('DB not connect');
      
      return error;
    });
};
export default connectMongo;
