import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import AuthLayout from "../pages/_layouts/auth";
import DefaultLayout from "../pages/_layouts/default";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const permite = () => {
    return localStorage.getItem("central-erros-auth-token") !== null &&
           localStorage.getItem("central-erros-auth-token") !== "";
  }
  const signed = permite();

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
// Organizando Rotas personalizadas.
RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};
RouteWrapper.defaultProps = {
  isPrivate: false
};
