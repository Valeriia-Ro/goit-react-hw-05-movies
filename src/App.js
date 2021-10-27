import React from "react";
import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import Navigation from "./Components/Navigation/Navigation";
import Container from "./Components/Container";
// import HomePage from "./Components/HomePage/HomePage";
// import MoviesPage from "./Components/MoviesPage/MoviesPage";
// import MovieDetailsPage from "./Components/MovieDetailsPage/MovieDetailsPage";
// import NotFound from "./notFoud";
// import Title from "./title";

const HomePage = lazy(() =>
  import("./Components/HomePage/HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import(
    "./Components/MoviesPage/MoviesPage" /* webpackChunkName: "movie-page" */
  )
);
const MovieDetailsPage = lazy(() =>
  import(
    "./Components/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "details-page" */
  )
);
const NotFound = lazy(() => import("./notFoud"));
const Title = lazy(() => import("./title"));

export default function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact>
            <Title />
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
