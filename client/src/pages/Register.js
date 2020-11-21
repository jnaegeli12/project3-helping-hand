import React from 'react';
import Header from '../components/Header';
import API from '../utils/API';

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }
    
    handleChange = event => {
        this.setState({value: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let newUser = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(newUser);
        
        API.createUser(newUser)
        .then((response) => {
            console.log(response);
        }).catch((err) => console.log(err));
    }
    
    render() {
    return (
        <div className='container container-fluid'>
        <Header headerName={ "Create a Profile" }/>
        <div className="container container-fluid col-6 d-flex justify-content-center">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">    
                    <label
                        htmlFor="name">Username</label>
                    <input
                        name="username"
                        value={this.state.username}
                        className="form-control"
                        placeholder='Username'
                        onChange={this.handleChange}/>
                </div>
                <div className="form-group">    
                    <label     
                        htmlFor="name">Password</label>
                    <input
                        name="password"
                        value={this.state.password}
                        type="password"
                        className="form-control"
                        placeholder='Password'
                        onChange={this.handleChange}/>
                </div>
                <div className="form-group d-flex justify-content-around mb-3">    
                    Already have an account?<a href="/profile"> Login here</a>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </div>
            </form>
        </div>
    </div>
    );
}
}