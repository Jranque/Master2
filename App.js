import React, { Component } from "react";
import "./style/App.css";
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
  createAllEmployees = e => {
    e.preventDefault();

    const employees = this.state.Employees;
    const newId = employees[employees.length - 1].id + 1;

    this.setState({
      employees: employees.concat({
        id: newId,
        name: this.refs.name.value,
        salary: this.refs.salary.value,
        age: this.refs.age.value
      })
    });
  };

  render() {
    return (
      <div className="App">
        <h2 className="h2">ADD EMPLOYEES</h2>
        <form ref="myForm" className="myForm">
          <input
            type="text"
            ref="name"
            placeholder="Employee Name"
            className="formField"
          />
          <input
            type="text"
            ref="salary"
            placeholder="Salary"
            className="formField"
          />
          <input
            type="text"
            ref="age"
            placeholder="Age"
            className="formField"
          />
          <button
            onSubmit={() => {
              this.createAllEmployees();
            }}
            className="Mybutton"
          >
            Submit
          </button>
        </form>
        <table>
          <tr>
            <th>Employee Name</th>
            <th>Salary</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>boss jen</td>
            <td>32000</td>
            <td>23</td>
            <td>
              <button onClick={() => this.fRemove} className="ListButton">
                REMOVE{" "}
              </button>
              <button onClick={() => this.fEdit} className="myListButton">
                EDIT{" "}
              </button>
            </td>
          </tr>
          <tr>
            <td>Cuyatots</td>
            <td>300000</td>
            <td>19</td>
            <td>
              <button onClick={() => this.fRemove} className="ListButton">
                REMOVE{" "}
              </button>
              <button onClick={() => this.fEdit} className="myListButton">
                EDIT{" "}
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
export default App;
