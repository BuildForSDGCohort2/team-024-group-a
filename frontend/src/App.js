import React from "react";
import "./App.css";
import "./App.less";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";

//import LandingPage from "./views/landing_page/landingPage";
import LoginPage from "./views/login_page/loginPage";
import RegistrationPage from "./views/registration_page/registrationPage";
import NotFound from "./views/notfound_page/notfound";
import Footer from "./components/footer/footer";

import DoctorDashboard from "./dashboards/doctor_dashboard/doctorDashboard";

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route  exact={true} path="/" component={DoctorDashboard}/>
            <Route  path="/signup" component={RegistrationPage}/>
            <Route  path="/login" component={LoginPage}/>
            <Route component={NotFound} />
          </Switch>
        </Router>

        <Footer />
      </div>
   );
  };

};

export default App;
