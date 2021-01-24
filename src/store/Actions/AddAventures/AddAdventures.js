import { ADD_ADVENTURES_REQUEST, ADD_ADVENTURES_SUCCESS, ADD_ADVENTURES_FAIL } from './actions'

export const AddAdventures = (name, image) => async (dispatch) =>{

  const baseURL = {
    dev:'http://localhost:3001/adventures',
    prod:''
  }

  const url = process.env.NODE_ENV === "production" ? baseURL.prod : baseURL.dev
  const data = {
    name,
    image,
  }
  try {

    dispatch({type:ADD_ADVENTURES_REQUEST})
    const response = await fetch(url, {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      }
       body: JSON.stringify(data)
    })

    dispatch({type:ADD_ADVENTURES_SUCCESS, payload:response})

  } catch (error) {
    dispatch({type:ADD_ADVENTURES_FAIL, payload:error})
  }
}
