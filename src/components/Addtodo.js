import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Addtodo extends Component {
    state = {
        title: ''
    }
    onChange = (e) => this.setState({ [e.target.name] :e.target.value });
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addtodo(this.state.title);
        this.setState({ title: '' });
    }
  render() {
    return (
      <div>
          <form onSubmit={ this.onSubmit } style={{ display: 'flex' }} >
              <input 
                type="text"
                name="title"
                placeholder="Add to-do..."
                style={{padding : '5px' }}
                value={ this.state.title }
                onChange={ this.onChange }
                />
                <button className="btn waves-effect waves-light" type="submit" style={{ paddingTop: '2px', textAlign: "center"}}>
                    Submit
                </button>
          </form>
        
      </div>
    )
  }
}

//Prop types
Addtodo.propTypes = {
    addtodo : PropTypes.func.isRequired
  }
  

export default Addtodo
