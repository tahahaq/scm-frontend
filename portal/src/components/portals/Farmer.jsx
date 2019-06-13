import React, { Component } from 'react';
import { post_request } from '../../utils/helper';
import { api_base_url } from '../../config/apiBaseUrl';
import swal from 'sweetalert';
import Farmer from '../Forms/Farmer';

export default class extends Component {
  state = {
    peach_id: '',
    type_of_product: '',
    acres: '',
    num_of_trees: '',
    age: '',
    kg_of_production: '',
    official_id: '',
    co_ordinates: '',
    vat: '',
    first_name: this.props.obj.first_name,
    last_name: this.props.obj.last_name,
    company: this.props.obj.company,
    region: this.props.obj.region,
    id: this.props.obj.id,
    address: this.props.obj.address,
    farm_id: this.props.obj.farm_id,
    city: this.props.obj.city,
    zip: this.props.obj.zip,
    phone: this.props.obj.phone
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  submitHandler = () => {
    const {
      peach_id,
      type_of_product,
      acres,
      num_of_trees,
      age,
      kg_of_production,
      official_id,
      co_ordinates,
      vat,
      first_name,
      last_name,
      company,
      region,
      id,
      address,
      farm_id,
      city,
      zip,
      phone
    } = this.state;

    const data = {
      type: 'Farm',
      data: {
        farm: {
          peach_id,
          type_of_product,
          city,
          region,
          acres,
          num_of_trees,
          age,
          kg_of_production,
          official_id,
          co_ordinates
        },
        farmer: {
          peach_id,
          company,
          id,
          timestamp: Date.now() / 1000,
          name: `${first_name} ${last_name}`,
          address,
          farm_id,
          city,
          zip,
          phone,
          vat
        }
      }
    };

    post_request(api_base_url + '/participant/request', data)
      .then(res => {
        // console.log(res);
        swal({
          text: 'Your request has been send for confirmation!'
        });
      })
      .catch(err => {
        swal({
          title: 'Error 404',
          text: err.message,
          icon: 'error',
          buttons: true,
          dangerMode: true
        });
      })
      .catch(err => {
        swal({
          title: 'Error 404',
          text: err.message,
          icon: 'error',
          buttons: true,
          dangerMode: true
        });
      });
  };

  // Rendering html to the screen
  render() {
    const {
      peach_id,
      type_of_product,
      acres,
      num_of_trees,
      age,
      kg_of_production,
      official_id,
      co_ordinates,
      vat,
      first_name,
      last_name,
      company,
      region,
      id,
      address,
      farm_id,
      city,
      zip,
      phone
    } = this.state;

    const style = {
      marginLeft: '6%'
    };

    return (
      <div style={style}>
        <h1>Farmer</h1>

        <Farmer
          peach_id={peach_id}
          type_of_product={type_of_product}
          acres={acres}
          num_of_trees={num_of_trees}
          age={age}
          kg_of_production={kg_of_production}
          official_id={official_id}
          co_ordinates={co_ordinates}
          vat={vat}
          first_name={first_name}
          last_name={last_name}
          company={company}
          region={region}
          id={id}
          address={address}
          farm_id={farm_id}
          city={city}
          zip={zip}
          phone={phone}
          handleChange={this.handleChange}
          submitHandler={this.submitHandler}
        />

        <br />
        <br />
      </div>
    );
  }
}
