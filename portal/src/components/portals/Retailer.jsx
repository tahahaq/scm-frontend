import React, { Component } from 'react';
import { post_request } from '../../utils/helper';
import { api_base_url } from '../../config/apiBaseUrl';
import swal from 'sweetalert';
import Retailer from '../Forms/Retailer';

export default class extends Component {
  state = {
    vat: '',
    peach_id: '',
    company: this.props.obj.company,
    id: this.props.obj.id
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  submitHandler = () => {
    const { vat, peach_id, company, id } = this.state;

    const data = {
      type: 'Retailer',
      data: {
        retailer: {
          vat,
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
          text: 'Data has been successfully added to blockchain'
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
    const { vat, peach_id, company, id } = this.state;

    const style = {
      marginLeft: '6%'
    };

    return (
      <div style={style}>
        <h1>Retailer</h1>

        <Retailer
          vat={vat}
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
