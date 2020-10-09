import React from "react";
import {Link} from "react-router-dom";
import Logo from "./swiftHealthLogo.png";
//import logo from "../../assest/images/swiftHealthLogo.png";
import "./registrationPage.css";

import Nav from "../../components/nav/nav";

class RegistrationPage extends React.Component {

  constructor() {
      super();
      this.state = {
        /*this state is controlling how the input type of the password field*/
        hidden: true,
        /* this state is keeping the plain password text */
        password: "",
        /* this state toggles the caps Lock if the true but the default value is false for now*/
        toggleCaps: false,
        /* Changes the link to the selected dashbaord */
        link: ""
      };
      this.handleChange = this.handleChange.bind(this);
      this.toggleFunc = this.toggleFunc.bind(this);
      this.toggleCap = this.toggleCap.bind(this);
      this.handleCatSelect = this.handleCatSelect.bind(this);
    }


    /* this function pushes all the user's password into the pass word objects*/
    handleChange(e) {
      this.setState({
        password: e.target.value
      });
    }


    /* this function changes the hidden object to false*/
    toggleFunc() {
      this.setState({
        hidden: !this.state.hidden
      });
    }


    /* this function changes the toggleCaps object to true if the caps lock is on*/
    toggleCap(e) {
      let caps_lock_on = e.getModifierState("CapsLock");
      if (caps_lock_on === true) {
        this.setState({
          toggleCaps: true
        });
      } else {
        this.setState({
          toggleCaps: false
        });
      }
    }

    handleCatSelect(e) {
      this.setState({
        link: `/${e.target.value}`
      })
    }


    render(){
        return (
            <div>
                <Nav />

                <div className="container">
                    <Link to='/'> <img src={Logo} alt="" className = 'logo1' /> </Link>
                    <form action="#" className="sign-up-form">
                                <h2 className="title">Sign up</h2>

                                <div className="social-media">
                                    <button className="social-icon">
                                      <i className="fa fa-facebook-f"></i>
                                    </button>
                                    <button className="social-icon">
                                      <i className="fa fa-twitter"></i>
                                    </button>
                                    <button className="social-icon">
                                      <i className="fa fa-google"></i>
                                    </button>
                                    <button className="social-icon">
                                      <i className="fa fa-linkedin"></i>
                                    </button>
                                </div>
                                
                              <div className="input-field">
                                  <i className="fa fa-user"></i>
                                  <input type="text" placeholder="Name" />
                              </div>
                              <div className="input-field">
                                  <i className="fa fa-phone"></i>
                                  <input type="phone" placeholder="Phone Number..." />
                              </div>
                              <div className="input-field">
                                  <i className="fa fa-envelope"></i>
                                  <input type="email" placeholder="Email" />
                              </div>
                              <div className="input-field container1">
                                  <i className="fa fa-lock"></i>
                                  <input type="password" p
                                  laceholder="Password"
                                  //eslint-disable-next-line react/jsx-no-duplicate-props
                                  type={this.state.hidden ? "password" : "text"}
                                  value={this.state.password}
                                  onKeyUp={this.toggleCap}
                                  onChange={this.handleChange} />
                                  <i className="fa fa-eye" id="togglePassword" onClick={this.toggleFunc}></i>
                                  <p id="text" style={{ display: this.state.toggleCaps ? "" : "none" }}> Caps lock is ON.</p>
                              </div>

                              <div>
                                    <select name="gender" id="gender" className="sel">
                                      <option value="female">Female</option>
                                      <option value="male">Male</option>
                                    </select>
                              </div>


                              <div>
                                  <select name="Registering as" id="Registering" className="sel" onClick={this.handleCatSelect}>
                                    <option value="diagnosis">Diagnosis Centre</option>
                                    <option value="doctor">Doctor</option>
                                    <option value="hospital">Hospital</option>
                                    <option value="patient">Patient</option>
                                    <option value="pharmacy">Pharmaceutical Store</option>
                                 </select>
                             </div>


                                <Link to={this.state.link}><input type="submit" className="btn" value="Sign up" /></Link>
                                <p style={{color: "black"}}>Already a User? <Link to="/login"> Sign in</Link> </p>
                                <p className="social-text">Or Sign up using</p>


                              </form>
                </div>
                <Link to="/">Go home</Link>
            </div>
        );
    };
};

export default RegistrationPage;
