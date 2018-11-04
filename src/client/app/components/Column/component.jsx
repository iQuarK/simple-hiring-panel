import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 250px;
  margin: 10px auto;
  font-family: sans-serif;
`;

const Title = styled.h2`
  text-align: center;
`;

const Column = ({title, users, position}) => {
  const filteredUsers = users.filter(user => user.position === position);

  return (<Wrapper>
    <Title>{title}</Title>
    { !!filteredUsers && filteredUsers.map((user, idx) =>
        <Card key={idx}
          avatar={user.avatar}
          name={user.name}
          position={user.position} />
      )
    }
  </Wrapper>);
};

Column.propTypes = {
  title: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired,
  position: PropTypes.number
};

export default Column;
