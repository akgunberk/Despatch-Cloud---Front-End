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
            marginLeft:"1314.3px"
    }
        return (
        <React.Fragment>
          <div style = {UserStyle}>
            <h2 >{this.state.name}</h2>
            <p style = {{float:"right"}}>{this.state.user}</p>
          </div>
          <img style ={{float:"right"}} src = {UserLogo} alt = "RightIcon"></img>
          </React.Fragment>
        );
        
      }
}