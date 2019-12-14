import { VisibilityFilters } from './actions'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

const gridview = (state = [], action) => {

    if (typeof state === 'undefined') {
        return initialState
    }

    switch (action.type) {
      case 'SHOW_ALL':
        return [
          ...state,
          {
              
          }
        ]
      default:
        return state
    }
  }
  
  export default gridview;