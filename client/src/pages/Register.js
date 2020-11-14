import React, { useState } from 'react';
import Header from '../components/Header';
import Axios from 'axios';

function Profile() {
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [data, setData] = useState(null);
    
    const register = () => {
      Axios({
        method: 'POST',
        data: {
          username: registerUsername,
          password: registerPassword,
        },
        withCredentials: true,
        url: 'http://localhost:3000/register',
      }).then((res) => console.log(res));
    };
    
    
    const getUser = () => {
      Axios({
        method: 'GET',
        withCredentials: true,
        url: 'http://localhost:3000/user',
      }).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    };
    return (
      <div className='container container-fluid'>
        <div>
        <Header headerName={ "Create a Profile" }/>
        <form onSubmit={register}>
          <input
            placeholder='username'
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
          <input
            placeholder='password'
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <button type="submit className="btn btn-primary>Submit</button>
          </form>
        </div>
  

        <div>
        <Header headerName={ "Welcome Back!" }/>
          <button onClick={getUser}>Submit</button>
          {data ? <h1>Welcome Back {data.username}</h1> : null}
        </div>
      </div>
    );
  }
export default Profile;