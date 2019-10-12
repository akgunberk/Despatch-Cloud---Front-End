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







function Main() {

  function showHide() {
    var x = document.getElementById("berk");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  return (
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
      <div id="filter" style={{position:"absolute", left:"410px",borderTopLeftRadius:"5px",borderTopRightRadius:"5px",width:"212px", justifyContent:"center",backgroundColor:"rgba(78,78,78,0.11)", top:"321px",/*look for background color of filter*/color:"#4E4E4E",transform: "rotate(270deg)",transformOrigin:"left top 0", border:"none",fontSize:"12px",}}>
      <button onClick={showHide} style ={{border:"none",background:"transparent",cursor:"pointer"}}>Filter
      </button>
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
      }

export default Main;

