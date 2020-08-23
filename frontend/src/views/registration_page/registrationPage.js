import React from 'react';
import {Link} from 'react-router-dom';

class RegistrationPage extends React.Component {
    render(){
        return (
            <div>
                {/* HTML CODE FOR REGISTRATION PAGE */}
                <h1>REGISTRATION PAGE</h1>
                <Link to="/">Go home</Link>
            </div>
        )
    }
}

export default RegistrationPage;