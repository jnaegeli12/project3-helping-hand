import axios from "axios";

const API =  {
  // Gets all organizations
  getAll: function() {
    return axios.get("/api/all");
  },
  // Gets all food organizations
  getFood: function() {
    return axios.get("/api/food");
  },
  // Gets all shelter organizations
  getShelter: function() {
    return axios.get("/api/shelter");
  },
  // Gets all healthcare organizations
  getHealth: function() {
    return axios.get("/api/health_care");
  },
  // Gets all daily care organizations
  getDaily: function() {
    return axios.get("/api/daily_care");
  },
  // Posts a new org
  addOrg: function() {
      return axios.post("api/all");
  }
};

export default API;