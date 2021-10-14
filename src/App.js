import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import Container from "./Components/Container";
import HomePage from "./Components/HomePage/HomePage";
import MoviesPage from "./Components/MoviesPage/MoviesPage";
import MovieDetailsPage from "./Components/MovieDetailsPage/MovieDetailsPage";
import NotFound from "./notFoud";
import { Route, Switch } from "react-router";

export default function App() {
  return (
    <Container>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies">
          <MoviesPage />
        </Route>
        <Route path="//:movieId">
          <MovieDetailsPage />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Container>
  );
}
