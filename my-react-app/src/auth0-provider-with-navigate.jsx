import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export const Auth0ProviderWithNavigate = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Auth0Provider
      domain="dev-d1kk5i7ntw3cgcyx.us.auth0.com"
      clientId="yaOp7yaqdHm3xbhjtc0Y7GsXPSxKaMSS"
      authorizationParams={{ redirect_uri: window.location.origin }}
      onRedirectCallback={(appState) => {
        navigate(appState?.returnTo || "/dashboard"); // 🚀 redirects after login
      }}
    >
      {children}
    </Auth0Provider>
  );
};
