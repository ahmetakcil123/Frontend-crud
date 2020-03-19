import React from "react";
import * as apiCalls from "../api/apiCalls";

export class DevicePage extends React.Component {
  state = {
    id:"",
    name: "",
    description: "",
    adress: "",
    online: "",
    type: "",
    lastMessageTime: "",
    lastKnowLocation: "",
    errors: {},
    list: {}
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  oncClickDevice = () => {
    const device = {
      id:this.state.id,
      name: this.state.name,
      description: this.state.description,
      adress: this.state.adress,
      online: this.state.online,
      type: this.state.type,
      lastMessageTime: this.state.lastMessageTime,
      lastKnowLocation: this.state.lastKnowLocation
    };

    apiCalls
      .createNewDevice(device)
      .then(response => {
        this.props.history.push("/list");
      })
      .catch(error => {
        console.log(error.response.data)
        this.setState({
          errors: error.response.data.validationErrors
        })//sadas not d];
      });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Device Add</h1>
        <div className="col-12 mb-3">
          <label>Name</label>
          <input
            className="form-control "
            placeholder="Your name"
            name="name"
            onChange={this.onChange}
          />
          <div className="is-invalid text-danger">
            {this.state.errors.name}
          </div>
        </div>

        <div className="col-12 mb-3">
          <label>Description</label>
          <input
            className="form-control"
            placeholder="Your description"
            name="description"
            onChange={this.onChange}
          />
          <div className="is-invalid text-danger">
            {this.state.errors.description}
          </div>
        </div>

        <div className="col-12 mb-3">
          <label>Adress</label>
          <input
            className="form-control"
            placeholder="Your Adress"
            name="adress"
            onChange={this.onChange}
          />
          <div className="is-invalid text-danger ">
            {this.state.errors.adress}
          </div>
        </div>

        <div className="col-12 mb-3">
          <label>Online</label>
          <input
            className="form-control"
            placeholder="Your online"
            name="online"
            onChange={this.onChange}
          />
        </div>

        <div className="col-12 mb-3">
          <label>Type</label>
          <input
            className="form-control"
            placeholder="Your type"
            name="type"
            onChange={this.onChange}
          />
        </div>

        <div className="col-12 mb-3">
          <label>Last Message Time</label>
          <input
            className="form-control"
            placeholder="Your last message time"
            name="lastMessageTime"
            onChange={this.onChange}
          />
          <div className="is-invalid text-danger">
            {this.state.errors.lastMessageTime}
          </div>
        </div>

        <div className="col-12 mb-3">
          <label>Last Know Location</label>
          <input
            className="form-control"
            placeholder="Your last know location"
            name="lastKnowLocation"
            onChange={this.onChange}
          />
          <div className="is-invalid text-danger">
            {this.state.errors.lastKnowLocation}
          </div>
        </div>

        <div className="text-center">
          <button className="btn btn-primary" onClick={this.oncClickDevice}>
            deviceAdd
          </button>
        </div>
      </div>
    );
  }
}

export default DevicePage;
