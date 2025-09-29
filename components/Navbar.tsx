import React from 'react';
import Link from 'next/link';
import { Header, Group, Button, ActionIcon, Drawer, Avatar, Text, ScrollArea } from '@mantine/core';
import { IconBell, IconLogout, IconLogin } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { useApp } from '/context/AppContext';

export default function Navbar() {
  const [opened, { open, close }] = useDisclosure(false);
  const { user, logout, notifications, markAllRead } = useApp();

  return (
    <>
      <Header height={64} px="md" style={{ background: 'linear-gradient(90deg,#7e3aff,#5b21b6)', color: 'white' }}>
        <Group position="apart" style={{ height: '100%' }}>
          <Group>
            <Link href="/" style={{ textDecoration: 'none', color: 'white' }}>
              <Group spacing="sm">
                <Avatar radius="md" color="indigo">EH</Avatar>
                <div>
                  <Text weight={700} size="md">EventHub</Text>
                </div>
              </Group>
            </Link>
          </Group>
          <Group>
            <ActionIcon variant="transparent" onClick={open} title="Notificaciones" size="lg">
              <IconBell color="white" />
            </ActionIcon>

            {user ? (
              <>
                <Text size="sm" mr={6}>{user.name}</Text>
                <Button variant="white" color="dark" onClick={logout} leftIcon={<IconLogout />}>Salir</Button>
              </>
            ) : (
              <>
                <Link href="/login" style={{ textDecoration: 'none' }}>
                  <Button variant="white" color="dark" leftIcon={<IconLogin />}>Iniciar</Button>
                </Link>
                <Link href="/register" style={{ textDecoration: 'none' }}>
                  <Button variant="gradient" gradient={{ from: 'indigo', to: 'violet' }}>Registro</Button>
                </Link>
              </>
            )}
          </Group>
        </Group>
      </Header>

      <Drawer opened={opened} onClose={close} title="Notificaciones" padding="md" size="md">
        <Group position="apart" mb="xs">
          <Text weight={600}>Notificaciones</Text>
          <Button variant="subtle" onClick={() => { markAllRead(); }}>Marcar todas leídas</Button>
        </Group>

        <ScrollArea style={{ height: '60vh' }}>
          {notifications.length === 0 ? (
            <Text color="dimmed">No tienes notificaciones aún.</Text>
          ) : (
            notifications.map((n) => (
              <div key={n.id} style={{ padding: 12, borderBottom: '1px solid #eee' }}>
                <Text weight={600}>{n.title}</Text>
                <Text size="sm" color="dimmed">{n.body}</Text>
                <Text size="xs" color="dimmed">{new Date(n.createdAt).toLocaleString()}</Text>
              </div>
            ))
          )}
        </ScrollArea>
      </Drawer>
    </>
  );
}
