import React, { Component } from 'react';
import { Container, Accordion, Icon } from 'semantic-ui-react';

import Table from './Table';

export default class AccordionExampleFluid extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Container>
        <Accordion fluid styled>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            Coop
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <Table data={this.props.coop} />
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            Farm & Farmer
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <Table data={{ ...this.props.farm, ...this.props.farmer }} />
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            Retailer
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <Table data={this.props.retailer} />
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 3}
            index={3}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            Transporter
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
            <Table data={this.props.transporter} />
          </Accordion.Content>
        </Accordion>
      </Container>
    );
  }
}
