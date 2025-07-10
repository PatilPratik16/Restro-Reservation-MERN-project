import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`
    );
    console.log(
      `database connected successfully from connect-db.js: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`error in connect-db.js: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
