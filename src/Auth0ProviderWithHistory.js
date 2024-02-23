// Import necessary dependencies from React and Auth0 libraries
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

// Import Auth0 configuration from a JSON file
import authConfig from './auth_config.json';

// Functional component for providing Auth0 authentication with history

const Auth0ProviderWithHistory = ({ children }) => {

  // Access the navigation function from react-router-dom
  const navigate = useNavigate();

  // Callback function to handle redirection after authentication
  const onRedirectCallback = (appState) => {
    
    // Use the navigate function to redirect to the returnTo path or current pathname
    navigate(appState?.returnTo || window.location.pathname);
  };

  // Render the Auth0Provider with the specified configuration and callback
  return (
    <Auth0Provider
      domain={authConfig.domain}
      clientId={authConfig.clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {/* Render the child components wrapped with Auth0Provider */}
      {children}
    </Auth0Provider>
  );
};

// Export the Auth0ProviderWithHistory component as the default export
export default Auth0ProviderWithHistory;
