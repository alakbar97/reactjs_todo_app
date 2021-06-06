import { Suspense } from "react";
import { Switch, Route, Router, BrowserRouter } from "react-router-dom";

import history from "services/history";
import routes from "./routes";

import Home from "pages/Home";
import Create from "pages/Create";
import Edit from "pages/Edit";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>loading...</p>}>
        <Router history={history}>
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route exact path={routes.create} component={Create} />
            <Route exact path={routes.edit} component={Edit} />
          </Switch>
        </Router>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
