import React from 'react';
import {Icon} from 'semantic-ui-react';
import './sidebar.css';

const Sidebar = () => (
    <React.Fragment>
        <div className = "side">
            <p style ={{display:"inline",fontSize:"14px",fontWeight:"light", border:"none",margin:"11px 26.4px 10px 18px",color:"white"}}>Create Ticket</p>
            <Icon style = {{color:"white", margin:"12px 30.5px 11.9px 0px"}} name = "paper plane"/>
        </div>
    </React.Fragment>
  )
  
  export default Sidebar;