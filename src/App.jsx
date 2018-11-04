import React from 'react';
import PropTypes from 'prop-types';
import Column from './components/Column';
import styled from 'styled-components';

const Columns = styled.div`
  display: flex;
  flex-direction: columns;
`;

const App = ({onRetrieveUsers}) => (<div>
  <h1>Simple Hiring Manager</h1>
  <button onClick={onRetrieveUsers}>Request Data</button>
  <Columns>
    <Column title="Applied" position={0} />
    <Column title="Interviewing" position={1} />
    <Column title="Hired" position={2} />
  </Columns>
  </div>
);

App.propTypes = {
  onRetrieveUsers: PropTypes.func.isRequired
};

export default App;
