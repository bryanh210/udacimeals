import React, { Component } from 'react'
import { addRecipe } from '../actions'

class App extends Component {

  state = {
    calendar: null
  }

  componentDidMount(){
    const { store } = this.props


    //subscribe to any change that happens in our Redux store
    //when anything changes we want to call setState
    //get the state out of the store and put into component state
    // which will cause re render and renders breakfast (Monday's Breakfast)
    store.subscribe(() =>{
      this.setState(() =>({
        // return the current state of our store
        calendar: store.getState()
      }))
    })
  }

  submitFood = () =>{
    // dispatch the action in addRecipe
    this.props.store.dispatch(addRecipe({
      day: 'monday',
      meal: 'breakfast',
      recipe: {
        // whatever input we type in
        // input is defined at a tag in render
        label: this.input.value
      },
    }))

    //when it's finished dispatching, reset the input string to empty
    this.input.value = ''
  }

  render() {
    return (
      <div>
        <input
          type='text'
          ref={(input) => this.input = input}
          placeholder="Monday's Breakfast"
        />
        <button onClick={this.submitFood}>Submit</button>

      <pre>
        Monday's Breakfast: {this.state.calendar && this.state.calendar.monday.breakfast}
      </pre>
    </div>
  )
}
}
export default App
