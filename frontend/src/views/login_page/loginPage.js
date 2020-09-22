import React from "react";
import "./loginPage.css"
import {Link} from "react-router-dom";
import Logo from "./swiftHealthLogo.png";

class LoginPage extends React.Component {
    render(){
        return (
            <div id = "body">
                <div className = "container">
                		<Link to='/'> <img src={Logo} alt="" className = "logo" /> </Link>
                	<form action="#" className="login-form">
                		<h1>LOGIN</h1>
                		<div className="input-area">
                			<h3>Username</h3>
                			<div className="input-space">
                				<i className="fa fa-user"></i>
                				<input type="text" name="" placeholder="Type your username" required />
                			</div>
                		</div>

                		<div className="input-area">
                			<h3>Password</h3>
                			<div className="input-space">
                				<i className="fa fa-lock"></i>
                				<input type="password" placeholder="Type your password" required />
                                <i className="fa fa-eye" id="togglePassword"></i>
                			</div>
                		</div>
                		<h4><button href="#">Forgot password?</button></h4>
                	</form>
                	<input type='submit' className = 'login-button' value='LOGIN' />

                	<div>
                		<p className='alt-signUp'>or <Link to='/signup'> Sign Up </Link> using</p>
                		<div className="social-media">
                            <button href="#" className="social-icon">
                                <i className="fa fa-facebook-f"></i>
                            </button>
                            <button href="#" className="social-icon">
                                <i className="fa fa-twitter"></i>
                            </button>
                            <button href="#" className="social-icon">
                            	<i className="fa fa-google"></i>
                            </button>
                        </div>
                	</div>
                </div>
            </div>
        )
    }
}

export default LoginPage;