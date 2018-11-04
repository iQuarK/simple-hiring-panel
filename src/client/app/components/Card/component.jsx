import React from 'react';
import PropTypes from 'prop-types';
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
  text-align: center;
  font-size: 20px;
`;

const Controls = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: columns;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  flex-direction: columns;
  justify-content: flex-start;
  width: 100%;
`;

const Right = styled.div`
  display: flex;
  flex-direction: columns;
  justify-content: flex-end;
  width: 100%;
`;

const Card = ({avatar, name, position, onUpdateUser}) => {
  const updateUser = offset => onUpdateUser({
    avatar,
    name,
    position: position + offset
  });

  return <CardStyle>
    <User>
      <Avatar src={avatar} />
      <Name>{name}</Name>
    </User>
    <Controls>
      { position !== 0 &&
        <Left><button onClick={updateUser(-1)}>&lt;</button></Left>
      }
      { position !== 2 &&
        <Right><button onClick={updateUser(1)}>&gt;</button></Right>
      }
    </Controls>
  </CardStyle>;
};

Card.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.number,
  onUpdateUser: PropTypes.func.isRequired
};

export default Card;
