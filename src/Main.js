import React from 'react';
import { Grid } from 'semantic-ui-react';
import './Main.css';
import Sidebar from './Sidebar';
import Tickets from './Tickets';
import Priority from './Priority';
import Tags from './Tags';



const Main = () => (
  <Grid>

    <Grid.Column id ="first">
      <Sidebar/>
      <Tickets/>
      <Priority/>
      <Tags/>


    </Grid.Column>

    <Grid.Column id="second">
      <div>Berk</div>
    </Grid.Column>

    <Grid.Column id ="third">
          
          <div id="shadowEllips">
          <b>It's empty over here</b>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="9" viewBox="0 0 80 9">
             <rect id="Rectangle_1386" data-name="Rectangle 1386" width="80" height="9" rx="4.5" fill="#e1e1e1"/>
           </svg>
           
           </div>
           
          <div style ={{display:"block"}} id="rect">
            <div id="firstEllips"></div>
            <div id="secondEllips"></div>
          </div>
          
        
    </Grid.Column>
    
  </Grid>
)

export default Main;

