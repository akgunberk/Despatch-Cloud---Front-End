import React from 'react';
import { Grid, Responsive, Segment } from 'semantic-ui-react';
import './Main.css';
import Sidebar from './Sidebar';
import Tickets from './Tickets';
import Priority from './Priority';
import Tags from './Tags';
import MiddleColumn from './MiddleColumn';
import ThirdColumn from './ThirdColumn';



const Main = () => (
  <Grid>
    
    <Grid.Column id ="first"> {/* Left Side Bar which employs mainly ticket types, priorities and tags */}
      <Sidebar/>
      <Tickets/>
      <Priority/>
      <Tags/>
    </Grid.Column>

    <Grid.Column id="second"> {/* Middle Column employs the active tickets */}
    
      <div class="ui container">
        <MiddleColumn/>
        <MiddleColumn/>
        <MiddleColumn/>
      </div>
    
      
  
    </Grid.Column>

    <Grid.Column id ="third"> {/* Right Column - It's empty over here*/}
          <ThirdColumn/>
    </Grid.Column>
    
  </Grid>
)

export default Main;

