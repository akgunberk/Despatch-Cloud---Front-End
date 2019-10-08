import React from 'react';
import Logo from './UserLogo.svg';
import {Responsive} from 'semantic-ui-react';
const TicketList = (props) => (
    <ul style = {{outline:"none",fontSize:"14px", fontWeight:"light", textAlign:"left"}}>
      <p style={{ border:"none",background:"#ffffff", borderWidth:"thin" , width:"1004px",height:"73px", borderRadius:"8px", paddingLeft:"20px"}}>
      {props.id} {props.author} {props.summary}
      <Responsive minWidth = {415}> {props.priority}  {props.context} {props.hour} <img src = {Logo} alt = "admin" ></img></Responsive>
      </p>
   </ul>
)

  export default TicketList;