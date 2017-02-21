import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './style.scss';

interface IHomeProps {}

class Home extends React.Component<IHomeProps, {}> {
  render() {
    return (
      <Row className="show-grid entry">
        <Col xs={12} md={12}>
          <h1>Entry header</h1>
          <small>Entry meta</small>
          <p>Entry content</p>
        </Col>
      </Row>
    );
  }
}

export default Home;