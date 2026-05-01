import { useState } from "react";
import { doctors } from "../data";
import DoctorCard from "../components/DoctorCard";
import BookingForm from "../components/BookingForm";

function Home() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleBooking = (booking) => {
    const old = JSON.parse(localStorage.getItem("appointments")) || [];
    localStorage.setItem("appointments", JSON.stringify([...old, booking]));
    alert("✅ Appointment Booked!");
    setSelectedDoctor(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div className="header">
        <h1>🏥 HEALTHCARE_APP</h1>
        <p>Book appointments with trusted doctors</p>
      </div>

      <div className="grid">
        <div className="card"><h2>👨‍⚕️ 3+</h2><p>Doctors</p></div>
        <div className="card"><h2>⏱ 24/7</h2><p>Service</p></div>
        <div className="card"><h2>⭐ 4.8</h2><p>Rating</p></div>
      </div>

      {selectedDoctor ? (
        <BookingForm doctor={selectedDoctor} onBook={handleBooking} />
      ) : (
        <div className="grid">
          {doctors.map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} onSelect={setSelectedDoctor} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;