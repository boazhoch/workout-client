import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import App from "../App/App";
import ExercisePage from "../Exercise/Exercise";
import NavBar from "../NavBar/NavBar";
import NavBarItem from "../NavBarItem/NavBarItem";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider } from "react-apollo";
import { Exercise } from "../../graphql/queries/exercise.query";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

type routeObject = {
  name?: string;
  path: string;
  component: any;
  exact?: boolean;
};

const LazyAppComponent = lazy(() => import("../App/App"));

const LazyExercisePage = lazy(() => import("../Exercise/Exercise"));

const lazyLoadedComponents: Map<string, any> = new Map<string, any>([
  ["App", LazyAppComponent],
  ["Exercise", LazyExercisePage]
]);

const routes: routeObject[] = [
  {
    name: "Home",
    path: "/",
    component: lazyLoadedComponents.get("App"),
    exact: true
  },
  {
    name: "Exercise",
    path: "/ex",
    component: lazyLoadedComponents.get("Exercise")
  }
];

function renderRoutes(routeList: routeObject[]) {
  return routeList.map(({ component, ...other }, i) => {
    console.log(component, other);
    return (
      <Route key={i} {...other}>
        {component}
      </Route>
    );
  });
}

function createNavBarItemLinks(routeList: routeObject[]) {
  return routeList.map((route, i) => (
    <NavBarItem
      key={i}
      to={route.path}
      name={route.name}
      className="navbar-item"
    />
  ));
}

function LoadingMessage() {
  return <div>"I'm loading..."</div>;
}

const AppRouter = () => {
  return (
    <Router>
      <ApolloProvider client={client}>
        <NavBar items={createNavBarItemLinks(routes)} />
        <Suspense fallback={<LoadingMessage />}>
          <Switch>
            [
            <Route exact path="/">
              <LazyAppComponent />
            </Route>
            <Route
              path="/exercise/:id"
              render={props => {
                return (
                  <Exercise
                    componentToRender={props => {
                      return <LazyExercisePage exercise={props} />;
                    }}
                    id={props.match.params.id}
                  />
                );
              }}
            />
          </Switch>
        </Suspense>
      </ApolloProvider>
    </Router>
  );
};

export default AppRouter;
