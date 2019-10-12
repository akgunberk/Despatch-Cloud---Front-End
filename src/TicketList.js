import React from 'react';
import Logo from './UserLogo.svg';
import {Responsive,Checkbox} from 'semantic-ui-react';
import ShopLogo from './Shop.svg';



const TicketList = (props) => (
    <ul style = {{outline:"none",fontSize:"14px", fontWeight:"light", textAlign:"left",marginLeft:"0px",paddingLeft:"0px"}}>
      <Checkbox style = {{position:"absolute", marginTop:"27px"}}></Checkbox>
      <div id = "ticketBorder" style={{ display:"inlineBlock",border:"none",background:"#ffffff", borderWidth:"thin" ,width:"1004px",height:"73px", borderRadius:"8px", paddingLeft:"0px",marginLeft:"46px"}}>
        
      <svg style = {{position:"absolute"}}  xmlns="http://www.w3.org/2000/svg" width="6" height="73" viewBox="0 0 6 73">
          <path id="Rectangle_1414" data-name="Rectangle 1414" d="M6,0H6A0,0,0,0,1,6,0V73a0,0,0,0,1,0,0H6a6,6,0,0,1-6-6V6A6,6,0,0,1,6,0Z" fill="#25bbf3"/>
        </svg>
        

      

      <Responsive minWidth={415}>
      <svg styl = {{float:"left"}} xmlns="http://www.w3.org/2000/svg" width="6" height="73" viewBox="0 0 6 73">
          <path id="Rectangle_1414" data-name="Rectangle 1414" d="M6,0H6A0,0,0,0,1,6,0V73a0,0,0,0,1,0,0H6a6,6,0,0,1-6-6V6A6,6,0,0,1,6,0Z" fill="#25bbf3"/>
        </svg>
      <svg style ={{marginTop:"20px",marginRight:"19.9px"}} xmlns="http://www.w3.org/2000/svg" width="34.082" height="34.082" viewBox="0 0 34.082 34.082">
        <g id="NoPath_-_Copy_6_" data-name="NoPath - Copy (6)" fill="#f39c12" stroke="#fff" stroke-width="2">
          <circle cx="17.041" cy="17.041" r="17.041" stroke="none"/>
          <circle cx="17.041" cy="17.041" r="16.041" fill="none"/>
        </g>
        <path id="envelope-solid_4_" data-name="envelope-solid (4)" d="M12.7,67.2a.152.152,0,0,1,.245.119v5.169a1.213,1.213,0,0,1-1.213,1.213H1.213A1.213,1.213,0,0,1,0,72.492V67.326a.151.151,0,0,1,.245-.119c.566.44,1.317,1,3.895,2.871a4.522,4.522,0,0,0,2.33,1.2,4.524,4.524,0,0,0,2.333-1.2C11.381,68.206,12.129,67.645,12.7,67.2ZM6.47,70.47c.586.01,1.431-.738,1.855-1.046,3.354-2.434,3.609-2.646,4.383-3.253a.6.6,0,0,0,.233-.478v-.48A1.213,1.213,0,0,0,11.727,64H1.213A1.213,1.213,0,0,0,0,65.213v.48a.608.608,0,0,0,.233.478c.773.6,1.029.819,4.383,3.253C5.04,69.732,5.884,70.48,6.47,70.47Z" transform="translate(10 -52)" fill="#fff"/>
      </svg>
      </Responsive>
      
      
      <div id = "TicketSummary" style = {{display:"inlineBlock"}} >
        <div style={{display:"block",width:"323px"}}>
        <Responsive  maxWidth = {415}>
                  <img style = {{position:"absolute", left:"83.2px"}}src = {ShopLogo} alt = "admin" ></img>
              </Responsive>
        <p id="Matthew" style = {{fontSize:"16px",fontWeight:"bold",marginBottom:"6px",marginTop:"15px",width:"185px"}}>
             
           {props.author}
           </p> 
        <div id ="Dunne" style={{display:"flexBox"}}>{props.summary}<p style={{color:"#25BBF3",fontSize:"10px",marginTop:"4px"}} >&nbsp; ({props.id})</p></div>
        </div>
        <Responsive style= {{float:"right",marginLeft:"0px", position:"relative", top:"24px",bottom:"22px"}} minWidth = {415}> 
          <p style={{width:"396.35px"}}>{props.context}</p>
          <p style={{color:"#2ECC71",marginRight:"46px"}}>{props.priority}</p> 
          <p style={{marginRight:"28px",width:"82px"}}>{props.hour}</p>
         </Responsive>
        </div>
        <Responsive  minWidth = {415}>
          <img src = {Logo} alt = "admin" ></img>
        </Responsive>
       
      </div>


   </ul>
   
)

  export default TicketList;


