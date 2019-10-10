import React, {Component} from 'react';
import { List,Label } from 'semantic-ui-react';

export default class Tickets extends Component {
 /*    constructor(props) {
        super(props);
        this.state = {
            types: {"Open","Awaiting Reply","Resolved","Archived"},
            active: false}
    } */
    render() {
        var UserStyle = {
            position:"relative",
            display:"block",
            textAlign:"left",
            margin:"0px 31px 47px 22px",
            width:"205px"
    }
        return (
        <React.Fragment>
            <div>
                
                <List style={UserStyle}>
                    <div style={{width:"205px",marginTop:"20px",marginBottom:"18px"}}>
                    <b style={{width:"205px"}}>Tickets<p style={{float:"right"}}><Label circular style={{backgroundColor:"#627688",color:"white",width:"35px",height:"23px",display:"float"}}>43</Label></p></b> 
                    </div>
                    <List.Item>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                        <circle id="Ellipse_221" data-name="Ellipse 221" cx="5.5" cy="5.5" r="5.5" fill="#25bbf3"/>
                        </svg>Open
                        <p style={{float:"right",marginBottom:"17px"}}>43</p>
                    </List.Item>
                    <List.Item>                   
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                        <g id="Ellipse_223" data-name="Ellipse 223" fill="none" stroke="#F39C12" stroke-width="1">
                            <circle cx="5.5" cy="5.5" r="5.5" stroke="none"/>
                            <circle cx="5.5" cy="5.5" r="5" fill="none"/>
                        </g>
                        </svg>Awaiting Reply 
                        <p style={{float:"right",marginBottom:"16px"}}>2</p>
                        </List.Item>
                    <List.Item>                 
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                        <g id="Ellipse_223" data-name="Ellipse 223" fill="none" stroke="#2ecc71" stroke-width="1">
                            <circle cx="5.5" cy="5.5" r="5.5" stroke="none"/>
                            <circle cx="5.5" cy="5.5" r="5" fill="none"/>
                        </g>
                        </svg>Resolved
                        <p style={{float:"right",marginBottom:"16px"}}>12</p>
                        </List.Item>
                    <List.Item>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                        <circle id="Ellipse_221" data-name="Ellipse 221" cx="5.5" cy="5.5" r="5.5" fill="#627688"/>
                        </svg>Archived
                        <p style={{float:"right",marginBottom:"47px"}}>60</p>
                    </List.Item>

 

                </List>
            </div>
        </React.Fragment>
        );
        
      }
}

