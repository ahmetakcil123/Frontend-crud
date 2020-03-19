import React from "react";
import * as apiCalls from "../api/apiCalls";

export class ListDevicePage extends React.Component {
  state = {
   
    deviceList: [],
    device: ""
 

  };



  componentDidMount = () => {
    apiCalls.getDeviceList().then(response => {
      this.setState({ deviceList: response.data });
    });
  };

  onClickDelete = () => {
    apiCalls.deleteDevice().then(response => {
      this.props.history.push("/");
    })
  
  };

  onClickGet = () => {
    apiCalls.getDeviceList().then(response => {
      this.setState({ deviceList: response.data });
    });
  };


  onClickEdit = (id) => {
  
      
   // this.props.history.push(`/update/${id}`);

  }
  
  


  render() {
    return (
      <div className="container">
        <h1 className="text-center">Device List</h1>
        <div className="form-group">
          <label for="exampleFormControlTextarea1 ">Device List</label>
          { this.state.deviceList.map(device => (
            <>
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{device.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {device.description}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {device.adress}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {device.type}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {device.lastMessageTime}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {device.lastKnowLocation}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {device.id}
                  </h6>
                  <p className="card-text"></p>
                </div>
                <button onClick = {this.onClickEdit(device.id)} className="btn btn-outline-success">
                <i   className="fas fa-edit"/> Edit
                </button>
              </div>
            </>
          ))}
        </div>
        {
          <div className="text-center">
            <button onClick={this.onClickDelete} className="btn btn-danger">
              Delete
            </button>
            <button device= {this.state.deviceList} onClick={this.onClickGet}  className="btn btn-secondary">
              Get Add
            </button>
          
          </div>
        }
      </div>
    );
  }
}

export default ListDevicePage;
