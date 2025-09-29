import React, { useState } from 'react';
import Head from 'next/head';
import { Container, Paper, TextInput, PasswordInput, Button, Title, Text } from '@mantine/core';
import { useRouter } from 'next/router';
import { useApp } from '../context/AppContext';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const { login } = useApp();
  const router = useRouter();

  const handle = () => {
    if (!email || !name) return alert('Completa nombre y email (prototipo)');
    login(name, email);
    router.push('/');
  };

  return (
    <>
      <Head><title>Iniciar Sesión - EventHub</title></Head>
      <Container size="sm" style={{ paddingTop: 40 }}>
        <Paper p="xl" radius="md" shadow="sm">
          <Title order={2}>Iniciar Sesión</Title>
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

          <Button fullWidth mt="xl" onClick={handle}>Entrar</Button>

          <Text size="sm" mt="md">
            ¿No tienes cuenta?{' '}
            <Link
              href="/register"
              style={{ color: '#1c7ed6', textDecoration: 'none' }}
            >
              Regístrate
            </Link>
          </Text>
        </Paper>
      </Container>
    </>
  );
}

