import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import './App.css';

import Header from './Header';
import Search from './Search';

class App extends Component {
  render() {
    return (
      <div>
        <Grid columns={2} textAlign="center">
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
      </div>
    );
  }
}

export default App;
