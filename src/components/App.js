import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar } from '../actions'

class App extends Component {

  doThing = () =>{
    this.props.selectRecipe({})
  }

  render() {
    console.log('Props', this.props)
    return (
      <div>
        Hello Thế giới!
    </div>
  )
}
}


function mapStateToProps({food,calendar}){
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
  return{
    //return an object with a calendar property on it

    calendar: dayOrder.map((day) => ({
      // day property
      day,
      // meals: collection of meals
      //each item is meal
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
//if a meal exists at that calendar day, return that
//if not, it's null
        meals[meal] = calendar[day][meal]
        ? food[calendar[day][meal]]
        :null

        return meals
      }, {})
    }))
  }
}

function mapDispatchToProps (dispatch){
  return{
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data))
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(App)
