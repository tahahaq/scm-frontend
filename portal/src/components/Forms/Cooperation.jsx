import React from 'react';
import { TextField, RaisedButton } from 'material-ui';

export default props => {
  return (
    <div>
      <TextField
        value={props.weight_of_shipment}
        hintText="1200"
        floatingLabelText="Weight of shipment"
        floatingLabelFixed={true}
        onChange={props.handleChange('weight_of_shipment')}
      />
      <br />
      <TextField
        hintText="12"
        value={props.num_of_batch}
        floatingLabelText="Num of batch"
        floatingLabelFixed={true}
        onChange={props.handleChange('num_of_batch')}
      />
      <br />
      <TextField
        hintText="passed"
        value={props.quality_check}
        floatingLabelText="Quality check"
        floatingLabelFixed={true}
        onChange={props.handleChange('quality_check')}
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
        hintText="Nick Co-operation"
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
        value={props.zip}
        label="submit"
        style={{ width: '35%' }}
        primary={true}
        onClick={props.submitHandler}
      />
    </div>
  );
};
