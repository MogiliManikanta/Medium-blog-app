import mongoose from "mongoose";
const connectToDatabase = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Successfully connected"))
    .catch((e) => console.log("error in connecting"));
};

export default connectToDatabase;
