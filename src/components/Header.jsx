import React from 'react';
import { Header } from 'semantic-ui-react';

export default () => {
  const style = {
    marginTop: '8px',
    fontSize: '60px',
    marginBottom: '36px',
    fontWeight: 'bold'
  };

  return (
    <div>
      <Header className="header" style={style} as="h1">
        Wine Tracker
      </Header>
    </div>
  );
};
