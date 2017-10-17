//2 ways to change state: Add recipe or remove a food item from calendar

export const ADD_RECIPE = 'ADD_RECIPE'
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR'

export function addRecipe ({day, recipe, meal}) {
  return {
    type: ADD_RECIPE,
    recipe,
    day,
    meal,
  }
}


export function removeFromCalendar({ day, meal}) {
  return {
    type: REMOVE_FROM_CALENDAR
  }
}
