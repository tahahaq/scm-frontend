import React from 'react';
import { Header } from 'semantic-ui-react';

const style = {
  marginTop: '40px',
  fontSize: '40px'
};

export default () => (
  <div>
    <Header className="header" style={style} as="h1">
      2018 Bordeaux Malbec
    </Header>
  </div>
);
