import React from 'react';
import {Link} from 'react-router-dom';

class LoginPage extends React.Component {
    render(){
        return (
            <div>
                {/* HTML CODE FOR LOGIN PAGE */}
                <h1>LOGIN PAGE</h1>
                <Link to="/">Go home</Link>
            </div>
        )
    }
}

export default LoginPage;