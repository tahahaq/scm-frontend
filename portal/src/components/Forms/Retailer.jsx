import React from 'react';
import { TextField, RaisedButton } from 'material-ui';

export default props => {
  return (
    <div>
      <TextField
        hintText="18210"
        value={props.vat}
        floatingLabelText="Vat"
        floatingLabelFixed={true}
        onChange={props.handleChange('vat')}
      />
      <br />
      <TextField
        hintText="12"
        value={props.peach_id}
        floatingLabelText="Peach id"
        floatingLabelFixed={true}
        onChange={props.handleChange('peach_id')}
      />
      <br />
      <TextField
        value={props.company}
        hintText="Hans Fruit Shop"
        floatingLabelText="Company"
        floatingLabelFixed={true}
        onChange={props.handleChange('company')}
      />
      <br />
      <TextField
        value={props.id}
        hintText="d435643"
        floatingLabelText="Id"
        floatingLabelFixed={true}
        onChange={props.handleChange('id')}
      />
      <br />
      <br />
      <RaisedButton
        label="submit"
        style={{ width: '35%' }}
        primary={true}
        onClick={props.submitHandler}
      />
    </div>
  );
};
