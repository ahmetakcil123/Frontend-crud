import React from "react";
import * as apiCalls from "../api/apiCalls";


export class UpdatePage extends React.Component {
  state = {};


// const device = {id=this.props.match.params.id,
//                 name=this.props.match.params.name,
//                 description=this.props.match.params.description,
//                 adress=this.props.match.params.adress,
//                 online=this.props.match.params.online,
//                 type=this.props.match.params.type,
//                 lastMessageTime=this.props.match.params.lastMessageTime,
//                 lastKnowLocation=this.props.match.params.lastKnowLocation
//         } 

componentWillMount(){
  
  if(this.props.match.params){
    console.log(this.props.match.params.id);
    apiCalls.getDeviceId(this.props.match.params.id).then(res => {
      this.setState(res.data);
    });//id yye göre veri getirmek için yapıldı.
  }
}

onChange = e => {
  this.setState({ [e.target.name]: e.target.value });
};




  onClickUpdateSave = () => {
   
//     const device = {id=this.props.match.params.id,
//       name=this.props.match.params.name,
//       description=this.props.match.params.description,
//       adress=this.props.match.params.adress,
//       online=this.props.match.params.online,
//       type=this.props.match.params.type,
//       lastMessageTime=this.props.match.params.lastMessageTime,
//       lastKnowLocation=this.props.match.params.lastKnowLocation
// } 
//     const body = {id:apiCalls.updateDevice,
//       name:apiCalls.updateDevice,
//        description: apiCalls.updateDevice,
//       adress:apiCalls.updateDevice,
//       online:apiCalls.updateDevice,
//       type:apiCalls.updateDevice,
//       lastMessageTime:apiCalls.updateDevice,
//       lastKnowLocation:apiCalls.updateDevice
// } 


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
  .updateDevice(device)
  .then(response => {
    this.props.history.push("/list");
  })

    //id yye göre veri getirmek için yapıldı.

  }

  render() {
    return (
        <div className="container">
        <h1 className="text-center">Update Page</h1>
        
        <div className="col-12 mb-3">
          <label>Name</label>
          <input
            
            className="form-control "
            placeholder="Your name"
            defaultValue = {this.state.name}
            name= "name"
            onChange={this.onChange}
          />
          
        </div>

        <div className="col-12 mb-3">
          <label>Description</label>
          <input
            className="form-control"
            placeholder="Your description"
            defaultValue = {this.state.description}
            name= "description"
            onChange={this.onChange}
          />
        
        </div>

        <div className="col-12 mb-3">
          <label>Adress</label>
          <input
            className="form-control"
            placeholder="Your Adress"
            defaultValue = {this.state.adress}
            name= "adress"
            onChange={this.onChange}
          />
        
        </div>

        <div className="col-12 mb-3">
          <label>Online</label>
          <input
            className="form-control"
            placeholder="Your online"
            defaultValue = {this.state.online}
            name= "online"
            onChange={this.onChange}
          />
        </div>

        <div className="col-12 mb-3">
          <label>Type</label>
          <input
            className="form-control"
            placeholder="Your type"
            defaultValue = {this.state.type}
            name= "type"
            onChange={this.onChange}
          />
        </div>

        <div className="col-12 mb-3">
          <label>Last Message Time</label>
          <input
            className="form-control"
            placeholder="Your last message time"
            defaultValue = {this.state.lastMessageTime}
            name= "lastMessageTime"
            onChange={this.onChange}
          />
          
        </div>

        <div className="col-12 mb-3">
          <label>Last Know Location</label>
          <input
            className="form-control"
            placeholder="Your last know location"
            defaultValue = {this.state.lastKnowLocation}
            name= "lastKnowLocation"
            onChange={this.onChange}
          />
        </div>

        <div className="text-center">
          <button 
          onClick={this.onClickUpdateSave}
          className="btn btn-primary">
            UpdateSave
          </button>
        </div>
      </div>
    );
  }
}

export default UpdatePage;
