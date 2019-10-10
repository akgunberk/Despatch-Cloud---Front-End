import React from 'react';
import {Icon,Button} from 'semantic-ui-react';
import './sidebar.css';

const Side = () => (
    <React.Fragment>
            <Button id = "CreateTicket" primary>Create Ticket<Icon id = "icon" style = {{color:"white", margin:"12px 30.5px 11.9px 0px"}} name = "paper plane"/></Button>
    </React.Fragment>
  )
  
  export default Side;