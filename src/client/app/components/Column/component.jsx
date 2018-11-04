import React from 'react';
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

const Column = ({title, users, position}) => 
  <Wrapper>
    <Title>{title}</Title>
    { !!users && users.map((user, idx) =>
        <Card key={idx}
          avatar={user.avatar}
          name={user.name}
          position={position} />
      )
    }
  </Wrapper>

export default Column;
