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
        hintText="Nick"
        floatingLabelText="First Name"
        floatingLabelFixed={true}
        onChange={props.handleChange('first_name')}
      />
      <br />
      <TextField
        hintText="Halt"
        floatingLabelText="Last Name"
        floatingLabelFixed={true}
        onChange={props.handleChange('last_name')}
      />
      <br/>
      <TextField
        hintText="Nick Farm"
        floatingLabelText="Company"
        floatingLabelFixed={true}
        onChange={props.handleChange('company')}
      />
      <br/>
      <TextField
        hintText="cyprus"
        floatingLabelText="Region"
        floatingLabelFixed={true}
        onChange={props.handleChange('region')}
      />
      <br/>
      <TextField
        hintText="d435643"
        floatingLabelText="Id"
        floatingLabelFixed={true}
        onChange={props.handleChange('id')}
      />
      <br/>
      <TextField
        hintText="Random address"
        floatingLabelText="Address"
        floatingLabelFixed={true}
        onChange={props.handleChange('address')}
      />
      <br/>
      <TextField
        hintText="re3434te"
        floatingLabelText="Farm id"
        floatingLabelFixed={true}
        onChange={props.handleChange('farm_id')}
      />
      <br/>
      <TextField
        hintText="Nicosia"
        floatingLabelText="City"
        floatingLabelFixed={true}
        onChange={props.handleChange('city')}
      />
      <br/>
      <TextField
        hintText="75800"
        floatingLabelText="Zip"
        floatingLabelFixed={true}
        onChange={props.handleChange('zip')}
      />
      <br/>
      <TextField
        hintText="+123234343"
        floatingLabelText="Phone"
        floatingLabelFixed={true}
        onChange={props.handleChange('phone')}
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
