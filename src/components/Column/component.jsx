import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import styled from 'styled-components';
import _filter from 'lodash/filter';

const Wrapper = styled.div`
  width: 250px;
  margin: 10px auto;
  font-family: sans-serif;
`;

export const Title = styled.h2`
  text-align: center;
`;

class Column extends Component {
  componentWillReceiveProps(nextProps, nextState) {
    console.log('willreceive', nextProps, nextState);
  }
  render() {
    const {title, users, position} = this.props;
    const filteredUsers = _filter(users, user => user.position === position);

    return (<Wrapper>
      <Title>{title}</Title>
      { !!filteredUsers && filteredUsers.map((user, idx) =>
          <Card key={idx}
            user={user}
            position={user.position} />
        )
      }
    </Wrapper>);
  }
}

Column.propTypes = {
  title: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired,
  position: PropTypes.number
};

export default Column;
