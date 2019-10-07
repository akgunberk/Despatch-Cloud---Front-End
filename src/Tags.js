import React, {Component} from 'react';


export default class Tags extends Component {
 /*    constructor(props) {
        super(props);
        this.state = {
            types: {"Open","Awaiting Reply","Resolved","Archived"},
            active: false}
    } */
    render() {
        var UserStyle = {
            position:"absolute",
            display:"block",
            textAlign:"left",
            margin:"462px 23px 428px 22px"
        
    }
    
    var changeStyle = () => (document.getElementById('searchBorder').style = 'width:212px; height:36px;border:solid;font-weight:light;border-width:thin;border-radius:5px;border-color:black;')
    
        return (
        <React.Fragment>
            <div style = {UserStyle}>
                <p style = {{marginBottom:"11px"}}><b>Tags</b></p>
                <div id="searchBorder" style = {{width:"212px", height:"36px",border:"solid",fontWeight:"light",borderWidth:"thin",borderRadius:"5px",borderColor:"lightgray"}}>
                <input onClick = {changeStyle} style = {{fontSize:"14px",marginLeft:"13px",padding:"8px 8px", border:"none",width:"106px",paddingLeft:"0px",outline:"0"}} placeholder='Search for tag'></input>
                </div>
            </div>
        </React.Fragment>
        );
        
      }
}

