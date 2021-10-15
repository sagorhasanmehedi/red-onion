import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Home/HomePage/Homepage";
import Mealdetain from "./components/Mealdetail/Mealdetain";
import Pagenotfound from "./components/Pagenotfound/Pagenotfound";
import Signup from "./components/Signup/Signup";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import LogIn from "../src/components/LogIn/LogIn";
import Privateroute from "./PrivateRoute/Privateroute";
import Orderdetail from "./components/Orderdetail/Orderdetail";
import Livelocation from "./components/Livelocation/Livelocation";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Privateroute exact path="/mealdetail/:id">
              <Mealdetain />
            </Privateroute>
            <Route exact path="/login">
              <LogIn />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Privateroute exact path="/orderdetail/:id">
              <Orderdetail />
            </Privateroute>
            <Privateroute exact path="/livelocation">
              <Livelocation />
            </Privateroute>
            <Route exact path="*">
              <Pagenotfound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
