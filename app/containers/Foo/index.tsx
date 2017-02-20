import * as React from 'react';
import { FormattedMessage } from 'react-intl';

interface IFooProps {}

class Foo extends React.Component<IFooProps, {}> {
  render() {
    return (
      <div>
        <FormattedMessage id="foo" defaultMessage="defaultFoo" />
      </div>
    );
  }
}

export default Foo;