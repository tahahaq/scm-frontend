import React, { Component } from 'react';
import { post_request } from '../../utils/helper';
import { api_base_url } from '../../config/apiBaseUrl';
import swal from 'sweetalert';
import Transporter from '../Forms/Transporter';

export default class extends Component {
  state = {
    picked_from_coop: '',
    delivered_to_retailer: '',
    driver_name: this.props.obj.driver_name,
    license_plate: this.props.obj.license_plate,
    peach_id: '',
    company: this.props.obj.company,
    id: this.props.obj.id
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  submitHandler = () => {
    const {
      picked_from_coop,
      delivered_to_retailer,
      driver_name,
      license_plate,
      peach_id,
      company,
      id
    } = this.state;

    const data = {
      type: 'Transporter',
      data: {
        transporter: {
          picked_from_coop,
          delivered_to_retailer,
          driver_name,
          license_plate,
          peach_id,
          company,
          id,
          timestamp: Date.now() / 1000
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
      picked_from_coop,
      delivered_to_retailer,
      driver_name,
      license_plate,
      peach_id,
      company,
      id
    } = this.state;

    const style = {
      marginLeft: '6%'
    };

    return (
      <div style={style}>
        <h1>Transporter</h1>

        <Transporter
          picked_from_coop={picked_from_coop}
          delivered_to_retailer={delivered_to_retailer}
          driver_name={driver_name}
          license_plate={license_plate}
          peach_id={peach_id}
          company={company}
          id={id}
          handleChange={this.handleChange}
          submitHandler={this.submitHandler}
        />

        <br />
        <br />
      </div>
    );
  }
}
