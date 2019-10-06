import React, { Component } from 'react';
import { connect } from 'react-redux';

class InfoItem extends Component {
    render() {
        return (
            <div >
                <h2>{this.props.movie.name}</h2>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(InfoItem);