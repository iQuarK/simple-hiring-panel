import React from 'react';
import {render} from 'react-dom';
import Card from './components/Card';

class App extends React.Component {
  render () {
    return <div>
      <h1>Simple Hiring Manager</h1>
      <Card avatar="http://images2.fanpop.com/image/photos/9400000/avatar-avatar-2009-film-9474591-1280-960.jpg" name="Hola dola" />
      </div>;
  }
}

render(<App/>, document.getElementById('app'));
