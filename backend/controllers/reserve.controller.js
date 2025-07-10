import { Reservation } from "../models/reserve.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const reserve = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, phone, date, time, numberOfGuests } =
    req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !date ||
    !time ||
    !numberOfGuests
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ message: "Invalid phone number" });
  }
  const existedReservation = await Reservation.findOne({
    date,
    time,
    phone,
  });
  
  if (existedReservation) {
    throw new ApiError(
      400,
      "You already have a reservation for this date and time"
    );
  }

  const reservation = await Reservation.create({
    firstName,
    lastName,
    email,
    phone,
    date,
    time,
    numberOfGuests,
  });

  if (!reservation) {
    throw new ApiError(500, "Reservation could not be created");
  }

  res.status(201).json(
    new ApiResponse(201, "Reservation created successfully", {
      reservation: reservation,
    })
  );
});
export { reserve };
