import React, { useContext } from "react";
import Alert from "./Alert";
import ButtonContext from "../utils/ButtonContext";
import FoodCard from "./FoodCard";
import ShelterCard from "./ShelterCard";
import HealthCard from "./HealthCard";
import DailyCard from "./DailyCard";
import ResultsCard from "./ResultsCard";

function Content() {
    const { onClick, type, display} = useContext(ButtonContext);

    function chooseResults() {
      switch (type) {
        case "food": return (<FoodCard />);
        case "shelter": return (<ShelterCard />);
        case "health": return (<HealthCard />);
        case "daily": return (<DailyCard />);
        default: return (<ResultsCard />)
      }
    }

    return (
        <div className="text-center">
            <div className="row">
                <button onClick={() => onClick("food", true)} className="btn btn-icon" id="food">
                <img className="main-services" src="/assets/food-icon.png" alt="Food Icon" width="300px"></img>
                </button>
                <button onClick={() => onClick("shelter", true)} className="btn btn-icon" id="shelter">
                <img className="main-services" src="/assets/shelter-icon.png" alt="Shelter Logo" width="300px"></img>
                </button>
            </div>
            <div className="row">
                <button onClick={() => onClick("health", true)} className="btn btn-icon" id="health">
                <img className="main-services" src="/assets/health-icon.png" alt="HaelthCare Logo"  width="300px"></img>
                </button>
                <button onClick={() => onClick("daily", true)} className="btn btn-icon" id="daily" type="submit" name="daily_care" value="1">
                <img className="main-services" src="/assets/daily-icon.png" alt="Dailycare Logo" width="300px" />
                </button>
            </div>
            <div className="row">
                <a href="/results"><h3 className="text-center link">Click here to see all the organizations.</h3></a>
            </div>
            <div className="row">
            <Alert style={{ opacity: display ? 1 : 0 }} type={type}>
              {chooseResults({type})}
            </Alert>
            </div>
          </div>
  
    );
  }
  
  export default Content;
  