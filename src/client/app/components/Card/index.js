import Card from './component.jsx';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/users';

// receives the data from the reducer to make the list of orders
const mapStateToProps = state => ({});

// maps the action into a function inside the component
const mapDispatchToProps = dispatch => ({
  onUpdateUser: user => {
      dispatch(updateUser(user))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
