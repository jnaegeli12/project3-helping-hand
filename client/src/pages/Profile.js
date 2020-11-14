import React, { useState } from 'react';
import Header from '../components/Header';
import Axios from 'axios';

export default function Profile() {
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    // const [data, setData] = useState(null);
    
    const login = () => {
      Axios({
        method: 'POST',
        data: {
          username: loginUsername,
          password: loginPassword,
        },
        withCredentials: true,
        url: 'http://localhost:3000/login',
      }).then((res) => console.log(res));
    };

    // const getUser = () => {
    //   Axios({
    //     method: 'GET',
    //     withCredentials: true,
    //     url: 'http://localhost:3000/user',
    //   }).then((res) => {
    //     setData(res.data);
    //     console.log(res.data);
    //   });
    // };

    return (
        <div className='container container-fluid'>
            <Header headerName={ "Login" }/>
            <div className="container container-fluid col-6 d-flex justify-content-center">
                <form onSubmit={login}>
                    <div className="form-group d-flex justify-content-around">    
                        <label
                            className="col-3"
                            for="name">Username</label>
                        <input
                            className="col-5"
                            placeholder='Username'
                            onChange={(e) => setLoginUsername(e.target.value)}/>
                    </div>
                    <div className="form-group d-flex justify-content-around">    
                        <label
                            className="col-3"
                            for="name">Password</label>
                        <input
                            className="col-5"
                            placeholder='Password'
                            onChange={(e) => setLoginPassword(e.target.value)}/>
                    </div>
                    <div className="form-group d-flex justify-content-around mb-3">    
                        Don't have an account? <a href="/register">Sign up here</a>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="button" onClick={login} className="btn btn-primary">Login</button>
                    </div>
                </form>
       
            </div>
        </div>

         
        
    );
  };