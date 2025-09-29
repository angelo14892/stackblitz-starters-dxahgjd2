import React, { useState } from 'react';
import Head from 'next/head';
import { Container, Paper, TextInput, PasswordInput, Button, Title, Text } from '@mantine/core';
import { useRouter } from 'next/router';
import { useApp } from '../context/AppContext';
import Link from 'next/link';

export default function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const { register } = useApp();
  const router = useRouter();

  const handle = () => {
    if (!email || !name) return alert('Completa nombre y email (prototipo)');
    register(name, email);
    router.push('/');
  };

  return (
    <>
      <Head><title>Registro - EventHub</title></Head>
      <Container size="sm" style={{ paddingTop: 40 }}>
        <Paper p="xl" radius="md" shadow="sm">
          <Title order={2}>Crear cuenta</Title>
          <Text size="sm" color="dimmed" style={{ marginBottom: 12 }}>
            Prototipo: ingresa nombre y email
          </Text>

          <TextInput
            label="Nombre"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            mt="sm"
          />
          <TextInput
            label="Email"
            placeholder="tucorreo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            mt="sm"
          />
          <PasswordInput label="Contraseña" placeholder="••••••" mt="sm" />

          <Button fullWidth mt="xl" onClick={handle}>
            Registrarme
          </Button>
          <Text size="sm" mt="md">
            ¿Ya tienes cuenta?{' '}
            <Link href="/login" style={{ color: '#1c7ed6', textDecoration: 'none' }}>
              Inicia sesión
            </Link>
          </Text>
        </Paper>
      </Container>
    </>
  );
}
