import React from 'react';
import { Table } from 'semantic-ui-react';

export default props => {
  const { data } = props;
  let keys = [];
  if (data) {
    keys = Object.keys(data).sort();

    if (!isNaN(data.timestamp)) {
      const formatedDate = new Date(Number(data.timestamp) * 1000);
      data.timestamp = formatedDate.toDateString();
    }
  }

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Value</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {keys.map(key => {
          const property = key.replace(
            key.charAt(0),
            key.charAt(0).toUpperCase()
          );

          return (
            <Table.Row key={key}>
              <Table.Cell>{property.replace(/_/g, ' ')}</Table.Cell>
              <Table.Cell>{data[key]}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};
