import React from 'react';
import './App.css';

import LandingPage from './views/landing_page/landingPage';
import LoginPage from './views/login_page/loginPage';
import RegistrationPage from './views/registration_page/registrationPage';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      landingPage : false,
      loginPage : false,
      registrationPage: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
   if (e.target.id === "landingPage"){
     this.setState({
       landingPage: true,
       loginPage: false,
       registrationPage: false,
     })
   }else if (e.target.id === "registrationPage"){
    this.setState({
      registrationPage: true,
      landingPage: false,
      loginPage: false
    })
   }else if (e.target.id === "loginPage"){
    this.setState({
      loginPage: true,
      registrationPage: false,
      landingPage: false
    })
  }else{
    this.setState({
      landingPage : false,
      loginPage : false,
      registrationPage: false
    })
  }
      
  }

  render(){
      return (
        <div className="App">
          
          <div className="Controls">
            <button id="landingPage" onClick={this.handleClick}>Landing Page</button>
            <button id="registrationPage" onClick={this.handleClick}>Registration Page</button>
            <button id="loginPage" onClick={this.handleClick}>Login Page</button>
          </div>
          

          <div className="LandingPageContainer">
            {this.state.landingPage ? <LandingPage /> : null}
          </div>
          
          <div className="LoginPageContainer">
            {this.state.loginPage ? <LoginPage /> : null}
          </div>
          
          <div className="RegistrationPageContainer">
            {this.state.registrationPage ? <RegistrationPage /> : null}
          </div>
          

        </div>
      );
  }

}

export default App;
