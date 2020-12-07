import axios from 'axios';
import React, { useState } from 'react';
import Header from '../components/Header';
import API from '../utils/API';

function Profile() {
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [data, setData] = useState(null);
    
    const login = (event) => {
        event.preventDefault();
        console.log(loginUsername);
        console.log(loginPassword);
        const userData = {
          username: loginUsername,
          password: loginPassword
        };
    
        if (!userData.username || !userData.password) {
          return;
        };

        loginUser(userData.username, userData.password);

    };

    function loginUser() {
        axios.post("/api/users").then((res) => {
            console.log(res.data);
            setData(res.data);
        }).then(() => {
            window.location.replace('/profile');
        }).catch(err => {
            // If there's an error, log the error
            console.log(err);
          });
      }

    return (
        <div className='container container-fluid'>
            <Header headerName={"Login to Your Profile"}/>
            <div className="container container-fluid col-6 d-flex justify-content-center">
                <form onSubmit={login}>
                    <div className="form-group">    
                        <label  
                            htmlFor="name">Username</label>
                        <input
                            name="username"
                            className="form-control"
                            placeholder='Username'
                            onChange={(e) => setLoginUsername(e.target.value)}/>
                    </div>
                    <div className="form-group">    
                        <label
                            htmlFor="name">Password</label>
                        <input
                            name="newPassword"
                            className="form-control"
                            placeholder='Password'
                            onChange={(e) => setLoginPassword(e.target.value)}/>
                    </div>
                    <div className="form-group d-flex justify-content-around mb-3">    
                        Don't have an account?&nbsp;<a href="/register">Sign up here</a>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
    
export default Profile;