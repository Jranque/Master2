import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  getAllEmployees() {
    try {
      axios({
        method: "get",
        url: "http://dummy.restapiexample.com/api/v1/employees"
      }).then(response => {
        console.log("All Employee Details");
        console.log(response.data);
      });
    } catch (err) {
      console.log("Error on fetching all employee details");
      console.log(err);
    }
  }
  createEmployees(details) {
    try {
      axios({
        method: "post",
        url: "http://dummy.restapiexample.com/api/v1/create",
        data: details
      }).then(response => {
        console.log("All Employee Details");
        console.log(response.data);
      });
    } catch (err) {
      console.log("Error on fetching all employee details");
      console.log(err);
    }
  }
  updateEmployees(id, details) {
    try {
      axios({
        method: "put",
        url: `http://dummy.restapiexample.com/api/v1/update/${id}`,
        data: details
      }).then(response => {
        console.log("All Employee Details");
        console.log(response.data);
      });
    } catch (err) {
      console.log("Error on fetching all employee details");
      console.log(err);
    }
  }
  deleteEmployees(id) {
    try {
      axios({
        method: "delete",
        url: `http://dummy.restapiexample.com/api/v1/delete/${id}`
      }).then(response => {
        console.log("All Employee Details");
        console.log(response.data);
      });
    } catch (err) {
      console.log("Error on fetching all employee details");
      console.log(err);
    }
  }

  render() {
    var details = {
      name: "boss jen",
      salary: "32000",
      age: "100"
    };

    return (
      <div className="App">
        <header className="App-header">
          <button
            onClick={() => {
              //alert("I am clicked");//
              //this.getAllEmployees();//
              //this.createAllEmployees();
              //this.updateEmployees("435", details);
              //this.deleteEmployees("434", details);
            }}
          >
            click me
          </button>
        </header>
      </div>
    );
  }
}

export default App;
