import { Router, Route, Switch, useLocation } from "wouter";

import Form from "./pages/Form/index.jsx";
import List from "./pages/List/index.jsx";

import './App.css'

function App() {
  const [location] = useLocation();

  console.log(location);

  return (
    <main>
            <Router base="/app/excursions">
              <Switch>
                <Route path="/">
                  <List />
                </Route>
                <Route path="/form">
                  <Form />
                </Route>
                <Route>
                  404, Not Found!
                </Route>
              </Switch>
            </Router>
    </main>
  );
}

export default App
