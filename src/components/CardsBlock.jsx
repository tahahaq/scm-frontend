import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const contentStyle = {
  marginTop: '45px',
  marginLeft: '35px',
  fontSize: '18px',
  textAlign: 'left',
  width: '350px'
};

const CardsBlock = () => (
  <Card style={contentStyle}>
    <Card.Content>
      <Card.Header>
        <Icon name="dollar" />
        Sold to Consumer
        <Card.Meta>3 April 2018, 16:04</Card.Meta>
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Card.Header>
        <Icon name="truck" />
        Sold to Retailer
        <Card.Meta>3 April 2018, 16:00</Card.Meta>
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Card.Header>
        <Icon name="truck" />
        Sold to Distributor
        <Card.Meta>3 April 2018, 16:02</Card.Meta>
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Card.Header>
        <Icon name="filter" style={{ marginRight: '25px' }} />
        Bottled
        <Card.Meta>3 April 2018, 15:59</Card.Meta>
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Card.Header>
        <Icon name="theme" />
        Produced
        <Card.Meta>13 March 2018, 15:55</Card.Meta>
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Card.Header>
        <Icon name="leaf" />
        Harvested
        <Card.Meta>3 April 2018, 16:04</Card.Meta>
      </Card.Header>
    </Card.Content>
  </Card>
);

export default CardsBlock;
