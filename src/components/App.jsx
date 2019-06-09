import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import './App.css';

import Header from './Header';
import Search from './Search';
import CardsBlock from './CardsBlock';
import Heading from './Heading';

class App extends Component {
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
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
