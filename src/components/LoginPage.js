import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { userActions } from '../actions';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    // reset login status

    this.state = {
      username: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(e) {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    }

    handleSubmit(e) {
      e.preventDefault();

      this.setState({ submitted: true });
      const { username, password } = this.state;
      if (username && password) {
        this.props.login(username, password);
      }
    }

    render() {
      const { username, password, submitted } = this.state;
      return (
        <div className="col-md-6 col-md-offset-3">
          <h2>Login</h2>
          <form name="form" onSubmit={this.handleSubmit}>
            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control username" name="username" placeholder="Enter username" value={username} onChange={this.handleChange} />
              {submitted && !username &&
                <div className="help-block">Username is required</div>
              }
            </div>
            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control password" name="password" placeholder="Enter password" value={password} onChange={this.handleChange} />
              {submitted && !password &&
                <div className="help-block">Password is required</div>
              }
            </div>
            <div className="form-group">
              <button className="btn btn-primary">Login</button>
              <Link to="/register" className="btn btn-link">Register</Link>
            </div>
          </form>
        </div>
      );
    }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.authentication,
  alert: state.alert
})

export default connect(mapStateToProps, userActions)(LoginPage);
