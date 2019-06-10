import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import './App.css';

import Header from './Header';
import Search from './Search';
// import CardsBlock from './CardsBlock';
// import Heading from './Heading';
import Tabs from './Tabs';

// import GMaps from './GMaps';

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
    // console.log(typeof inputValue);
    fetch(`http://35.196.122.116:8080/participant/food/${inputValue}`)
      .then(response => response.json())
      .then(result => {
        const data = result.data.result;
        console.log(data);
        this.setState({ data });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { data } = this.state;
    // console.log(data);

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
        {/* <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <CardsBlock />
            </Grid.Column>
            <Grid.Column>
              <Heading />
              <GMaps />
            </Grid.Column>
          </Grid.Row>
        </Grid> */}
        <br />
        {!data && <Tabs data={{}} />}
        {data && <Tabs data={data} />}
      </div>
    );
  }
}

export default App;
