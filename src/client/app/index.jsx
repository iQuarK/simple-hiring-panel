import React from 'react';
import {render} from 'react-dom';
import Column from './components/Column';
import styled from 'styled-components';

const Columns = styled.div`
  display: flex;
  flex-direction: columns;
`;

const users = [
  {avatar: 'avatar1', name:'user1 alberto mendosaaa'},
  {avatar: 'avatar2', name:'user2'}
];

class App extends React.Component {
  render () {
    return <div>
      <h1>Simple Hiring Manager</h1>
      <Columns>
        <Column title="Applied" users={users} position="first" />
        <Column title="Interviewing" users={users} />
        <Column title="Hired" users={users} position="last" />
      </Columns>
      </div>;
  }
}

render(<App/>, document.getElementById('app'));
