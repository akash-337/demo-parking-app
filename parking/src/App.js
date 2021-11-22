import "./App.css";
import { Switch, Route } from "react-router-dom";
import Getstart from "./Getstart";
import Register from "./Register";
import Search from "./Search";
import Map from "./Map";
import ConfirmBooking from "./ConfirmBooking";
import Confirm from "./Confirm";
import Findyourslot from './Findyourslot'
import Signin from "./Signin";
import Signup from "./Signup";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Getstart} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/confirmbooking" component={ConfirmBooking} />
        <Route exact path="/confirm" component={Confirm} />
        <Route exact path="/findyourslot" component={Findyourslot} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
