import { useState } from "react";

function BookingForm({ doctor, onBook }) {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = () => {
    if (!name || !time) return alert("Fill all fields");

    const booking = {
      doctor: doctor.name,
      patient: name,
      time,
    };

    onBook(booking);
  };

  return (
    <div className="card">
      <h2>Booking: {doctor.name}</h2>

      <input
        placeholder="Your Name"
        onChange={(e) => setName(e.target.value)}
      />

      <select onChange={(e) => setTime(e.target.value)}>
        <option value="">Select Time</option>
        <option>10:00 AM</option>
        <option>12:00 PM</option>
        <option>3:00 PM</option>
      </select>

      <br /><br />

      <button onClick={handleSubmit}>Confirm</button>
    </div>
  );
}

export default BookingForm;