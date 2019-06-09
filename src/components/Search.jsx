import React from 'react';
import { Input, Button, Icon } from 'semantic-ui-react';

const style = {
  width: '550px'
};

const Search = () => (
  <Input
    style={style}
    size="huge"
    type="text"
    placeholder="Search..."
    action
    iconPosition="left"
  >
    <Icon name="search" />
    <input />
    <Button primary size="huge" type="submit">
      Search
    </Button>
  </Input>
);

export default Search;
