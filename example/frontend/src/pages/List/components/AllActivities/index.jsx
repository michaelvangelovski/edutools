import { Menu, Button, Card, Table, Avatar, Badge } from '@mantine/core';
import { IconChevronRight, IconSettings, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight, IconExternalLink } from '@tabler/icons-react';
import { Fragment } from 'react';

export default () => (
  <Fragment>
    <Card withBorder radius="sm" pb="xl" className='overflow-visible'>
      <Card.Section withBorder py="md" px="lg">
        <h3 className="text-base font-medium m-0">All Activities</h3>
      </Card.Section>
      <Card.Section>
        <Table horizontalSpacing="lg">
          <thead>
            <tr className="[&>*]:!text-xs">
              <th>Start</th>
              <th>Activity</th>
              <th>Status</th>
              <th>Staff</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          <tr fontSize="md">
            <td className="text-gray-500">28 Nov 2019</td>
            <td>
              <div>
                Fix dart Sass compatibility (#29755)
              </div>
            </td>
            <td>
              <Badge color="orange" size="sm" variant="filled">Pending</Badge>
            </td>
            <td>
              <Avatar size="sm" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" />
            </td>
            <td>
              <Menu shadow="md" width={200} position="bottom">
                <Menu.Target>
                  <Button variant="default"> 
                    Actions
                    <IconChevronRight className="icon" strokeWidth={1} />
                  </Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Label>Application</Menu.Label>
                  <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
                  <Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item>
                  <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
                  <Menu.Divider />
                  <Menu.Label>Danger zone</Menu.Label>
                  <Menu.Item icon={<IconArrowsLeftRight size={14} />}>Transfer my data</Menu.Item>
                  <Menu.Item color="red" icon={<IconTrash size={14} />}>Delete my account</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </td>
          </tr>
          <tr>
            <td className="text-gray-500">26 Nov 2019</td>
            <td>
              <div>
                Update change-version.js (#29736)
              </div>
            </td>
            <td className="text-nowrap td-truncate">              
              <Badge color="green" size="sm" variant="filled">Approved</Badge>
            </td>
            <td className="td-truncate">
              <Avatar size="sm" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" />
            </td>
            <td className="td-truncate">
                <Menu shadow="md" width={200} position="bottom">
                  <Menu.Target>
                    <Button variant="default"> 
                      Actions
                      <IconChevronRight className="icon" strokeWidth={1} />
                    </Button>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Label>Application</Menu.Label>
                    <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
                    <Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item>
                    <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
                    <Menu.Divider />
                    <Menu.Label>Danger zone</Menu.Label>
                    <Menu.Item icon={<IconArrowsLeftRight size={14} />}>Transfer my data</Menu.Item>
                    <Menu.Item color="red" icon={<IconTrash size={14} />}>Delete my account</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Section>
    </Card>
  </Fragment>
);