import React, { useState } from "react";
import axios from "axios";

const Reserve = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    numberOfGuests: "",
    date: "",
    time: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/done`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.status === 201 || res.status === 200) {
        setStatus("✅ Reservation successful!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          numberOfGuests: "",
          date: "",
          time: "",
        });

      } else {
        setStatus("❌ Something went wrong. Try again.");
      }
    } catch (error) {
      console.error(error.response);
      const message =
        error?.response?.data?.message || "❌ Error sending reservation.";

      setStatus(`${message}`);
    }
  };

  return (
    <div className="pt-24 pb-12 px-4 min-h-screen bg-gradient-to-br from-white to-orange-50">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#FF8000] mb-8">
          Book Your Table
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF8000] bg-gray-50"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF8000] bg-gray-50"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF8000] bg-gray-50"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF8000] bg-gray-50"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">
                Number of Guests
              </label>
              <input
                type="number"
                name="numberOfGuests"
                value={formData.numberOfGuests}
                onChange={handleChange}
                required
                min={1}
                className="rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF8000] bg-gray-50"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF8000] bg-gray-50"
              />
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF8000] bg-gray-50"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#FF8000] text-white py-3 rounded-xl text-lg font-medium hover:bg-orange-600 transition duration-300"
          >
            Confirm Reservation
          </button>

          {/* Status Message */}
          {status && (
            <div
              className={`mt-4 px-4 py-3 rounded-xl text-center text-sm font-medium ${
                status.startsWith("✅")
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {status}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Reserve;
