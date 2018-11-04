import Column from './component.jsx';
import { connect } from 'react-redux';

// receives the data from the reducer to make the list of orders
const mapStateToProps = state => ({
  users: state.users.list
});

export default connect(mapStateToProps)(Column);
