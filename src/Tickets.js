import React, {Component} from 'react';
import { List } from 'semantic-ui-react';
import Sidebar from './Sidebar';

export default class Tickets extends Component {
 /*    constructor(props) {
        super(props);
        this.state = {
            types: {"Open","Awaiting Reply","Resolved","Archived"},
            active: false}
    } */
    render() {
        var UserStyle = {
            display:"inline",
            //height:"62px",
            //width: "74px",
            textAlign:"left"
    }
        return (
        <React.Fragment>
            <div>
                <Sidebar/>
                    <List style={UserStyle}>
                    <List.Item>Open</List.Item>
                    <List.Item>Awaiting Reply</List.Item>
                    <List.Item>Resolved</List.Item>
                    <List.Item>Archived</List.Item>
                </List>
            </div>
        </React.Fragment>
        );
        
      }
}