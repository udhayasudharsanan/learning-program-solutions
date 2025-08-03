
const officeSpaces = [
  { name: "WeWork", rent: 55000, address: "Mumbai" },
  { name: "SmartDesk", rent: 75000, address: "Delhi" },
];

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Office Space Rental</h1>
      {officeSpaces.map((office, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <h3>{office.name}</h3>
          <img src="https://via.placeholder.com/150" alt="office" />
          <p>Address: {office.address}</p>
          <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
            Rent: ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
