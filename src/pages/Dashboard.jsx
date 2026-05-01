import { useEffect, useState } from "react";

function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(data);
  }, []);

  const handleDelete = (index) => {
    const updated = appointments.filter((_, i) => i !== index);
    localStorage.setItem("appointments", JSON.stringify(updated));
    setAppointments(updated);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1> Your Appointments</h1>

      {appointments.length === 0 && <p>No bookings yet</p>}

      <div className="grid">
        {appointments.map((a, i) => (
          <div key={i} className="card">
            <h3>{a.doctor}</h3>
            <p>{a.patient}</p>
            <p>{a.time}</p>
            <button onClick={() => handleDelete(i)}>❌ Cancel</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;