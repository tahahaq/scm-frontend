import React, { Component } from 'react';
import { post_request } from '../../utils/helper';
import { api_base_url } from '../../config/apiBaseUrl';
import swal from 'sweetalert';
import Cooperation from '../Forms/Cooperation';

export default class extends Component {
  state = {
    weight_of_shipment: '',
    num_of_batch: '',
    quality_check: '',
    peach_id: '',
    company: this.props.obj.company,
    id: this.props.obj.id
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  submitHandler = () => {
    const {
      weight_of_shipment,
      num_of_batch,
      quality_check,
      peach_id,
      company,
      id
    } = this.state;

    const data = {
      type: 'Coop',
      data: {
        coop: {
          weight_of_shipment,
          num_of_batch,
          quality_check,
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
      weight_of_shipment,
      num_of_batch,
      quality_check,
      peach_id,
      company,
      id
    } = this.state;

    const style = {
      marginLeft: '6%'
    };

    return (
      <div style={style}>
        <h1>Co-operation</h1>

        <Cooperation
          weight_of_shipment={weight_of_shipment}
          num_of_batch={num_of_batch}
          quality_check={quality_check}
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
