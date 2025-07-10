import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: [validator.isEmail, "Invalid Email"],
    },
    phone: {
      type: String,
      required: true,
      minLength: [10, "length should be 10"],
      maxLength: [10, "length should be 10"],
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String, // e.g. "7:00 PM - 9:00 PM"
      required: true,
    },
    numberOfGuests: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { timestamps: true }
);

export const Reservation = mongoose.model("Reservation", reservationSchema);
