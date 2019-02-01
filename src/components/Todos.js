import React, { Component } from 'react'
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';


export class Todos extends Component {
  render() {
    return this.props.todos.map((todo)=>(
        <Todoitem key={ todo.id } todo={todo} markComplete={ this.props.markComplete } deltodo={ this.props.deltodo } />

    
))
  }
}

//Prop types
Todos.propTypes = {
    todos : PropTypes.array.isRequired,
    markComplete : PropTypes.func.isRequired,
    deltodo : PropTypes.func.isRequired

}

export default Todos
