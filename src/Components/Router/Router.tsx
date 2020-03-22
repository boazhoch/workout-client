import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import NavBarItem from "../NavBarItem/NavBarItem";

type routeObject = {
  name?: string;
  path: string;
  exact?: boolean;
  component?: React.LazyExoticComponent<React.FC<any>>;
};

// const LazyExercisePage = lazy(() => import("../ExercisePage/ExercisePage"));
// const LazyExercise = lazy(() => import("../ExerciseTile/ExerciseTile"));
// const LazyTimer = lazy(() => import("../Timer/Timer"));
// const LazyWorkoutPage = lazy(() => import("../WorkoutPage/WorkoutPage"));

const routes: routeObject[] = [
  {
    name: "Home",
    path: "/",
    exact: true
  },
  {
    name: "Exercises",
    path: "/exercises",
    component: lazy(() => import("../ExercisePage/ExercisePage"))
  },
  {
    name: "Exercise",
    path: "/exercise",
    component: lazy(() => import("../ExercisePage/ExercisePage"))
  },
  {
    name: "Workouts",
    path: "/Workouts",
    component: lazy(() => import("../WorkoutPage/WorkoutPage"))
  },
  {
    name: "Calander",
    path: "/Calander"
  }
];

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
      <NavBar items={createNavBarItemLinks(routes)} />
      <Suspense fallback={<LoadingMessage />}>
        <Switch>
          {routes.map(item => (
            <Route
              key={item.name}
              exact
              path={item.path}
              component={item.component}
            >
              {item.name}
            </Route>
          ))}
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
