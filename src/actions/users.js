import axios from 'axios';

export const retrieveUsers = request =>
  (dispatch) => axios.get('http://localhost:3000/users')
    .then( ({ data }) => dispatch({
        type: 'ADD_USERS',
        data
      })
    );

export const updateUser = user => ({
  type: 'UPDATE_USER',
  user
});
