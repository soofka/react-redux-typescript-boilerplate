import * as React from 'react';
import { FormattedMessage } from 'react-intl';

interface IBarProps {}

class Bar extends React.Component<IBarProps, {}> {
  render() {
    return (
      <div>
        <FormattedMessage id="bar" defaultMessage="defaultBar" />
      </div>
    );
  }
}

export default Bar;