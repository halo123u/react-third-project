import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class SearchBar extends Component {
    render () {
        return (
            
            <form className="input-group">
                <input type="text"/> 
                <span className="input-group-btn">
                    <button className="btn btn-primary">Search</button>
                </span>
            </form>
            
        )   
    }
}

