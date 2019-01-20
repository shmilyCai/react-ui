import React, { Component } from 'react';

import AddTodo from '../container/todo/AddTodo';
import VisibleTodoList from '../container/todo/VisibleTodoList';
import Footer from '../components/Footer';

class Home extends Component {
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

export default Home;

