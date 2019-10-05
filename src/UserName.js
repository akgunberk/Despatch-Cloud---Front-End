import React, {Component} from 'react';
import UserLogo from './UserLogo.svg';

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Corey Cross",
            user: "Administrator"}
    }
    render() {
        var UserStyle = {
            display:"inline",
            height:"62px",
            width: "74px",
            marginLeft:"1314.3px",
            textAlign:"right"
    }
        return (
        <React.Fragment>
          <div style = {UserStyle}>
            <p style = {{width:"74px",fontSize:"12px",fontWeight:"bold",marginTop:"15px",marginBottom:"2px"}} >{this.state.name}</p>
            <p style = {{fontSize:"9px" ,fontWeight:"light"}}>{this.state.user}</p>
          </div>
          <img src={UserLogo} alt="Admin Logo" style={{marginRight:"10.5px"}}></img>
          
          </React.Fragment>
        );
        
      }
}