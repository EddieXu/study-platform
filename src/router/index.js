import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nprogress from "components/global/Nprogress";
import routes from "./routes";

function renderComponent(Component, props, children = null) {
  if (!Component) {
    return children;
  }

  if (Array.isArray(Component)) {
    const reverseComponents = [...Component].reverse();
    return reverseComponents.reduce((pre, cur) => {
      return renderComponent(cur, props, pre);
    }, children);
  }

  return <Component {...props}>{children || null}</Component>;
}

function composeComponent(
  Intercept,
  Layout,
  Component,
  props,
  children = null
) {
  return renderComponent(
    Intercept,
    props,
    renderComponent(Layout, props, renderComponent(Component, props, children))
  );
}

function renderRoutes(routes, parentPath = "") {
  return routes.map(unitRouteConfig => {
    const {
      path,
      intercept,
      layout,
      component,
      children,
      exact,
      props
    } = unitRouteConfig;
    const fullPath = (parentPath + path).replace("//", "/");

    return (
      <Route
        key={fullPath}
        path={fullPath}
        exact={!!exact}
        render={RouteProps => {
          return composeComponent(
            intercept,
            layout,
            component,
            { ...RouteProps, ...props },
            children ? (
              <Switch>{renderRoutes(children, fullPath)}</Switch>
            ) : null
          );
        }}
      />
    );
  });
}

function AppRouter() {
  return (
    <Router>
      <Suspense fallback={<Nprogress />}>
        <Switch>{renderRoutes(routes)}</Switch>
      </Suspense>
    </Router>
  );
}

export default AppRouter;
