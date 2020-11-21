import React, { useState } from 'react';
import Header from '../components/Header';
import API from '../utils/API'

export default function Profile() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState(false);

      // Axios.defaults.withCredentials = true;
    // const [data, setData] = useState(null);
    
    const login = () => {
        let newLogin = {
          username: username,
          password: password
        }

        API.getProfile(newLogin)
        .then((response) => {
          if (response.data.message) {
          setLoginStatus();
          } else {
           setLoginStatus(response.data[0].username)
          }
        }); 
      };

    return (
        <div className='container container-fluid'>
            <Header headerName={ "Login" }/>
            <div className="container container-fluid col-6 d-flex justify-content-center">
                <form onSubmit={login}>
                    <div className="form-group">    
                        <label  
                            for="name">Username</label>
                        <input
                            name="username"
                            className="form-control"
                            placeholder='Username'
                            onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="form-group">    
                        <label
                            for="name">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="form-control"
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="form-group d-flex justify-content-around mb-3">    
                        Don't have an account?<a href="/register"> Sign up here</a>
                    </div>
                    <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
                  <h1> Welcome {loginStatus}</h1>
            </div>
        </div>
    );
  };
