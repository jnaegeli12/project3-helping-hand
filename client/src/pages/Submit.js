import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

export default class Submit extends React.Component {
    state = {
        name: "",
        address: "",
        city: "",
        state: "WA",
        zip: null,
        phone_number: null,
        website: "",
        served_meal: false,
        food_bank: false,
        immediate_shelter: false,
        longterm_shelter: false,
        urgent_care: false,
        dental: false,
        mental: false,
        daily: false,
        description: "",
        age_min: null,
        age_max: null,
        male: false,
        female: false,
        family_youth: false
    }
    
    handleChange = event => {
        const isCheckBox = event.target.type === 'checkbox';
        console.log(event.target.value);
        this.setState({ 
            [event.target.name]: isCheckBox 
            ? event.target.checked 
            : event.target.value 
         });
    }

    handleSubmit = (event)  => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return(
            <div className="container container-fluid">
                <Header headerName={"Submit an Organization"} />
                <div className="container container-fluid col-8">
                    <form onSubmit={this.handleSubmit}>
                        {/* <!-- Organization Name --> */}
                        <div className="form-group">
                            <label 
                                for="name">Organization Name</label>
                            <input 
                                name="name"
                                value={this.state.name} 
                                onChange={this.handleChange} 
                                className="form-control" 
                                aria-describedby="org name" 
                                placeholder="Organization's Full Name" />
                        </div>
                        
                        {/* Address Line 1 */}
                        <div className="form-group ">
                            <label 
                                for="address">Address</label>
                            <input 
                                name="address"
                                value={this.state.address} 
                                onChange={this.handleChange} 
                                className="form-control"
                                aria-describedby="org name" 
                                placeholder="1234 Main St" />
                        </div>
                        
                        {/* City, State, Zip */}
                        <div className="form-row">
                            <div className="form-group col-md-7">
                                <label 
                                    for="city">City</label>
                                <input 
                                    name="city"
                                    value={this.state.city} 
                                    onChange={this.handleChange}
                                    className="form-control" />
                            </div>
                            <div className="form-group col-md-2">
                                <label 
                                    for="state">State</label>
                                <select 
                                    name="state"
                                    value={this.state.state} 
                                    onChange={this.handleChange}
                                    id="state" 
                                    className="form-control">
                                    <option selected>WA</option>
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label 
                                    for="zip">Zip</label>
                                <input 
                                    name="zip"
                                    value={this.state.zip} 
                                    onChange={this.handleChange} 
                                    className="form-control" />
                            </div>
                        </div>
                        
                        {/* Phone Number and Website */}
                        <div className="form-row d-flex justify-content-start" >
                            {/* Phone Number */}
                            <div className="form-group col-md-4">
                                <label 
                                    for="phone_number">Phone Number</label>
                                <input
                                    name="phone_number"
                                    value={this.state.phone_number} 
                                    onChange={this.handleChange} 
                                    className="form-control"
                                    aria-describedby="phone number"
                                    placeholder="123.456.7890" />
                            </div>
                            {/* <!-- Website --> */}
                            <div className="form-group col-md-4">
                                <label 
                                    for="website">Website</label>
                                <input 
                                    name="website"
                                    value={this.state.website} 
                                    onChange={this.handleChange} 
                                    className="form-control"
                                    aria-describedby="website"
                                    placeholder="Website.org" />
                            </div>
                        </div>
                    
                        {/* Serving Population Details */}
                        <div className="form-group population mb-4">
                            <label 
                                for="population">Populations Served</label>
                            {/* Gender Group Restrictions */}
                            <div className="d-flex justify-content-start mb-2">
                                    <div className="form-check form-check-inline col-3">
                                        <input 
                                            name="family_youth"
                                            type="checkbox" 
                                            value={this.state.family_youth} 
                                            onChange={this.handleChange} 
                                            className="form-check-input" />
                                            <label 
                                                className="form-check-label" 
                                                for="family_youth">Family/Youth</label>
                                    </div>
                                    <div className="form-check form-check-inline col-3">
                                        <input 
                                            name="male"
                                            type="checkbox" 
                                            value={this.state.male} 
                                            onChange={this.handleChange} 
                                            className="form-check-input" />
                                            <label 
                                                className="form-check-label" 
                                                for="male">Men Only</label>
                                    </div>
                                    <div className="form-check form-check-inline col-3">
                                        <input 
                                            name="female"
                                            type="checkbox" 
                                            value={this.state.female} 
                                            onChange={this.handleChange} 
                                            className="form-check-input" />
                                            <label 
                                                className="form-check-label" 
                                                for="female">Women Only</label>
                                    </div>
                            </div>
                            {/* Age Min/Max */}
                            <div className="d-flex justify-content-start">
                                <div className="form-group col-3">
                                    <label 
                                        for="age_min">Age Min.</label>
                                    <input 
                                        name="age_min"
                                        type="number"
                                        value={this.state.age_min}
                                        className="form-control col-5" 
                                        placeholder="18" />
                                </div>
                                <div className="form-group col-3">
                                    <label 
                                        for="age_min">Age Max.</label>
                                    <input 
                                        name="age_max"
                                        type="number"
                                        value={this.state.age_max}
                                        className="form-control col-5" 
                                        placeholder="18" />
                                </div>
                            </div>
                        </div>
                        
                        {/* Health Services */}
                        <div className="form-group health mb-4">
                            <label 
                                for="health">Health &amp; Personal Care</label>
                            <div className="d-flex justify-content-start">
                                <div className="form-check form-check-inline col-3">
                                    <input 
                                        name="urgent_care"
                                        type="checkbox" 
                                        value={this.state.urgent_care} 
                                        onChange={this.handleChange} 
                                        className="form-check-input" />
                                        <label 
                                            className="form-check-label" 
                                            for="urgent_care">Urgent Care</label>
                                </div>
                                <div className="form-check form-check-inline col-3">
                                    <input 
                                        name="dental"
                                        type="checkbox" 
                                        value={this.state.dental} 
                                        onChange={this.handleChange} 
                                        className="form-check-input" />
                                        <label 
                                            className="form-check-label" 
                                            for="dental">Dental</label>
                                </div>
                                <div className="form-check form-check-inline col-3">
                                    <input 
                                        name="mental"
                                        type="checkbox" 
                                        value={this.state.mental} 
                                        onChange={this.handleChange} 
                                        className="form-check-input" />
                                        <label 
                                            className="form-check-label" 
                                            for="mental">Behavioral</label>
                                </div>
                                <div className="form-check form-check-inline col-3">
                                    <input 
                                        name="dental_care"
                                        type="checkbox" 
                                        value={this.state.dental_care} 
                                        onChange={this.handleChange} 
                                        className="form-check-input" />
                                        <label 
                                            className="form-check-label" 
                                            for="daily">Daily Care</label>
                                </div>
                            </div>
                        </div>
                        
                        {/* Food */}
                        <div className="form-group food mb-4">
                            <label
                                for="food">Food</label>
                            <div className="d-flex justify-content-start">
                                <div className="form-check form-check-inline col-3">
                                    <input 
                                        name="served_meal"
                                        type="checkbox" 
                                        value={this.state.served_meal} 
                                        onChange={this.handleChange} 
                                        className="form-check-input" />
                                        <label 
                                            className="form-check-label" 
                                            for="served_meal">Served Meals</label>
                                </div>
                                <div className="form-check form-check-inline col-3">
                                    <input 
                                        name="food_bank"
                                        type="checkbox" 
                                        value={this.state.food_bank} 
                                        onChange={this.handleChange} 
                                        className="form-check-input" />
                                        <label 
                                            className="form-check-label" 
                                            for="food_bank">Food Bank</label>
                                </div>
                            </div>
                        </div>
                        
                        {/* Shelter */}
                        <div className="form-group shelter mb-4">
                            <label 
                                for="shelter">Shelter</label>
                            <div className="d-flex justify-content-start">
                                <div className="form-check form-check-inline col-3">
                                    <input 
                                        name="immediate_shelter"
                                        type="checkbox" 
                                        value={this.state.immediate_shelter} 
                                        onChange={this.handleChange} 
                                        className="form-check-input" />
                                        <label 
                                            className="form-check-label" 
                                            for="immediate_shelter">Immediate</label>
                                </div>
                                <div className="form-check form-check-inline col-3">
                                    <input 
                                        name="longterm_shelter"
                                        type="checkbox" 
                                        value={this.state.longterm_shelter} 
                                        onChange={this.handleChange} 
                                        className="form-check-input" />
                                        <label 
                                            className="form-check-label" 
                                            for="longterm_shelter">Long-Term</label>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div class="form-group">
                            <label 
                                for="description">Details</label>
                            <textarea 
                                name="description"
                                value={this.state.description} 
                                onChange={this.handleChange} 
                                class="form-control"
                                rows="5"
                                placeholder="Please include days and hours of operation and other important details for those in need of your services."
                                />
                        </div>
                    
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            
                )
            
    }
};