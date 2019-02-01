import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Todoitem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom : '1px #ccc dotted',
            textDecoration : this.props.todo.completed ? 'line-through' : 'none'
          }
    }
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
          <p className="todoitem">
            <label>
                <input type="checkbox" class="filled-in" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                <span> </span>
                </label>
          {/* <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '} */}
          { title }
          <button style={btnStyle} onClick={this.props.deltodo.bind(this, id)} >x</button>
          </p>
        
      </div>
    )
  }
}

const btnStyle = {
    background : '#ff0000',
    color : '#fff',
    border : 'none',
    padding : '5px 9px',
    borderRadius : '50%',
    cursor : 'pointer',
    float : 'right'
}

//Prop types
Todoitem.propTypes = {
    todo : PropTypes.object.isRequired,
    markComplete : PropTypes.func.isRequired,
    deltodo : PropTypes.func.isRequired
  }

export default Todoitem
