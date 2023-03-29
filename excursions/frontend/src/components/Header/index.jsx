import { Fragment } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Center, Tabs, Container, Avatar, Menu, UnstyledButton, Group, Text, Input } from '@mantine/core';
import { IconTable, IconCalendar, IconSearch, IconShieldHalfFilled, IconLogout } from '@tabler/icons-react';


export default () => {
  let navigateTo = useNavigate();
  let location = useLocation();
  return (
  <Fragment>
    <header className="block bg-slate-900 py-2 text-white">
      <Container size="xl" className="flex justify-between w-100">
        <h1 className="flex text-base items-center text-white m-0">
          <Link to="/" className="hover:no-underline">
            <Center><IconShieldHalfFilled size={36} strokeWidth={2} className="mr-3" /> Some School</Center>
          </Link>
        </h1>
        <Menu position="bottom-end" width={200} shadow="md" className="order-md-last">
          <Menu.Target>
            <UnstyledButton> 
              <Group>
                <Avatar size="sm" radius="md" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" />
                <Text size="sm" color="white">Jonah Kuna</Text>
              </Group>
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item icon={<IconLogout size={14} />}>Logout</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Container>
    </header>

    <header className="bg-white border-b block">
      <Container size="xl" className="flex justify-between w-100">
        <Tabs value={location.pathname} onTabChange={(value) => navigateTo(`${value}`)}>
          <Tabs.List>
            <Tabs.Tab value="/" icon={<IconTable size={20} stroke="1" />} py="md">Dashboard</Tabs.Tab>
            {! <Tabs.Tab value="/form" icon={<IconCalendar size={20} stroke="1" />} py="md">Calendar</Tabs.Tab> }
          </Tabs.List>
        </Tabs>
        <Center>
          <Input
            icon={<IconSearch size={20} />}
            placeholder="Search..."
          />
        </Center>
      </Container>
    </header>


  </Fragment>
  );

}