import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Container, Title, Image, Text, Button, Badge, Group, Paper } from '@mantine/core';
import Navbar from '../../components/Navbar';
import { events } from '../../data/events';
import { useApp } from '../../context/AppContext';
import { showNotification } from '@mantine/notifications';

export default function EventDetail() {
  const router = useRouter();
  const { id } = router.query;
  const ev = events.find((e) => e.id === id);
  const { addNotification, user } = useApp();

  if (!ev) {
    return (
      <>
        <Navbar />
        <Container size="md" style={{ paddingTop: 40 }}>
          <Text>Evento no encontrado</Text>
        </Container>
      </>
    );
  }

  const handleInscribirse = () => {
    // En prototipo, solo notificación + guardar en notificaciones globales
    addNotification('Inscripción exitosa', `Te inscribiste en ${ev.title}`);
    showNotification({
      title: 'Inscripción confirmada',
      message: `Te has inscrito en ${ev.title}`,
    });
    // Podríamos simular reducir cupos, etc.
  };

  return (
    <>
      <Head><title>{ev.title} - EventHub</title></Head>
      <Navbar />
      <Container size="md" style={{ paddingTop: 28 }}>
        <Paper p="md" shadow="xs">
          <Image src={ev.image} alt={ev.title} height={320} />
          <Group position="apart" mt="md">
            <div>
              <Title order={2}>{ev.title}</Title>
              <Text color="dimmed">{ev.date} • {ev.location}</Text>
            </div>
            <Badge color="grape">{ev.category}</Badge>
          </Group>

          <Text mt="md">{ev.description}</Text>

          <Button mt="lg" onClick={() => {
            if (!user) {
              // Si no está logueado, lo mandamos a login con query
              router.push('/login');
              return;
            }
            handleInscribirse();
          }}>
            Inscribirme
          </Button>
        </Paper>
      </Container>
    </>
  );
}
