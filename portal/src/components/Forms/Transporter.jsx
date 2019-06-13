import React from 'react';
import { TextField, RaisedButton } from 'material-ui';

export default props => {
  return (
    <div>
      <TextField
        hintText="Nick co-operation"
        value={props.picked_from_coop}
        floatingLabelText="Picked from coop"
        floatingLabelFixed={true}
        onChange={props.handleChange('picked_from_coop')}
      />
      <br />
      <TextField
        value={props.delivered_to_retailer}
        hintText="Hans Fruit Shop"
        floatingLabelText="Delivered to retailer"
        floatingLabelFixed={true}
        onChange={props.handleChange('delivered_to_retailer')}
      />
      <br />
      <TextField
        value={props.peach_id}
        hintText="12"
        floatingLabelText="Peach id"
        floatingLabelFixed={true}
        onChange={props.handleChange('peach_id')}
      />
      <br />
      <TextField
        value={props.driver_name}
        hintText="John Travolta"
        floatingLabelText="Driver Name"
        floatingLabelFixed={true}
        onChange={props.handleChange('driver_name')}
      />
      <br />
      <TextField
        value={props.company}
        hintText="Nick Farm"
        floatingLabelText="Company"
        floatingLabelFixed={true}
        onChange={props.handleChange('company')}
      />
      <br />
      <TextField
        value={props.license_plate}
        hintText="CE1389"
        floatingLabelText="License Plate"
        floatingLabelFixed={true}
        onChange={props.handleChange('license_plate')}
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
