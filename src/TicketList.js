import React from 'react';
import Logo from './UserLogo.svg';
import {Responsive, Icon} from 'semantic-ui-react';
const TicketList = (props) => (
    <ul style = {{outline:"none",fontSize:"14px", fontWeight:"light", textAlign:"left"}}>
      <p style={{ border:"none",background:"#ffffff", borderWidth:"thin" ,height:"73px", borderRadius:"8px", paddingLeft:"20px"}}>
      
      <div id = "TicketSummary" style = {{display:"block", marginTop:"15px",alignContent:"center"}} >
        <Icon style={{color:"white"}} name="envelope"/>
        <p style = {{height:"14px",fontWeight:"bold"}}> {props.author}</p> 
        <div>{props.summary}<p style={{color:"#25BBF3"}} >&nbsp; ({props.id})</p></div>
      </div>
      
      
      <Responsive style= {{float:"right"}} minWidth = {415}> {props.context} {props.priority} {props.hour} <img src = {Logo} alt = "admin" ></img></Responsive>
      </p>

   </ul>
   
)

  export default TicketList;