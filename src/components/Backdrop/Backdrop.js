import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

//backdrop style
const Backdrop = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    z-index: 100;
`
//backdrop class, when clicked it will set the drawer reducer to false which will
//make app not render this or the drawer anymore
class BackDrop extends Component {
    handleClick = () =>{
        this.props.dispatch({type: 'SET_DRAWER'});
    }
    render() {
        return (
            <Backdrop onClick = {this.handleClick}/>
        );
    }
}
const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(BackDrop);