import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
  try {
    const conectInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    )
    console.log(
      `data base is connected and host on ${conectInstance.connection.host}`
    );
  } catch (error) {
    console.log("err", error);
    process.exit(1);
  }
};

export default connectDb;
