// Import necessary dependencies from React and Auth0
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// Import the CSS file for styling
import './App.css';

// Main functional component for the App
function App() {
  // Destructure values from the useAuth0 hook
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  // Log user information to the console
  console.log('User Information:', user);

  return (
    // Main container for the app

    <div className="app-container">
      {/* Header section */}
      <header>
        <h1>Auth0 React App</h1>

        {/* Button for login or logout based on authentication status */}
        
        <button onClick={isAuthenticated ? logout : loginWithRedirect}>
          {isAuthenticated ? 'Logout' : 'Login'}
        </button>
      </header>

      {/* Main content section */}
      <main>
        {isAuthenticated ? (
          // Display user information if authenticated
          <>
            <p>Welcome, {user?.name}!</p>
            <p>Email: {user.email}!</p>
          </>
        ) : (
          // Display nothing if not authenticated
          <>
          </>
        )}
      </main>
    </div>
  );
}

// Export the App component as the default export
export default App;
