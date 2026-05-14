"use client";

import { authClient } from "@/lib/auth-client";
import { DateField } from "@heroui/react";
import { success } from "better-auth";
import { useState } from "react";

const BookingCard = ({ destination }) => {

  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [departureDate, setDepartureDate] = useState(null);

  const { _id, destinationName, country, imageUrl, price } = destination;

  const handleBooking = async () => {
    if (!user) {
      alert("Please login first!");
      return;
    }

    if (!departureDate) {
      alert("Please select a departure date!");
      return;
    }

    const booking = {
      userid: user.id,
      userImage: user.image,
      userName: user.name,
      descriptionId: _id,
      destinationName,
      price,
      imageUrl,
      country,
      departureDate: new Date(departureDate),
    };

    const res = await fetch('http://localhost:5000/booking', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(booking)
    })
    const data = await res.json();
    
    alert('booking successfully ')
  };

  return (
    <div>
      <div className="w-full md:w-64 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl p-6 text-white flex flex-col gap-4 shadow-lg">
        <h3 className="text-xl font-bold">Ready to Go?</h3>
        <p className="text-sm text-white/80">
          Book your trip now and create unforgettable memories!
        </p>
        <div className="text-3xl font-black">
          ${price}
          <span className="text-sm font-normal">/person</span>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-white font-semibold text-sm">
            Departure Date
          </label>
          <input
            type="date"
            onChange={(e) => setDepartureDate(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            className="bg-white/20 text-white rounded-lg px-3 py-2 outline-none border border-white/30 focus:border-white [&::-webkit-calendar-picker-indicator]:invert"
          />
        </div>

        <button
          onClick={handleBooking}
          className="w-full bg-white text-cyan-500 font-bold py-3 rounded-xl hover:bg-white/90 transition-all"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
