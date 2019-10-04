import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import MovieItem from '../MovieItem/MovieItem';

class InfoPage extends Component {
    state = {
        movie: []
    }
    componentDidMount() {
        this.ID()
    }
    ID = () => {
        console.log(this.props.match.params.id)
        this.props.dispatch({ type: 'SET_INFO_MOVIES', payload: this.props.match.params.id })
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
                {this.props.reduxState.infoMovie.map((movie)=>{
                return(
                <MovieItem movie = {movie}/>
                )
                })}
                <button onClick={this.handelClick}>Back to Movies</button>
                <button onClick={this.edit}>Edit</button>
            </Router>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(InfoPage));