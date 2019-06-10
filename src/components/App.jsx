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
          farm: data.farm,
          farmer: data.farmer,
          coop: data.coop,
          transporter: data.transporter,
          retailer: data.retailer
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { farm, farmer, coop, transporter, retailer } = this.state;

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
          farm={farm}
          farmer={farmer}
          coop={coop}
          transporter={transporter}
          retailer={retailer}
        />
      </div>
    );
  }
}

export default App;
