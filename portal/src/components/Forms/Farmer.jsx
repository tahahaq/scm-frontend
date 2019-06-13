import React from 'react';
import { TextField, RaisedButton } from 'material-ui';

export default props => {
  return (
    <div>
      <TextField
        value={props.peach_id}
        hintText="12"
        floatingLabelText="Peach id"
        floatingLabelFixed={true}
        onChange={props.handleChange('peach_id')}
      />
      <br />
      <TextField
        value={props.type_of_product}
        hintText="Fruit"
        floatingLabelText="Type of product"
        floatingLabelFixed={true}
        onChange={props.handleChange('type_of_product')}
      />
      <br />
      <TextField
        value={props.acres}
        hintText="1200"
        floatingLabelText="Acres"
        floatingLabelFixed={true}
        onChange={props.handleChange('acres')}
      />
      <br />
      <TextField
        value={props.num_of_trees}
        hintText="14334"
        floatingLabelText="Num of trees"
        floatingLabelFixed={true}
        onChange={props.handleChange('num_of_trees')}
      />
      <br />
      <TextField
        value={props.age}
        hintText="20"
        floatingLabelText="Age"
        floatingLabelFixed={true}
        onChange={props.handleChange('age')}
      />
      <br />
      <TextField
        value={props.kg_of_production}
        hintText="200000"
        floatingLabelText="Kg of production"
        floatingLabelFixed={true}
        onChange={props.handleChange('kg_of_production')}
      />
      <br />
      <TextField
        value={props.official_id}
        hintText="12n739h32"
        floatingLabelText="Official id"
        floatingLabelFixed={true}
        onChange={props.handleChange('official_id')}
      />
      <br />
      <TextField
        value={props.co_ordinates}
        hintText="35.186532, 33.422643"
        floatingLabelText="Co-ordinates"
        floatingLabelFixed={true}
        onChange={props.handleChange('co_ordinates')}
      />
      <br />
      <TextField
        value={props.vat}
        hintText="q220j20382-3fx"
        floatingLabelText="Vat"
        floatingLabelFixed={true}
        onChange={props.handleChange('vat')}
      />
      <br />
      <TextField
        value={props.first_name}
        hintText="Nick"
        floatingLabelText="First Name"
        floatingLabelFixed={true}
        onChange={props.handleChange('first_name')}
      />
      <br />
      <TextField
        value={props.last_name}
        hintText="Halt"
        floatingLabelText="Last Name"
        floatingLabelFixed={true}
        onChange={props.handleChange('last_name')}
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
        value={props.region}
        hintText="cyprus"
        floatingLabelText="Region"
        floatingLabelFixed={true}
        onChange={props.handleChange('region')}
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
      <TextField
        value={props.address}
        hintText="Random address"
        floatingLabelText="Address"
        floatingLabelFixed={true}
        onChange={props.handleChange('address')}
      />
      <br />
      <TextField
        value={props.farm_id}
        hintText="re3434te"
        floatingLabelText="Farm id"
        floatingLabelFixed={true}
        onChange={props.handleChange('farm_id')}
      />
      <br />
      <TextField
        value={props.city}
        hintText="Nicosia"
        floatingLabelText="City"
        floatingLabelFixed={true}
        onChange={props.handleChange('city')}
      />
      <br />
      <TextField
        hintText="75800"
        value={props.zip}
        floatingLabelText="Zip"
        floatingLabelFixed={true}
        onChange={props.handleChange('zip')}
      />
      <br />
      <TextField
        hintText="+123234343"
        value={props.phone}
        floatingLabelText="Phone"
        floatingLabelFixed={true}
        onChange={props.handleChange('phone')}
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
