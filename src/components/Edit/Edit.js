import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import styled from 'styled-components';

const Button = styled.button`
  color: #E14040;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #E14040;
  border-radius: 10px;
`;
const SubmitButton = styled(Button)`
    color: #309053;
    border: 2px solid #309053;
`
const Movie = styled.div`
    background: #eee;
    padding: 30px;
    border: 4px solid #09253E;
    margin: 10px;
    border-radius: 10px;
`
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: #000001;
  background: #C7D1E6;
  border: none;
  border-radius: 5px;
`;
const Textarea = styled.textarea`
    padding: 0.5em;
    margin: 0.5em;
    color: #000001;
    background: #C7D1E6;
    border: none;
    border-radius: 5px;
`
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
            <Movie>
                <img src = {this.state.movie.poster}></img>
                <p>Title:</p>
                <Input style={{size: 30, width: 200}} onChange = {(event) => this.handleChange(event, 'title')} value = {this.state.movie.title}></Input>
                <br/>
                <p>Description:</p>
                <Textarea cols="100" rows="12" onChange = {(event) => this.handleChange(event, 'description')} value = {this.state.movie.description}></Textarea>
                <br/>
                <Button
                 onClick = {this.goBack}>Cancel
                </Button>
                <SubmitButton
                 onClick = {this.handleSubmit}>Submit Changes
                </SubmitButton>
            </Movie>
        )
    }
}
const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(Edit));