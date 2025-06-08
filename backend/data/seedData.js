// backend/data/seedData.js
export const mockCategories = [
  {
    id: 'cat-1',
    name: 'Electricians',
    imageUrl: '/icons/electrician.png',
  },
  {
    id: 'cat-2',
    name: 'Plumbers',
    imageUrl: '/icons/plumber.png',
  },
  {
    id: 'cat-3',
    name: 'AC/Cooler Repair',
    imageUrl: '/icons/ac-repair.png',
  },
  {
    id: 'cat-4',
    name: 'RO Service',
    imageUrl: '/icons/ro-service.png',
  },
  {
    id: 'cat-5',
    name: 'Carpenters',
    imageUrl: '/icons/carpenter.png',
  },
];
// backend/data/seedData.js


export const mockProfessionals = [
  {
    id: 'pro-1',
    name: 'Ramesh Kumar',
    phone: '+91 9876543210',
    category: 'cat-1', // Electrician
    isVerified: true,
  },
  {
    id: 'pro-2',
    name: 'Suresh Singh',
    phone: '+91 9123456789',
    category: 'cat-2', // Plumber
    isVerified: true,
  },
  // ... add the rest of your mock professionals
];