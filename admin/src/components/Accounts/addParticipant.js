import React, { Component } from 'react';
import { RaisedButton, Snackbar, TextField } from 'material-ui';
import { Container, Row, Col } from 'react-grid-system';
import SidebarComponent from '../sidebar';
import { auth, db } from '../../config/firebaseConfiguration';
import swal from 'sweetalert';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Farmer from '../Forms/Farmer';
import Cooperation from '../Forms/Cooperation';
import Transporter from '../Forms/Transporter';
import Retailer from '../Forms/Retailer';

export default class Showroom extends Component {
  // Saving values that user inputs
  state = {
    open: false,
    participant: '',
    first_name: '',
    last_name: '',
    company: '',
    region: '',
    id: '',
    address: '',
    farm_id: '',
    city: '',
    zip: '',
    phone: '',
    email: '',
    password: '',
    driver_name: '',
    license_plate: ''
  };

  handleClick = () => {
    this.setState({
      open: true
    });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  // Here we are creating the accounts for participants
  createAccount = async () => {
    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        swal({
          title: 'Confirmation',
          text: 'Account created successfully',
          icon: 'success',
          dangerMode: false
        }).then(res => {
          this.setState({
            email: '',
            password: ''
          });
        });

        const {
          participant,
          first_name,
          last_name,
          company,
          region,
          id,
          address,
          farm_id,
          city,
          zip,
          phone,
          email,
          password,
          driver_name,
          license_plate
        } = this.state;

        let setData;
        if (participant === 'farmer') {
          setData = {
            participant,
            first_name,
            last_name,
            company,
            region,
            id,
            address,
            farm_id,
            city,
            zip,
            phone,
            email,
            password
          };
        } else if (participant === 'cooperation') {
          setData = {
            participant,
            company,
            id,
            email,
            password
          };
        } else if (participant === 'transporter') {
          setData = {
            participant,
            company,
            driver_name,
            license_plate,
            id,
            email,
            password
          };
        } else if (participant === 'retailer') {
          setData = {
            participant,
            company,
            id,
            email,
            password
          };
        }

        let uid = auth.currentUser.uid;
        setData.uid = uid;
        // console.log(setData);

        db.ref('users/' + uid)
          .set(setData)
          .then(res => {})
          .catch(err => alert(err.message));
      })
      .catch(err => {
        swal({
          title: 'Something went wrong',
          text: err.message,
          icon: 'error',
          dangerMode: true
        });
      });
  };

  handleSelectChange = ev => {
    console.log(ev.target.value);
    this.setState({
      participant: ev.target.value
    });
  };

  // Rendering html to the screen
  render() {
    const {
      participant,
      first_name,
      last_name,
      company,
      region,
      id,
      address,
      farm_id,
      city,
      zip,
      phone,
      email,
      password,
      driver_name,
      license_plate
    } = this.state;

    let isFarmer = false;
    let isCooperation = false;
    let isTransporter = false;
    let isRetailer = false;

    if (participant === 'farmer') {
      isFarmer = true;
    } else if (participant === 'cooperation') {
      isCooperation = true;
    } else if (participant === 'transporter') {
      isTransporter = true;
    } else if (participant === 'retailer') {
      isRetailer = true;
    }

    return (
      <Container style={{ margin: 0, padding: 0 }}>
        <Row style={{ margin: 0, padding: 0, height: '96vh' }}>
          <Col sm={4}>
            <SidebarComponent />
          </Col>
          <Col sm={8}>
            <h1>Add Participant</h1>
            <br />
            <FormControl style={{ width: '35%' }}>
              <Select
                value={this.state.participant}
                onChange={this.handleSelectChange}
                displayEmpty
                // className={classes.selectEmpty}
              >
                <MenuItem value="" disabled>
                  Select Participant
                </MenuItem>
                <MenuItem value="farmer">Farmer</MenuItem>
                <MenuItem value="cooperation">Co-operation</MenuItem>
                <MenuItem value="transporter">Transporter</MenuItem>
                <MenuItem value="retailer">Retailer</MenuItem>
              </Select>
              <FormHelperText>Select Participant Type</FormHelperText>
            </FormControl>
            <br />
            {isFarmer && (
              <Farmer
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
                email={email}
                password={password}
                handleChange={this.handleChange}
                createAccount={this.createAccount}
              />
            )}
            {isCooperation && (
              <Cooperation
                company={company}
                id={id}
                email={email}
                password={password}
                handleChange={this.handleChange}
                createAccount={this.createAccount}
              />
            )}
            {isTransporter && (
              <Transporter
                company={company}
                driver_name={driver_name}
                id={id}
                license_plate={license_plate}
                email={email}
                password={password}
                handleChange={this.handleChange}
                createAccount={this.createAccount}
              />
            )}
            {isRetailer && (
              <Retailer
                company={company}
                id={id}
                email={email}
                password={password}
                handleChange={this.handleChange}
                createAccount={this.createAccount}
              />
            )}
            <br />
            <br />
          </Col>
        </Row>
      </Container>
    );
  }
}
