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
  // Gets food orgs with user specs
  getFoodRange: function() {
    return axios.get("/api/food/range");
  },
  // Gets all shelter organizations
  getShelter: function() {
    return axios.get("/api/shelter");
  },
  // Gets all healthcare organizations
  getHealth: function() {
    return axios.get("/api/health");
  },
  // Gets all daily care organizations
  getDaily: function() {
    return axios.get("/api/daily");
  },
  // Posts a new org
  createOrg: function(postData) {
    return axios.post("api/organizations", postData);
  },
  // Posts a new user
  createUser: function(postData) {
    return axios.post('api/users', postData);
  },
  // get user profile at login
  getProfile: function() {
    return axios.get('api/users');
  }
};

export default API;