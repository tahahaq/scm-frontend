import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const contentStyle = {
  marginTop: '50px',
  marginLeft: '35px',
  fontSize: '20px',
  textAlign: 'center'
};

const CardsBlock = () => (
  <Card style={contentStyle}>
    <Card.Content>
      <Card.Header>
        <Icon name="dollar" />
        Sold to Consumer
      </Card.Header>
      <Card.Description>3 April 2018, 16:04</Card.Description>
    </Card.Content>
    <Card.Content>
      <Card.Header>
        <Icon name="truck" />
        Sold to Retailer
      </Card.Header>
      <Card.Description>3 April 2018, 16:00</Card.Description>
    </Card.Content>
    <Card.Content>
      <Card.Header>
        <Icon name="truck" />
        Sold to Distributor
      </Card.Header>
      <Card.Description>3 April 2018, 16:02</Card.Description>
    </Card.Content>
    <Card.Content>
      <Card.Header>
        <Icon name="filter" />
        Bottled
      </Card.Header>
      <Card.Description>3 April 2018, 15:59</Card.Description>
    </Card.Content>
    <Card.Content>
      <Card.Header>
        <Icon name="theme" />
        Produced
      </Card.Header>
      <Card.Description>13 March 2018, 15:55</Card.Description>
    </Card.Content>
    <Card.Content>
      <Card.Header>
        <Icon name="leaf" />
        Harvested
      </Card.Header>
      <Card.Description>3 April 2018, 16:04</Card.Description>
    </Card.Content>
  </Card>
);

export default CardsBlock;
