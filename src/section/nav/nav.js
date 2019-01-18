import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './nav.scss';

const SubMenu = Menu.SubMenu;


class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="logo" ></div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Icon type="home" />
                        <span>
                            <Link to='/home'>首 页</Link>
                        </span>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="global" /><span>系统管理</span></span>}>
                        <Menu.Item key="5">
                            <Link to='/user'>用户管理</Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Link to='/role'>角色管理</Link>
                        </Menu.Item>
                        <Menu.Item key="7">
                            权限管理
                        </Menu.Item>
                        <Menu.Item key="8">
                            菜单管理
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default Nav;
