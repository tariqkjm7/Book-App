import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";


// TODO: wrap everything in Auth0 {done}
ReactDOM.render(
  <Auth0Provider
    domain="tariqkjm7.us.auth0.com"
    clientId="uGy2A7qQ3sKeOJ4kOmFGVywhEoDtZjN6"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);




