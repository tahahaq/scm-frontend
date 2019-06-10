import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import './App.css';

import Header from './Header';
import Search from './Search';
import CardsBlock from './CardsBlock';
import Heading from './Heading';

import GMaps from './GMaps';

class App extends Component {
  componentDidMount() {
    fetch('http://35.196.122.116:8080/participant/food/12')
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }

  render() {
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
              <Search />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <CardsBlock />
            </Grid.Column>
            <Grid.Column>
              <Heading />
              <GMaps />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
