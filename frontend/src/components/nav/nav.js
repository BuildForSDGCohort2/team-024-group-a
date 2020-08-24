import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

const Nav = () =>{

   return(
        <div className="nav">
            <div className="nav-logo">
                <span>Swift Health</span>
            </div>

            <div className="nav-btn">
                <Link to="/login">
                    Login
                </Link>
                <Link to="/signup">
                    Sign up
                </Link>
            </div>
        </div>
   )
}

export default Nav;