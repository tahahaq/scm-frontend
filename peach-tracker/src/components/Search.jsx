import React from 'react';
import { Input, Button, Icon } from 'semantic-ui-react';

const style = {
  width: '550px'
};

let inputValue;
const setInputValue = value => {
  inputValue = value;
};

const Search = props => (
  <Input
    style={style}
    size="huge"
    type="text"
    placeholder="Search..."
    action
    iconPosition="left"
  >
    <Icon name="search" />
    <input onInput={e => setInputValue(e.target.value)} />
    <Button
      primary
      onClick={() => props.getData(inputValue)}
      size="huge"
      type="submit"
    >
      Search
    </Button>
  </Input>
);

export default Search;
