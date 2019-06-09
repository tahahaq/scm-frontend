import React from 'react';
import { Header } from 'semantic-ui-react';

export default () => {
  const style = {
    marginTop: '5px',
    fontSize: '60px'
  };

  return (
    <div>
      <Header className="header" style={style} as="h1" textAlign="center">
        Wine Tracker
      </Header>
    </div>
  );
};
