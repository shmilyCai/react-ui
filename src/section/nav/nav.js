import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './nav.scss';

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Icon type="home" />
                        <span>
                            home
                            {/* <Link to='/home'>Home</Link> */}
                        </span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="user" />
                        <span>
                            <Link to='/user'>user</Link>
                        </span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload" />
                        <span>
                            <Link to='/role'>role</Link>
                        </span>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default Nav;
