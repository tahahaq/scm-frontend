import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const style = {
  marginTop: '40px',
  fontSize: '36px'
};

const style2 = {
  fontSize: '36px'
};

export default () => (
  <div>
    <Header className="header" style={style} as="h1">
      2018 Bordeaux Malbec
    </Header>
    <Header as="h3" textAlign="center">
      <span style={{ marginRight: '100px' }}>Strength:</span>15%
      <br />
      <span style={{ marginRight: '100px' }}>Additives:</span>None
    </Header>

    <Header className="header" style={style2} as="h1">
      <Icon name="dropdown" />
      Grapes grown at vineyard1
    </Header>
    <Header as="h3" textAlign="center">
      <span style={{ marginRight: '100px' }}>Altitude:</span>50m
      <br />
      <span style={{ marginRight: '100px' }}>Region:</span>Bordeaux
      <br />
      <span style={{ marginRight: '100px' }}>Grape:</span>Malbec
    </Header>
  </div>
);
