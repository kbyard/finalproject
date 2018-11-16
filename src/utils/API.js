import axios from "axios";


export default {
  // Gets all Persons
  getPersons: function() {
    return axios.get("/api/persons");
  },
  // Gets the person with the given id
  getPerson: function(id) {
    return axios.get("/api/persons/" + id);
  },
  // Deletes the person with the given id
  deletePerson: function(id) {
    return axios.delete("/api/persons/" + id);
  },
  // Saves a person to the database
  savePerson: function(personData) {
    return axios.post("/api/persons", personData);
  }
};


// export default {
//   // Gets all Colors
//   getColor: function() {
//     return axios.get("/api/colors");
//   },
//   // Gets the color with the given id
//   getColor: function(id) {
//     return axios.get("/api/colors/" + id);
//   },
//   // Deletes the color with the given id
//   deleteColor: function(id) {
//     return axios.delete("/api/colors/" + id);
//   },
//   // Saves a color to the database
//   saveColor: function(colorData) {
//     return axios.post("/api/colors", colorData);
//   }
// };
