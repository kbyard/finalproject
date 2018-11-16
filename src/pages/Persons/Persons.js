import React, { Component } from "react";
import API from "../../utils/API";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.firstName || !this.state.lastName) {
      alert("Fill out your first and last name please!");
    } else {
      alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
      API.savePerson({
        firstName: this.state.firstName,
        lastName: this.state.lastName
      })
        // .then(res => this.loadPerson())
        .catch(err => console.log(err));
    }

    this.setState({
      firstName: "",
      lastName: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">
          <label for="firstName">First Name
            <input
              id="firstName" 
              value={this.state.firstName}
              name="firstName"
              onChange={this.handleInputChange}
              type="text"
              placeholder="First Name" 
            />
          </label>
          <label for="lastName">Last Name
            <input
            id="lastName"
              value={this.state.lastName}
              name="lastName"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Last Name"
            />
          </label>
          <button onClick={event => this.handleFormSubmit(event)}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
