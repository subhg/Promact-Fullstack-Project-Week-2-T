// src/App.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';


function App() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  console.log('User Information:', user);

  return (
    <div className="app-container">
      <header>
        <h1>Auth0 React App</h1>
        <button onClick={isAuthenticated ? logout : loginWithRedirect}>
          {isAuthenticated ? 'Logout' : 'Login'}
        </button>
      </header>
      <main>
        {isAuthenticated ? (
          <>
            <p>Welcome, {user?.name}!</p>
          </>
        ) : (
          <>

          </>
        )}
      </main>
    </div>
  );
}

export default App;
