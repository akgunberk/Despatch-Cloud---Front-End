import React, {Component} from 'react';
import { List } from 'semantic-ui-react';


export default class Priority extends Component {
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
            margin:"271px 40px 596px 22px"
    }
        return (
        <React.Fragment>

            <div>
                <List style={UserStyle}>
                    <b>Priority</b>
                    <List.Item>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                        <circle id="Ellipse_221" data-name="Ellipse 221" cx="5.5" cy="5.5" r="5.5" fill="#e74c3c"/>
                        </svg>Urgent
                    </List.Item>
                    <List.Item>                   
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                        <g id="Ellipse_223" data-name="Ellipse 223" fill="none" stroke="#F39C12" stroke-width="1">
                            <circle cx="5.5" cy="5.5" r="5.5" stroke="none"/>
                            <circle cx="5.5" cy="5.5" r="5" fill="none"/>
                        </g>
                        </svg>High</List.Item>
                    <List.Item>   
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                        <circle id="Ellipse_221" data-name="Ellipse 221" cx="5.5" cy="5.5" r="5.5" fill="#2ecc71"/>
                        </svg>
                        Medium</List.Item>
                    <List.Item>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                        <g id="Ellipse_223" data-name="Ellipse 223" fill="none" stroke="#25bbf3" stroke-width="1">
                            <circle cx="5.5" cy="5.5" r="5.5" stroke="none"/>
                            <circle cx="5.5" cy="5.5" r="5" fill="none"/>
                        </g>
                        </svg>
                        Low
                    </List.Item>

 

                </List>
            </div>
        </React.Fragment>
        );
        
      }
}

