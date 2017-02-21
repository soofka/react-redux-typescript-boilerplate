import * as React from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

interface INavigationProps {}

class Navigation extends React.Component<INavigationProps, {}> {
  render() {
    return (
      <Row className="show-grid">
        <Col xs={12} md={12}>
          <Link to="/"><FormattedMessage id="home" defaultMessage="defaultHome" /></Link>
          <Link to="/foo"><FormattedMessage id="foo" defaultMessage="defaultFoo" /></Link>
          <Link to="/bar"><FormattedMessage id="bar" defaultMessage="defaultBar" /></Link>
        </Col>
      </Row>
    );
  }
}

export default Navigation;