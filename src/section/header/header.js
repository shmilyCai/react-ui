import React, { Component } from 'react';
import { Icon } from 'antd';

import './header.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
          <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
      </div>
    );
  }
}

export default Header;
