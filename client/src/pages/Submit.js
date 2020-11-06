import React, { useState, useEffect } from 'react'
import Container from '../components/Container';
import '../components/css/style.css'



const Submit = () => {
    return(
        

<div>
<section>
    <div className="container-fluid">
        <h1>Add an Organization</h1>
    </div>
</section>
<form>
    <div className="container">
        {/* <!-- Organization Name --> */}
        <div className="form-group">
            <label for="org_name">Organization Name</label>
            <input type="name" className="form-control" id="org_name" aria-describedby="org name"
                placeholder="Organization's Full Name"></input>
        </div>
        <div className="row">
            {/* <!-- Phone Number --> */}
            <div className="form-group col-md-6">
                <label for="phone">Phone Number</label>
                <input type="phone" className="form-control" id="phone" aria-describedby="phone number"
                    placeholder="123.456.7890"></input>
            </div>
            {/* <!-- Website --> */}
            <div className="form-group col-md-6">
                <label for="website">Website</label>
                <input type="website" className="form-control" id="website" aria-describedby="website"
                    placeholder="Website.org"></input>
            </div>
        </div>
        {/* <!-- Address --> */}
        <div className="form-group ">
            <label for="inputAddress">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"></input>
        </div>
        <div className="form-group">
            <label for="inputAddress2">Address 2</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Building, suite, or floor"></input>
        </div>
        <div className="form-row">
            <div className="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity"></input>
            </div>
            <div className="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" className="form-control">
                    <option selected>WA</option>
                </select>
            </div>
            <div className="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip"></input>
            </div>
        </div>
        <br></br>
        {/* <!-- Hours and days of operation --> */}
        <div className="form-group col-md-12" id="operationInfo">
            <label for="operatingInfo">Please enter the organization's days and hours of operation</label>
            {/* <!-- Row of dropdowns for choosing open and closing hours --> */}
            <div className="row">
                <div className="form-group col-md-3">
                    <label for="openingTime">Opening Hours</label>
                    <select id="openingHour" className="form-control">
                        <option selected>Choose...</option>
                        <option>12:00 AM</option>
                        <option>1:00 AM</option>
                        <option>2:00 AM</option>
                        <option>3:00 AM</option>
                        <option>4:00 AM</option>
                        <option>5:00 AM</option>
                        <option>6:00 AM</option>
                        <option>7:00 AM</option>
                        <option>8:00 AM</option>
                        <option>9:00 AM</option>
                        <option>10:00 AM</option>
                        <option>11:00 AM</option>
                        <option>12:00 PM</option>
                        <option>1:00 PM</option>
                        <option>2:00 PM</option>
                        <option>3:00 PM</option>
                        <option>4:00 PM</option>
                        <option>5:00 PM</option>
                        <option>6:00 PM</option>
                        <option>7:00 PM</option>
                        <option>8:00 PM</option>
                        <option>9:00 PM</option>
                        <option>10:00 PM</option>
                        <option>11:00 PM</option>
                    </select>
                </div>
                <div className="form-group col-md-3">
                    <label for="closingTime">Closing Hours</label>
                    <select id="closingHour" className="form-control">
                        <option selected>Choose...</option>
                        <option>12:00 AM</option>
                        <option>1:00 AM</option>
                        <option>2:00 AM</option>
                        <option>3:00 AM</option>
                        <option>4:00 AM</option>
                        <option>5:00 AM</option>
                        <option>6:00 AM</option>
                        <option>7:00 AM</option>
                        <option>8:00 AM</option>
                        <option>9:00 AM</option>
                        <option>10:00 AM</option>
                        <option>11:00 AM</option>
                        <option>12:00 PM</option>
                        <option>1:00 PM</option>
                        <option>2:00 PM</option>
                        <option>3:00 PM</option>
                        <option>4:00 PM</option>
                        <option>5:00 PM</option>
                        <option>6:00 PM</option>
                        <option>7:00 PM</option>
                        <option>8:00 PM</option>
                        <option>9:00 PM</option>
                        <option>10:00 PM</option>
                        <option>11:00 PM</option>
                    </select>
                </div>
            </div>
            {/* <!-- Inline checkboxes for choosing days open --> */}
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="sunday" value="true"></input>
                <label className="form-check-label" for="sundayCheck">Sunday</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="monday" value="true"></input>
                <label className="form-check-label" for="mondayCheck">Monday</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="tuesday" value="true"></input>
                <label className="form-check-label" for="tuesdayCheck">Tuesday</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="wednesday" value="true"></input>
                <label className="form-check-label" for="wednesdayCheck">Wednesday</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="thursday" value="true"></input>
                <label className="form-check-label" for="thursdayCheck">Thursday</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="friday" value="true"></input>
                <label className="form-check-label" for="fridayCheck">Friday</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="saturday" value="true"></input>
                <label className="form-check-label" for="saturdayCheck">Saturday</label>
            </div>
        </div>
        <br></br>
        {/* <!-- Serving Population Details --> */}
        <label for="inlineFormInput">Min/Max Age Served</label>
        <div className="row">
            <div className="col-auto">
                <input type="number" className="form-control form-control-lg mb-2" id="age_min" placeholder="18"></input>
            </div>
            <div className="col-auto">
                <input type="number" className="form-control form-control-lg mb-2" id="age_max" placeholder="55"></input>
            </div>
        </div>

        {/* <!-- Dropdown for choosing service --> */}
        <div className="form-group col-md-6">
            <label for="org_type">Please select the organization's primary service</label>
            <select className="form-control" id="org_type">
                <option selected>Choose...</option>
                <option value="health">Health</option>
                <option value="dailyCare">Daily Care</option>
                <option value="food">Food</option>
                <option value="shelter">Shelter</option>
            </select>
            <div className="form-group service" id="health">
                <p>health</p>
            </div>
            <div className="form-group service" id="dailyCare">
                <p>daily care</p>
            </div>
            <br></br>
            {/* <!-- Questions for Food --> */}
            <div className="form-group service" id="food">
                <label for="foodServiceType">Please specify how you provide food.</label>
                <select className="form-control col-md-6" id="foodServiceType">
                    <option value="default">Choose...</option>
                    <option value="foodBank">Food Bank</option>
                    <option value="servedMeals">Served Meals</option>
                </select>
                <br></br>
                <label className="mealCheck" for="mealCheck">Please specify the kinds of meals served.</label>
                <br></br>
                <div className="mealCheck">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="breakfast" value="true"></input>
                        <label className="form-check-label" for="breakfastCheck">Breakfast</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="lunch" value="true"></input>
                        <label className="form-check-label" for="lunchCheck">Lunch</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="dinner" value="true"></input>
                        <label className="form-check-label" for="dinnerCheck">Dinner</label>
                    </div>
                </div>

            </div>
            {/* <!-- Questions for Shelter --> */}
            <div className="form-group service" id="shelter">
                <select className="form-control col-md-6" id="shelterServiceType">
                    <option value="default">Choose...</option>
                    <option value="immediateShelter">Immediate Shelter</option>
                    <option value="longerTermShelter">Longer-term Housing</option>
                </select>
                <label className="shelterType" for="shelterType">Please specify any restrictions, if any.</label>
                <select className="form-control" id="shelterType">
                    <option selected>Choose...</option>
                    <option value="menShelter">Men only</option>
                    <option value="womenShelter">Women only</option>
                    <option value="familyShelter">Family</option>
                </select>
            </div>

            <div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </div>
    </div>
    </form>
 
</div>

    )
};


export default Submit;