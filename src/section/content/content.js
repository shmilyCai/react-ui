import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import User from '../../container/user/user';
import Role from '../../container/role/role';
import Home from '../../home/home';

import './content.scss';

class Content extends Component {
  render() {
    return (
      <div className="content">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/user' component={User} />
          <Route path='/role' component={Role} />
        </Switch>
      </div>
    );
  }
}

export default Content;
