import React from 'react';
import { Grid, Responsive } from 'semantic-ui-react';
import './Main.css';
import Side from './Side';
import Tickets from './Tickets';
import Priority from './Priority';
import Tags from './Tags';
import MiddleColumn from './MiddleColumn';
import ThirdColumn from './ThirdColumn';
import {Checkbox} from 'semantic-ui-react';






const Main = () => (
  <Grid>
    <Responsive minWidth={415} style={{paddingRight:"0"}}>
    <Grid.Column id ="first" > {/* Left Side Bar which employs mainly ticket types, priorities and tags */}
      <Side/>
      <Tickets/>
      <Priority/>
      <Tags/>
    </Grid.Column>
    
    </Responsive>

    <Grid.Column id="second"> {/* Middle Column employs the active tickets */}
    <Responsive minWidth={415}>
      <p style={{position:"absolute",left:"14px"}}><Checkbox style={{marginTop:"21.4px"}}></Checkbox>Select All</p>
    </Responsive>
    <Responsive maxWidth={415}>
      <div id="filter" style={{position:"absolute", left:"400px", top:"350px",backgroundColor:"F5F6F6" ,color:"#4E4E4E",transform: "rotate(270deg)",transformOrigin:"left top 0", border:"solid",fontSize:"12px",}}>
          Filter
      </div>
      </Responsive>
    
                  
  
      <div class="ui container">
        <p style = {{marginTop:"28px"}}>11th July 2019</p>
        <MiddleColumn/>
        <p style = {{marginTop:"28px"}}>12th July 2019</p>
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

