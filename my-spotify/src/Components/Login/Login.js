import React from 'react';
import './../../css/Login.css';
import { apiURL } from '../../util/apiURL';

const Login = (props) => {
    const API = apiURL();

    return (
        <div>
            <a href={`${API}/login`}>
                <button>Login With Spotify</button>
            </a>
        </div>
    )
} // End of Login() Component

export default Login;