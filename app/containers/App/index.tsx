import * as React from 'react';
import { Link } from 'react-router';

interface IAppProps {}

class App extends React.Component<IAppProps, {}> {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/foo">Foo</Link>
        <Link to="/bar">Bar</Link>
        {this.props.children}
      </div>
    );
  }
}

export default App;