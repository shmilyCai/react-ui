import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddTodo from '../container/todo/AddTodo';
import VisibleTodoList from '../container/todo/VisibleTodoList';
import Footer from '../components/Footer';
import {fetchAction} from '../_action/fetch';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(fetchAction())
  }

  render() {
    return (
      <div>
        Home
          <br />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default connect()(Home);

