import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import InfoItem from '../InfoItem/InfoItem';
import GenreItem from '../GenreItem/GenreItem';
class InfoPage extends Component {
    state = {
        movies: []
    }
    async componentDidMount(){
        this.ID();
        this.movieMap();
    }
    ID = () => {
        console.log(this.props.match.params.id)
        this.props.dispatch({ type: 'SET_INFO_MOVIES', payload: this.props.match.params.id })
    }
    movieMap = () =>{
        this.setState({movies: this.props.reduxState.infoMovie})
        console.log('Exit MovieMap')
    }
    
    handelClick=()=>{
        this.props.history.push('/');
    }
    edit = () =>{
        this.props.history.push(`/edit/${this.props.match.params.id}`);
    }

    render() {
        return (
            <Router>
                {this.props.reduxState.infoMovie.map((movie, index)=>{
                return(
                    <GenreItem movie = {movie} index = {index}/>
                )
                })}
                {this.props.reduxState.infoMovie.map((movie, index)=>{
                    if(index<1){
                        return(
                            <InfoItem movie = {movie}/>
                        )
                    }
                })}  
                <button onClick = {this.handelClick}>Back to Movies</button> 
                <button onClick = {this.edit}>Edit</button> 
            </Router>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(InfoPage));