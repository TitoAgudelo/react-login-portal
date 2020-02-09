import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { PrivateRoute } from './PrivateRoute.js';
import { history } from './helpers';
import PropTypes from 'prop-types';

import { alertActions } from './actions';

import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      this.props.clear();
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div className="container" style={{'marginTop': '5rem'}}>
        <div className="col-sm-8 col-sm-offset-2">
          {alert && alert.message ?
            <div className="alert-container">
              <div className={alert.type === 'alert-success' ? 'alert alert-success' : 'alert alert-danger'} role="alert">
                { alert.message }
              </div>
            </div> : ''
          }
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <PrivateRoute exact path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  success: PropTypes.func.isRequired,
  error: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  alert: state.alert
})

export default withRouter(connect(mapStateToProps, alertActions)(App));
