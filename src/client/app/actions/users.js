export const addUsers = request => ({
  type: 'ADD_USERS',
  data: JSON.parse(request)
});

export const updateUser = user => ({
  type: 'UPDATE_USER',
  user
});
