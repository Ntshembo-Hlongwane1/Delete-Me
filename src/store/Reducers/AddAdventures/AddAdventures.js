import { ADD_ADVENTURES_REQUEST, ADD_ADVENTURES_SUCCESS,ADD_ADVENTURES_FAIL } from '../../Actions/AddAventures/actions'


export const AddAdventures = (state={addedAdventure:[]}, actions) =>{

  switch (actions.type) {
    case ADD_ADVENTURES_REQUEST:
      return {loading:true}
    case ADD_ADVENTURES_SUCCESS:
      return {loading:false, addedAdventure:actions.payload}

    case ADD_ADVENTURES_FAIL:
      return {loading:false, error:actions.payload}
    default:
      return state
  }
}
