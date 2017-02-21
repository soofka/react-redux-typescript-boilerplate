import * as React from 'react';
import { Grid } from 'react-bootstrap';

import Navigation from '../Navigation';

interface IAppProps {}

class App extends React.Component<IAppProps, {}> {
  render() {
    return (
      <Grid>
        <Navigation />
        {this.props.children}
      </Grid>
    );
  }
}

export default App;