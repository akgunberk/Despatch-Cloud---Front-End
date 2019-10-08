import React, {Component} from 'react';
import MenuIcon from './logo.svg';
import DespatchLogo from './despatch-cloud.svg';
//import {Search, Icon} from 'semantic-ui-react';
import SearchIcon from './search-icon.svg';
import './navbar.css';
import User from './UserName';
import {Responsive} from 'semantic-ui-react'

class Navbar extends Component {

    render () {
        return (
                <div className = "Navbar">
                    <img id = "Toggle"src={MenuIcon} alt="Logo" />
                    <img id ="DespatchLogo" src={DespatchLogo} alt="Despatch" />
                    <Responsive minWidth={415}>
                        <img src={SearchIcon} alt="Search" />
                        <input placeholder='Search Here'></input>
                    </Responsive>
                    <User/>
                </div>
        )
    
    }
}

export default Navbar;


