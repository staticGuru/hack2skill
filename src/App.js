import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Create from "./screen/Dash/Create";
import Dashboard from "./screen/Dash/Dashboard";
import Explore from "./screen/Dash/Explore";
import SignUp from "./screen/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <SignUp />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/createbiding">
          <Create />
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
