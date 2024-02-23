// Import necessary dependencies from React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './Auth0ProviderWithHistory';
import App from './App';

// Create a React root and render the application inside it
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application wrapped with Router and Auth0ProviderWithHistory
root.render(
  <Router>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </Router>,
);
