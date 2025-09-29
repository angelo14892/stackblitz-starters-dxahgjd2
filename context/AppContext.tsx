import React, { createContext, useContext, useState, ReactNode } from 'react';

type User = { name: string; email: string } | null;

type NotificationItem = {
  id: string;
  title: string;
  body?: string;
  createdAt: string;
};

type AppContextType = {
  user: User;
  login: (name: string, email: string) => void;
  register: (name: string, email: string) => void;
  logout: () => void;
  notifications: NotificationItem[];
  addNotification: (title: string, body?: string) => void;
  markAllRead: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(() => {
    try {
      const s = localStorage.getItem('eventhub_user');
      return s ? JSON.parse(s) : null;
    } catch {
      return null;
    }
  });

  const [notifications, setNotifications] = useState<NotificationItem[]>(() => {
    try {
      const s = localStorage.getItem('eventhub_notifications');
      return s ? JSON.parse(s) : [];
    } catch {
      return [];
    }
  });

  const persist = (key: string, value: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  };

  const login = (name: string, email: string) => {
    const u = { name, email };
    setUser(u);
    persist('eventhub_user', u);
    addNotification('Bienvenido', `Hola ${name}, has iniciado sesión`);
  };

  const register = (name: string, email: string) => {
    const u = { name, email };
    setUser(u);
    persist('eventhub_user', u);
    addNotification('Registro completo', `Cuenta creada: ${name}`);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('eventhub_user');
    addNotification('Sesión cerrada', 'Has cerrado sesión correctamente');
  };

  const addNotification = (title: string, body?: string) => {
    const item: NotificationItem = {
      id: String(Date.now()) + Math.random().toString(36).slice(2, 9),
      title,
      body,
      createdAt: new Date().toISOString()
    };
    const next = [item, ...notifications].slice(0, 50);
    setNotifications(next);
    persist('eventhub_notifications', next);
  };

  const markAllRead = () => {
    setNotifications([]);
    persist('eventhub_notifications', []);
  };

  return (
    <AppContext.Provider value={{ user, login, register, logout, notifications, addNotification, markAllRead }}>
      {children}
    </AppContext.Provider>
  );
}
