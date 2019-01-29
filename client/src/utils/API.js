import axios from "axios";

export default {
  getUser: function(userName) {
    console.log("userName: ", userName);
    return axios.get("/api/users/" + userName);
  },
  saveProject: function(projectData) {
    console.log("ProjectData: ", projectData.obj.projectName);
    return axios.put("/api/projects/"+ projectData.obj.projectName, projectData);
  },

  //
  getProjects: function() {
    return axios.get("/api/projects");
  },

  //
  //
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Deletes the saved book with the given id
  deleteBook: function(projectName) {
    return axios.delete("/api/projects/" + projectName);
  },
  // Saves an book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
