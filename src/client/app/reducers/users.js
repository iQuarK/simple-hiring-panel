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
          avatar: user && user.picture ? user.picture.thumbnail : ""
        }
      ));
      return { ...state, list: [ ...state.list, ...users ] };
    case 'UPDATE_USER':
      let {list} = state;
      const index = _findIndex(list, item =>
        item.id.value === action.user.id
      );
      if (index > -1) {
        return { ...state, list: [
          ...state.list.slice(0, index),
          action.user,
          ...state.list.slice(index+1, state.list.length)
        ] };
      }
      return state;
    default:
      return state;
  }
};
  
export default users;