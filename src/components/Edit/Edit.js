import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'

class Edit extends Component {
    state = {
        movie: {
            id: '',
            title: '',
            description: '',
            poster: '',
        }
    }
    componentDidMount() {
        this.movieInfo();
    }
    movieInfo = () =>{
        {this.props.reduxState.infoMovie.map((movieInfo) => {
            this.setState({
                movie: {
                    id: movieInfo.id,
                    title: movieInfo.title,
                    description: movieInfo.description,
                    poster: movieInfo.poster,
                }
            })
        })}
    }
    handleChange = (event, propertyName) => {
        this.setState({
          movie: {
            ...this.state.movie,
           [propertyName]: event.target.value,
          }
        })
    }
    handleSubmit = () =>{
        this.props.dispatch({ type: 'UPDATE_MOVIE', payload: this.state.movie });
        this.goBack();
    }
    goBack = () =>{
        this.props.history.push(`/movie/${this.state.movie.id}`)
    }

    render() {
        return (
            <div>
                <img src = {this.state.movie.poster}></img>
                <p>Title:</p>
                <input style={{size: 30, width: 200}} onChange = {(event) => this.handleChange(event, 'title')} value = {this.state.movie.title}></input>
                <br/>
                <p>Description:</p>
                <textarea cols="100" rows="12" onChange = {(event) => this.handleChange(event, 'description')} value = {this.state.movie.description}></textarea>
                <br/>
                <button onClick = {this.goBack}>Cancel</button>
                <button onClick = {this.handleSubmit}>Submit Changes</button>
            </div>
        )
    }
}
const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(Edit));