import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import NavBarItem from "../NavBarItem/NavBarItem";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { IWorkout } from "../WorkoutPage/WorkoutModule";
import { ITimer } from "../Timer/TimerModule";
import { isTimer } from "../../types/type-guards";
import { IExercise } from "../ExercisePage/ExerciseModule";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

type routeObject = {
  name?: string;
  path: string;
  exact?: boolean;
};

const LazyAppComponent = lazy(() => import("../App/App"));

const LazyExercisePage = lazy(() => import("../ExercisePage/ExercisePage"));
const LazyExercise = lazy(() => import("../ExerciseTile/ExerciseTile"));
const LazyTimer = lazy(() => import("../Timer/Timer"));
const LazyWorkoutPage = lazy(() => import("../WorkoutPage/WorkoutPage"));
const LazyExerciseQuery = lazy(() =>
  import("../../graphql/queries/exercise.query")
);

const LazyWorkoutQuery = lazy(() =>
  import("../../graphql/queries/workout.query")
);

const routes: routeObject[] = [
  {
    name: "Home",
    path: "/",
    exact: true
  },
  {
    name: "Exercise",
    path: "/exercise"
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
      <ApolloProvider client={client}>
        <NavBar items={createNavBarItemLinks(routes)} />
        <Suspense fallback={<LoadingMessage />}>
          <Switch>
            <Route exact path="/">
              <LazyAppComponent />
            </Route>
            <Route
              path="/exercise/:id"
              render={props => {
                return (
                  <LazyExerciseQuery
                    componentToRender={props => {
                      return <LazyExercisePage exercise={props} />;
                    }}
                    id={props.match.params.id}
                  />
                );
              }}
            />
            <Route
              path="/workout/:id"
              render={props => {
                return (
                  <LazyWorkoutQuery
                    componentToRender={(props: IWorkout) => {
                      return (
                        <LazyWorkoutPage
                          workout={props}
                          renderWorkoutFlow={(
                            workoutFlow: (IExercise | ITimer)[]
                          ) => {
                            return workoutFlow.map(e => {
                              if (e) {
                                if (isTimer(e)) {
                                  return <LazyTimer timer={e} />;
                                } else {
                                  return <LazyExercise exercise={e} />;
                                }
                              }
                              return null;
                            });
                          }}
                        />
                      );
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
