
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Ticket Booking App</h1>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      {isLoggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
}

function GuestPage() {
  return <h2>Welcome Guest! Browse flights below.</h2>;
}

function UserPage() {
  return <h2>Welcome User! You can now book tickets.</h2>;
}

export default App;
