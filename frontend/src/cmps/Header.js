
import { NavLink } from 'react-router-dom'
import MainSearch from '../cmps/MainSearch.js'

import React, { Component } from 'react'





export default class Header extends Component {



    render() {
        return (
            <div className="main-header flex">
                
            <h1>Travel extrodinary places with
                                                     local guides worldwide</h1>
                <div>                    
                <MainSearch onSearch={this.onSearch} ></MainSearch>
                </div>  
        
            </div>
        )
    }
}

