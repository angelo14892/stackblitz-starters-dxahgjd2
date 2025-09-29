import React, { useState } from 'react';
import Head from 'next/head';
import {
  Container,
  Grid,
  Title,
  Text,
  TextInput,
  Select,
  Group,
  Space,
} from '@mantine/core';
import Navbar from '../components/Navbar';
import EventCard from '../components/EventCard';
import { events as allEvents } from '../data/events';

export default function Home() {
  // estados de búsqueda y filtros
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Todas las categorías');
  const [dateFilter, setDateFilter] = useState('Fecha');

  // aplicar filtros
  const filtered = allEvents.filter((ev) => {
    // búsqueda en título, descripción y categoría
    const matchesSearch =
      ev.title.toLowerCase().includes(search.toLowerCase()) ||
      ev.description.toLowerCase().includes(search.toLowerCase()) ||
      ev.category.toLowerCase().includes(search.toLowerCase());

    // categoría
    const matchesCategory =
      category === 'Todas las categorías' || ev.category === category;

    // fecha (ejemplo simple: solo filtra "Próximas" = futuras a hoy)
    let matchesDate = true;
    if (dateFilter === 'Próximas') {
      matchesDate = new Date(ev.date) >= new Date();
    } else if (dateFilter === 'Mes siguiente') {
      const now = new Date();
      const nextMonth = now.getMonth() + 1;
      matchesDate =
        new Date(ev.date).getMonth() === nextMonth &&
        new Date(ev.date).getFullYear() === now.getFullYear();
    }

    return matchesSearch && matchesCategory && matchesDate;
  });

  return (
    <>
      <Head>
        <title>EventHub - Descubre eventos</title>
      </Head>

      <Navbar />

      <div className="hero-bg" style={{ padding: 80, textAlign: 'center' }}>
        <Container size="lg">
          <Title order={1} style={{ fontSize: 48, marginBottom: 12 }}>
            Descubre Eventos <span style={{ fontWeight: 800 }}>Increíbles</span>
          </Title>
          <Text size="lg" style={{ marginBottom: 20 }}>
            Conecta con experiencias únicas, aprende de los mejores y forma parte
            de una comunidad vibrante.
          </Text>

          <Group
            position="center"
            spacing="sm"
            sx={{ maxWidth: 900, margin: '0 auto' }}
          >
            <TextInput
              placeholder="Buscar eventos..."
              style={{ flex: 1 }}
              value={search}
              onChange={(e) => setSearch(e.currentTarget.value)}
            />
            <Select
              data={[
                'Todas las categorías',
                'Tecnología',
                'Educación',
                'Negocios',
                'Arte',
                'Música',
                'Gaming',
                'Gastronomía',
                'Deportes',
              ]}
              value={category}
              onChange={(val) => setCategory(val || 'Todas las categorías')}
            />
            <Select
              data={['Fecha', 'Próximas', 'Mes siguiente']}
              value={dateFilter}
              onChange={(val) => setDateFilter(val || 'Fecha')}
            />
          </Group>
        </Container>
      </div>

      <Container size="lg" style={{ paddingTop: 28 }}>
        <Group position="apart">
          <Title order={2}>Eventos Disponibles</Title>
          <Text color="dimmed">{filtered.length} eventos encontrados</Text>
        </Group>

        <Space h="md" />
        <Grid>
          {filtered.map((ev) => (
            <Grid.Col key={ev.id} xs={12} sm={6} md={4}>
              <EventCard event={ev} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </>
  );
}
