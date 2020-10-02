import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//pages
import Dashboard from "./pages/Dashboard";
import Course from "./pages/Course.js";
import NotFound from "./pages/NotFound.js";

function App() {
  return (
    <div class="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/course/:id" component={Course} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
