import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react';

import Header from './Header';
import Search from './Search';
import Tabs from './Tabs';
import GMaps from './GMaps';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      latitude: 35.186532,
      longitude: 33.422643
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    const path = window.location.pathname;
    const hash = window.location.hash;

    if (path.length > 1) {
      this.getData(path.replace('/', ''));
    } else if (hash.length > 0) {
      this.getData(hash.replace('#', ''));
    }
  }

  getData(inputValue) {
    // console.log(inputValue);

    fetch(`http://35.196.122.116:8080/participant/food/${inputValue}`)
      .then(response => response.json())
      .then(result => {
        const data = result.data.result;
        // console.log(data);

        this.setState({
          data,
          farm: data.farm,
          farmer: data.farmer,
          coop: data.coop,
          transporter: data.transporter,
          retailer: data.retailer,
          latitude: Number(data.farm.co_ordinates.split(', ')[0]),
          longitude: Number(data.farm.co_ordinates.split(', ')[1])
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const {
      farm,
      farmer,
      coop,
      transporter,
      retailer,
      latitude,
      longitude
    } = this.state;

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
              <Grid.Column>
                <h1>The origin of fruit</h1>
                <GMaps latitude={latitude} longitude={longitude} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
