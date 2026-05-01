function DoctorCard({ doctor, onSelect }) {
  return (
    <div className="card">
      <div style={{ fontSize: "50px" }}>🧑‍⚕️</div>

      <h2>{doctor.name}</h2>
      <p>{doctor.specialization}</p>
      <p>{doctor.rating}</p>

      <button onClick={() => onSelect(doctor)}>Book Now</button>
    </div>
  );
}

export default DoctorCard;