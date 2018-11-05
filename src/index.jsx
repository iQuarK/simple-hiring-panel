import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import rootReducer from './reducers'
import { retrieveUsers } from './actions/users';
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

// receives the data from the reducer to make the list of orders
const mapStateToProps = state => ({
    users: state.users.list
});

// maps the action into a function inside the component
const mapDispatchToProps = dispatch => ({
    onRetrieveUsers: () => {
        dispatch(retrieveUsers())
    }
});

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

render(
    <Provider store={store}>
        <ConnectedApp />
    </Provider>
    , document.getElementById('app')
);
