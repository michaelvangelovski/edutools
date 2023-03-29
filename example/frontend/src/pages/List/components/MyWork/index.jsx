import { Card, Table } from '@mantine/core';

export default () => (
  <Card withBorder radius="sm" pb="xl">
    <Card.Section withBorder py="md" px="lg">
      <h3 className="text-base font-medium m-0">My Work</h3>
    </Card.Section>
    <Card.Section>
      <Table horizontalSpacing="lg">
        <tbody>
          <tr>
            <td>Instagram</td>
            <td>3,550</td>
          </tr>
          <tr>
            <td>Twitter</td>
            <td>1,798</td>
          </tr>
          <tr>
            <td>Facebook</td>
            <td>1,245</td>
          </tr>
        </tbody>
      </Table>
    </Card.Section>
  </Card>
);