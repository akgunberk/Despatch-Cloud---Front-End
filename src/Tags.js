import React, {Component} from 'react';
import {Label} from 'semantic-ui-react';


export default class Tags extends Component {

    render() {

        let tags = ['Trash','Jackets','Jackets','Jumpers'];
        
        var UserStyle = {
            position:"relative",
            display:"block",
            textAlign:"left",
            margin:"47px 23px auto 22px"
        
    }
    
    var changeStyle = () => (document.getElementById('searchBorder').style = 'width:212px; height:36px;border:solid;font-weight:light;border-width:thin;border-radius:5px;border-color:black;')
    
        return (
        <React.Fragment>
            <div style = {UserStyle}>
                <p style = {{marginBottom:"11px"}}><b>Tags</b></p>
                <div id="searchBorder" style = {{width:"212px", height:"36px",border:"solid",fontWeight:"light",borderWidth:"thin",borderRadius:"5px",borderColor:"lightgray",marginBottom:"13.3px"}}>
                <input onClick = {changeStyle} style = {{fontSize:"14px",marginLeft:"13px",padding:"8px 8px", border:"none",width:"106px",paddingLeft:"0px",outline:"0"}} placeholder='Search for tag'></input>
                </div>
            </div>
            <div style ={{marginLeft:"23px",display:"block",textAlign:"left"}}>
            {tags.map(c=>( <div style ={{padding:"11.3px 15.3px 11.3px 0px"}} >{c}<Label size='mini' circular style={{width:"13.35px"}}>x</Label></div>))}
            </div>
        </React.Fragment>
        );
        
      }
}

