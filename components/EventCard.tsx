import React from 'react';
import Link from 'next/link';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { Event } from '/data/events';

export default function EventCard({ event }: { event: Event }) {
  return (
    <Card shadow="sm" radius="md" withBorder style={{ width: 320 }}>
      <Card.Section>
        <Image src={event.image} height={160} alt={event.title} />
      </Card.Section>

      <Group position="apart" style={{ marginTop: 12, marginBottom: 6 }}>
        <Text weight={700}>{event.title}</Text>
        <Badge>{event.category}</Badge>
      </Group>

      <Text size="sm" color="dimmed" style={{ height: 48, overflow: 'hidden' }}>
        {event.description}
      </Text>

      <Group position="apart" mt="md">
        <Link href={`/events/${event.id}`} style={{ textDecoration: 'none' }}>
          <Button variant="light">Ver detalles</Button>
        </Link>
      </Group>
    </Card>
  );
}
