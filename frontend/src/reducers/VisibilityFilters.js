import { VisibilityFilters } from '../actions'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
      case 'SHOW_ORDER_FREQUENCY':
        return action.filter
      default:
        return state
    }
  }
  
  export default visibilityFilter