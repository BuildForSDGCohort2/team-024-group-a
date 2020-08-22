import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'antd';


const Nav = () =>{

   return(
        <div className="Controls">
            <Link to="/">
                <Button type="primary">Landing Page</Button>
            </Link>
            &nbsp;
            <Link to="/signup">
                <Button type="primary">Registration Page</Button>
            </Link>
            &nbsp;
            <Link to="/login">
                <Button type="primary">Login Page</Button>
            </Link>
        </div>
   )
}

export default Nav;