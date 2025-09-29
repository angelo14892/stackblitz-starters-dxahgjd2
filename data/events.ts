export type Event = {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  description: string;
  image: string;
  seats: number;
};

export const events: Event[] = [
  {
    id: '1',
    title: 'Tech Summit 2025',
    category: 'Tecnología',
    date: '2025-06-20',
    location: 'Auditorio Central',
    description:
      'Conferencia anual sobre tecnologías emergentes: AI, ML, Web3 y más. Presentaciones, paneles y networking.',
    image:
      '/techsummit.jpg',
    seats: 120
  },
  {
    id: '2',
    title: 'Educación del Futuro',
    category: 'Educación',
    date: '2025-07-10',
    location: 'Centro de Convenciones',
    description:
      'Encuentro para docentes y profesionales, con talleres prácticos sobre metodologías activas y tecnología educativa.',
    image:
      'https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=1400&q=60',
    seats: 80
  },
  {
    id: '3',
    title: 'Foro de Negocios & Startups',
    category: 'Negocios',
    date: '2025-08-02',
    location: 'Hotel Plaza',
    description:
      'Paneles de inversionistas, pitch de startups y mesas redondas con líderes del ecosistema emprendedor.',
    image:
      'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1400&q=60',
    seats: 200
  },
  {
    id: '4',
    title: 'Hackathon de Innovación',
    category: 'Tecnología',
    date: '2025-12-15',
    location: 'Campus universidad ibague',
    description: 'Un desafío de 24 horas donde equipos multidisciplinarios crean prototipos innovadores que pueden cambiar industrias enteras.',
    image: '/hackaton.jpg',
    seats: 200
  },
  {
    id: '5',
    title: 'Festival de Música Indie',
    category: 'Música',
    date: '2025-12-20',
    location: 'Parque Central',
    description: 'Un festival al aire libre con las mejores bandas emergentes de la escena indie de Latinoamérica.',
    image: '/festival musica indie.jpg',
    seats: 200
  },
  {
    id: '6',
    title: 'Taller de Fotografía Creativa',
    category: 'Arte',
    date: '2025-11-15',
    location: 'Centro Cultural La Estación, Bogotá',
    description: 'Aprende nuevas técnicas de fotografía urbana y creativa en un espacio diseñado para inspirar a artistas visuales.',
    image: '/taller fotografia.jpg',
    seats: 200
  },
  {
    id: '7',
    title: 'Cumbre de Negocios Sostenibles',
    category: 'Negocios',
    date: '2025-10-1',
    location: 'Hotel Santa Rosa',
    description: 'Expertos internacionales se reúnen para compartir estrategias de crecimiento empresarial con enfoque en sostenibilidad.',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80/hackaton.jpg',
    seats: 200
  },
  {
    id: '8',
    title: 'Feria de Universidades',
    category: 'Educación',
    date: '2025-10-25',
    location: 'Expo Center',
    description: 'Las principales universidades de la región presentan sus programas académicos, becas y oportunidades de intercambio.',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=80',
    seats: 200
  },
  {
    id: '9',
    title: 'Cata de Vinos y Gastronomía',
    category: 'Gastronomía',
    date: '2025-11-23',
    location: 'Asienda el sol',
    description: 'Una experiencia sensorial con degustación de vinos seleccionados y platillos gourmet de chefs reconocidos.',
    image: 'https://images.unsplash.com/photo-1690986535140-dc095e75b726?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2luZSUyMHRhc3Rpbmd8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000',
    seats: 200
  }
];
