import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
  state = {
    text: ''
  }

  /* Since we've created the action here, next is to dispatch it
  dispatch is a store method so we need access to the store
  to get access to the store we need to import connect from react-redux
  then we need to integrate connect into our export line
  we need to pass it the appropriate arguments
  since this is a form, we don't need mapStateToProps, since the form
  doesn't care about what's previously in global state, we just
  want to add to it
  so we pass in null as our first arg
  
  we need mapDispatchToProps as our second arguments, because we
  want to modify global state with the new todo item, and for whatever reason
  we call that mapDispatchToProps since it's also changing props?
  even though to me the main point of redux is global state,
  so wouldn't a more intuitive name be mapDispatchToState ? */

  // this was undefined because I forgot to use an arrow function
  // now this function declaration looks right
  handleOnChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  
  handleOnSubmit = event => {
    // QQ originally a point of confusion, first tried to invoke an action creator here

    event.preventDefault()
    this.props.addTodo(this.state)
  }

  // actionCreator = () => {
  //   let action = {
  //     type: 'ADD_TODO',
  //     todo: this.state.text
  //   }
  //   return action
  // }

  render() { 
    // wtf are we changing about render? 
    return(
      <div>
        <form onSubmit={ event => this.handleOnSubmit(event)} >
          <p>
            <label> add todo</label>
            <input 
              type='text' 
              onChange={this.handleOnChange}
              value={this.state.text}
              name='text'
            />
          </p>
          <input type='submit' />
        </form>
        {this.state.text}
      </div>
    )
  }
}

/* 
so ƒ MSTP takes a dispatch argument and essentially makes dispatch with a specific
action type 'ADD_TODO' callable via this.props.addTodo
by merging the return value object of ƒ MSTP into props
*/
const mapDispatchToProps = dispatch => {
  return {
    addTodo: (formData) => dispatch({ 
        type: 'ADD_TODO',
        payload: formData,
    })
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
