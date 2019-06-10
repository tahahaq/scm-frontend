import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import './App.css';

import Header from './Header';
import Search from './Search';
import Tabs from './Tabs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };

    this.getData = this.getData.bind(this);
  }

  getData(inputValue) {
    // console.log(inputValue);

    fetch(`http://35.196.122.116:8080/participant/food/${inputValue}`)
      .then(response => response.json())
      .then(result => {
        const data = result.data.result;
        console.log(data);

        this.setState({
          data,
          coop: data.coop,
          farm: data.farm,
          farmer: data.farmer,
          retailer: data.retailer,
          transporter: data.transporter
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { coop, farm, farmer, retailer, transporter } = this.state;

    return (
      <div>
        <Grid columns={1} textAlign="center">
          <Grid.Row>
            <Grid.Column>
              <Header />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Search getData={this.getData} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br />
        <br />
        <Tabs
          coop={coop}
          farm={farm}
          farmer={farmer}
          retailer={retailer}
          transporter={transporter}
        />
      </div>
    );
  }
}

export default App;
