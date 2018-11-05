import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _filter from 'lodash/filter';
import Column from './components/Column';
import styled from 'styled-components';

const Columns = styled.div`
  display: flex;
  flex-direction: row;
`;

class App extends Component {
  onUpdateFilterName = evt =>
    this.setState({filter: { ...this.state.filter, name: evt.target.value}});

  onUpdateFilterCity = evt =>
    this.setState({filter: { ...this.state.filter, city: evt.target.value}});

  state = {
    filter: {
      name: '',
      city: ''
    }
  };

  render() {
    const { users, onRetrieveUsers } = this.props;
    const { filter } = this.state;

    const filteredUsers = _filter(users, user => {
      const nameRE = new RegExp(filter.name);
      const cityRE = new RegExp(filter.city);

      if (nameRE.test(user.name) && cityRE.test(user.location.city)) {
        return user;
      }
    });

    return (
      <div>
        <h1>Simple Hiring Manager</h1>
        <button onClick={onRetrieveUsers}>Request More Data</button>
        <div>
          filter by name: <input onKeyUp={this.onUpdateFilterName} />
        </div>
        <div>
          filter by city: <input onKeyUp={this.onUpdateFilterCity} />
        </div>
        <Columns>
          <Column title="Applied" users={filteredUsers} position={0} />
          <Column title="Interviewing" users={filteredUsers} position={1} />
          <Column title="Hired" users={filteredUsers} position={2} />
        </Columns>
      </div>
    );
  }
}

App.propTypes = {
  users: PropTypes.array.isRequired,
  onRetrieveUsers: PropTypes.func.isRequired
};

export default App;
