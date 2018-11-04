import React from 'react';
import Column from './components/Column';
import styled from 'styled-components';

const Columns = styled.div`
  display: flex;
  flex-direction: columns;
`;

const users = [
  {avatar: 'avatar0', name:'user0 alberto mendosaaa', position: 0},
  {avatar: 'avatar2', name:'user2', position: 2},
  {avatar: 'avatar1', name:'user1', position: 1}
];

class App extends React.Component {
  render () {
    return <div>
      <h1>Simple Hiring Manager</h1>
      <Columns>
        <Column title="Applied" users={users} position={0} />
        <Column title="Interviewing" users={users} position={1} />
        <Column title="Hired" users={users} position={2} />
      </Columns>
      </div>;
  }
}

export default App;
