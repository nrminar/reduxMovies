import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

//creates the hamburger div styles
const Hamburger = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 5px 10px;
    height: 30px;
    width: 36px;
    background: transparent;
    border: none;
    padding: 0;
    box-sizing: border-box;
    outline: none;
`
//style for the lines in the hamburger
const ToggleLine = styled.div`
    width: 30px;
    height: 2px;
    background: white;
`
//hamburger menu for links to genres
class DrawerToggle extends Component {
    handleClick = () =>{
        this.props.dispatch({type: 'SET_DRAWER'});
    }
    render() {
        return (
            <Hamburger onClick = {this.handleClick}>
                <ToggleLine></ToggleLine>
                <ToggleLine></ToggleLine>
                <ToggleLine></ToggleLine>
            </Hamburger>
        );
    }
}
const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(DrawerToggle);