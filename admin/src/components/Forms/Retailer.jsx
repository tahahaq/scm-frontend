import React from 'react';
import {TextField, RaisedButton} from 'material-ui'

export default props => {
  return (
    <div>
      <TextField
        hintText="Email"
        value={props.email}
        floatingLabelText="abc@gmail.com"
        floatingLabelFixed={true}
        onChange={props.handleChange('email')}
      />
      <br />
      <TextField
        hintText="******"
        value={props.password}
        floatingLabelText="Password"
        floatingLabelFixed={true}
        type="password"
        onChange={props.handleChange('password')}
      />
      <br />
      <TextField
        hintText="Hans Fruit Shop"
        floatingLabelText="Company"
        floatingLabelFixed={true}
        onChange={props.handleChange('company')}
      />
      <br/>
      <TextField
        hintText="d435643"
        floatingLabelText="Id"
        floatingLabelFixed={true}
        onChange={props.handleChange('id')}
      />
      <br/>
      <br />
      <RaisedButton
        label="submit"
        style={{ width: '35%' }}
        primary={true}
        onClick={props.createAccount}
      />
    </div>
  );
};
