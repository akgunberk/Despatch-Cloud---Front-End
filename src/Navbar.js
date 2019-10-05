import React, {Component} from 'react';
import MenuIcon from './logo.svg';
import DespatchLogo from './despatch-cloud.svg';
//import {Search, Icon} from 'semantic-ui-react';
import SearchIcon from './search-icon.svg';
import './navbar.css';
import User from './UserName';

class Navbar extends Component {

    render () {
        return (
                <div className = "Navbar">
                    <img src={MenuIcon} alt="Logo" />
                    <img src={DespatchLogo} alt="Despatch" />
                    <img src={SearchIcon} alt="Search" />
                    <input placeholder='Search Here'></input>
                    <User style = {{display : "inherit"}}/>
                </div>
        )
    
    }
}

export default Navbar;


