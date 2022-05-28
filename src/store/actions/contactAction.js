import axios from "axios"

export const fetchContact = () => {
  return async(dispatch) => {
    try {
      const response = await axios.get(`https://simple-contact-crud.herokuapp.com/contact`)

      dispatch({
        type: 'FETCH_CONTACT',
        payload: response.data
      })
    } catch (error) {
      console.log(error, 'error dari action')
    }
  }
}