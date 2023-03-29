import { Card, Timeline, Text, Avatar } from '@mantine/core';
import { IconCircleDashed, IconCheck } from '@tabler/icons-react';

export default () => (
  <Card withBorder radius="sm">
    <Card.Section withBorder inheritPadding py="sm">
      <h3 className="text-base font-medium m-0">Workflow</h3>
    </Card.Section>
    <Card.Section inheritPadding py="md">
      <Timeline color="teal" active={1} bulletSize={24} lineWidth={2}>
        <Timeline.Item bullet={<Avatar size="sm" radius="lg" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" />} title="New branch">
          <Text color="dimmed" size="sm">You&apos;ve created new branch from master</Text>
          <Text size="xs" mt={4}>2 hours ago</Text>
        </Timeline.Item>

        <Timeline.Item bullet={<IconCircleDashed size={12} />} title="Commits">
          <Text color="dimmed" size="sm">You&apos;ve pushed 23 commits to</Text>
          <Text size="xs" mt={4}>52 minutes ago</Text>
        </Timeline.Item>

        <Timeline.Item bullet={<IconCircleDashed size={12} />} title="Pull request">
          <Text color="dimmed" size="sm">You&apos;ve submitted a pull request</Text>
          <Text size="xs" mt={4}>34 minutes ago</Text>
        </Timeline.Item>

        <Timeline.Item bullet={<IconCheck size={12} />} title="Code review">
          <Text color="dimmed" size="sm">Robert Beak left a code review on your pull request</Text>
          <Text size="xs" mt={4}>12 minutes ago</Text>
        </Timeline.Item>
      </Timeline>
    </Card.Section>
  </Card>
);