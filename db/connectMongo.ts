import mongoose from "mongoose";

const connectMopngo = async () => {
  await mongoose.set("strictQuery", false);
  await mongoose
    .connect(process.env.NEXT_PUBLIC_MONGO_URL as string)
    .then(() => {
      console.log("DB connect");
      return;
    })
    .catch((error) => {
      return error;
    });
};
export default connectMopngo;
