import React, { Component } from 'react';

import './App.scss';
import { Layout, Icon } from 'antd';

import Nav from './section/nav/nav';
// import  Header from './section/header/header';
import Content from './section/content/content';

const { Header, Sider } = Layout;

class App extends Component {

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
        <Sider trigger={true} collapsible collapsed={this.state.collapsed}>
          <Nav></Nav>
        </Sider>
        <Layout>
          <Header className="header">
            <Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle} />
            </Header>
          <Content></Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
