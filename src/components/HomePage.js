import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { userActions } from '../actions';

class HomePage extends Component {

  constructor(props) {
    super(props);

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut() {
    this.props.logout();
  }

  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2 align="center">Welcome! You have successfully logged in.</h2>
        <p align="center">
          <Link to="" onClick={this.handleLogOut}>Logout</Link>
        </p>
      </div>
    );
  }
}

HomePage.propTypes = {
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.authentication,
})

export default connect(mapStateToProps, userActions)(HomePage);
