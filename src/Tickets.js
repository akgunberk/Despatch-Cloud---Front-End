import React, {Component} from 'react';
import { List } from 'semantic-ui-react';

export default class Tickets extends Component {
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
            margin:"82px 31px 787px 22px"
    }
        return (
        <React.Fragment>
            <div>
                

                <List style={UserStyle}>
                    <b>Tickets</b>
                    <List.Item>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                        <circle id="Ellipse_221" data-name="Ellipse 221" cx="5.5" cy="5.5" r="5.5" fill="#25bbf3"/>
                        </svg>Open
                    </List.Item>
                    <List.Item>                   
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                        <g id="Ellipse_223" data-name="Ellipse 223" fill="none" stroke="#F39C12" stroke-width="1">
                            <circle cx="5.5" cy="5.5" r="5.5" stroke="none"/>
                            <circle cx="5.5" cy="5.5" r="5" fill="none"/>
                        </g>
                        </svg>Awaiting Reply</List.Item>
                    <List.Item>                 
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                        <g id="Ellipse_223" data-name="Ellipse 223" fill="none" stroke="#2ecc71" stroke-width="1">
                            <circle cx="5.5" cy="5.5" r="5.5" stroke="none"/>
                            <circle cx="5.5" cy="5.5" r="5" fill="none"/>
                        </g>
                        </svg>Resolved</List.Item>
                    <List.Item>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                        <circle id="Ellipse_221" data-name="Ellipse 221" cx="5.5" cy="5.5" r="5.5" fill="#627688"/>
                        </svg>Archived
                    </List.Item>

 

                </List>
            </div>
        </React.Fragment>
        );
        
      }
}

