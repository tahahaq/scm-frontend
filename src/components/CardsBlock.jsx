import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const contentStyle = {
  marginTop: '40px',
  marginLeft: '35px',
  fontSize: '18px',
  textAlign: 'left',
  width: '350px'
};

const metaStyle = {
  marginLeft: '75px'
};

const CardsBlock = () => (
  <Card style={contentStyle}>
    <Card.Content>
      <Card.Header>
        <Icon size="big" name="dollar" style={{ marginRight: '20px' }} />
        Sold to Consumer
        <Card.Meta style={metaStyle}>3 April 2018, 16:04</Card.Meta>
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Card.Header>
        <Icon size="big" name="truck" style={{ marginRight: '25px' }} />
        Sold to Retailer
        <Card.Meta style={metaStyle}>3 April 2018, 16:00</Card.Meta>
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Card.Header>
        <Icon size="big" name="truck" style={{ marginRight: '25px' }} />
        Sold to Distributor
        <Card.Meta style={metaStyle}>3 April 2018, 16:02</Card.Meta>
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Card.Header>
        <Icon size="big" name="filter" style={{ marginRight: '25px' }} />
        Bottled
        <Card.Meta style={metaStyle}>3 April 2018, 15:59</Card.Meta>
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Card.Header>
        <Icon size="big" name="theme" style={{ marginRight: '25px' }} />
        Produced
        <Card.Meta style={metaStyle}>13 March 2018, 15:55</Card.Meta>
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Card.Header>
        <Icon size="big" name="leaf" style={{ marginRight: '25px' }} />
        Harvested
        <Card.Meta style={metaStyle}>3 April 2018, 16:04</Card.Meta>
      </Card.Header>
    </Card.Content>
  </Card>
);

export default CardsBlock;
