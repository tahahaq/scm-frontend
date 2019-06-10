import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import './App.css';

import Header from './Header';
import Search from './Search';
import Tabs from './Tabs';
import GMaps from './GMaps';

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
        <Container textAlign="center">
          <Header />
          <Search getData={this.getData} />
          <br />
          <br />
          <br />
        </Container>
        <Container>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Tabs
                  farm={farm}
                  farmer={farmer}
                  coop={coop}
                  transporter={transporter}
                  retailer={retailer}
                />
              </Grid.Column>
              <Grid.Column>{/* <GMaps /> */}</Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
