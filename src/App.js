import React from "react";
import { Switch, Route } from "react-router-dom";
import "./styles.css";
import { Home } from "./components/home";

export const App = () => (
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
);
