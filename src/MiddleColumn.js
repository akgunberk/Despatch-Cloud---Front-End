import React, {Component} from 'react';
import TicketList from './TicketList';
import Logo from './UserLogo.svg';


export default class MiddleColumn extends Component {
      render() {
        let tickets = [
            {id :"#4345", author:"Matthew Dunne ", summary :"Migration to Shopify", context:"Lorem ipsum  dolor sit amet, consetetur sadispcing elitr", priority:"Medium", hour:"12 hours ago", icon : {Logo}},
            {id :"#4345", author:"Matthew Dunne ", summary :"Migration to Shopify", context:"Lorem ipsum  dolor sit amet, consetetur sadispcing elitr", priority:"Medium", hour:"12 hours ago", icon : {Logo}},
            {id :"#4345", author:"Matthew Dunne ", summary :"Migration to Shopify", context:"Lorem ipsum  dolor sit amet, consetetur sadispcing elitr", priority:"Medium", hour:"12 hours ago", icon : {Logo}},
            {id :"#4345", author:"Matthew Dunne ", summary :"Migration to Shopify", context:"Lorem ipsum  dolor sit amet, consetetur sadispcing elitr", priority:"Medium", hour:"12 hours ago", icon : {Logo}},
          ]

        
          

          return (

            <React.Fragment>
              <div id="Tickets" style = {{display:"block"}}>
                {tickets.map(c => (
                
                <TicketList id = {c.id} author = {c.author} body = {c.body} summary = {c.summary} context = {c.context} priority = {c.priority} hour = {c.hour}/>)
                )}
              </div>
            </React.Fragment>

          )
      }
}