import _findIndex from 'lodash/findIndex';

const initialState = {
  list: []
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USERS':
      const users = action.data.map(user => (
        {
          ...user,
          position: 0,
          avatar: user && user.picture ? user.picture.thumbnail : "",
          name: `${user.name.first} ${user.name.last}`
        }
      ));
      return { ...state, list: [ ...state.list, ...users ] };
    case 'UPDATE_USER':
      const index = _findIndex(state.list, item =>
        item.id.value === action.user.id.value
      );

      if (index > -1) {
        return { ...state, list: [
          ...state.list.slice(0, index),
          { ...state.list[index], position: action.user.position },
          ...state.list.slice(index+1, state.list.length)
        ] };
      }
      return state;
    default:
      return state;
  }
};
  
export default users;