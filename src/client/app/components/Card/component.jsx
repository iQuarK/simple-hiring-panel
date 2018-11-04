import React from 'react';
import styled from 'styled-components';

const AVATAR_SIZE = '45px';

const CardStyle = styled.div`
  border: #B0E2FF solid thin;
  border-radius: 3px;
  padding: 5px;
`;

const User = styled.div`
  display: grid;
  grid-template-columns: ${AVATAR_SIZE} auto;
  grid-column-gap: 10px;
`;

export const Avatar = styled.img`
  width: ${AVATAR_SIZE};
  height: ${AVATAR_SIZE};
  border-radius: 25px;
`;

const Name =  styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 30px;
`;

const Controls = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: columns;
  justify-content: space-between;
`;

const Card = ({avatar, name}) => 
  <CardStyle>
    <User>
      <Avatar src={avatar} />
      <Name>{name}</Name>
    </User>
    <Controls>
      <button>&lt;</button>
      <button>&gt;</button>
    </Controls>
  </CardStyle>

export default Card;
