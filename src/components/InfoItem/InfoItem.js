import React, { Component } from 'react';
import { connect } from 'react-redux';

//renders the movies passed to it from the infoPage
class InfoItem extends Component {
    render() {
        return (
            <div >
                <img src = {this.props.movie.poster}/>
                <h2>{this.props.movie.title}</h2>
                <p>{this.props.movie.description}</p>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(InfoItem);