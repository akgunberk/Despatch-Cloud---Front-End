import React, {Component} from 'react';

import {Responsive} from 'semantic-ui-react'

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
            marginLeft:"1314.3px"
    }
        return (
        <React.Fragment style= {{width:"1314.3px"}} >
            
            <Responsive minWidth={415}>
              <div style = {UserStyle}>
                <p style = {{width:"74px",fontSize:"12px",fontWeight:"bold",marginTop:"15px",marginRight:"70.8px",marginBottom:"2px"}} >{this.state.name}</p>
                <p style = {{fontSize:"9px" ,fontWeight:"light"}}>{this.state.user}</p>
              </div>
              
            </Responsive>

           

           
              
            
         
          </React.Fragment>
        );
        
      }
}