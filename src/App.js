import React, { Component } from 'react';
import uuid from 'uuid';
import Header from './components/layout/Header';
import Addtodo from './components/Addtodo';
import Todos from './components/Todos'

import './App.css';

class App extends Component {
  state = {
    todos : [
      {
        id: uuid.v4(),
        title: 'Controls and Systems',
        completed : false
      },
      {
        id: uuid.v4(),
        title: 'Linked List',
        completed : false
      },
      {
        id: uuid.v4(),
        title: 'Telecommunications',
        completed : false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos : this.state.todos.map(todo=>{
        if(todo.id===id){
          todo.completed = !todo.completed //toggling
        }
        return todo;
      }
        )
    })

  }

  deltodo = (id) => {
    this.setState({
      todos : this.state.todos.filter(todo=>todo.id !== id)
    });
  }

  addtodo = (title) => {
    const newtodo = {
      id : uuid.v4(),
      title,
      completed : false
    }
    this.setState({ todos : [...this.state.todos, newtodo ]});

  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Addtodo addtodo={ this.addtodo }/>
          <Todos todos={ this.state.todos } markComplete={ this.markComplete } deltodo={ this.deltodo } />
        </div>
      </div>
    );
  }
}

export default App;
