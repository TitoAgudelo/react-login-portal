import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { userActions } from '../actions';

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: '',
        password: ''
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { user } = this.state;
    const { name, value } = e.target;
    let newUser = Object.assign({}, user);
    newUser[name] = value;
    this.setState({ user: newUser });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.username && user.password) {
      this.props.register(user);
    }
  }

  render() {
    const { user, submitted } = this.state;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Register</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control username" name="username" placeholder="Enter username" value={user.username} onChange={this.handleChange} />
            {submitted && !user.username &&
              <div className="help-block">Username is required</div>
            }
          </div>
          <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" placeholder="Enter password" value={user.password} onChange={this.handleChange} />
            {submitted && !user.password &&
              <div className="help-block">Password is required</div>
            }
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Register</button>
            <Link to="/login" className="btn btn-link">Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

RegisterPage.propTypes = {
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  registration: state.registration,
  alert: state.alert
})

export default connect(mapStateToProps, userActions)(RegisterPage);
