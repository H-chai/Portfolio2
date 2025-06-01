import { create } from 'zustand';

export const useStore = create((set, get) => ({
  projects: [
    {
      id: '1',
      name: 'Holidaze',
      goal: 'The goal of Holidaze is to create a user-friendly accommodation booking platform where users can explore venues, view details, and make reservations. Admins can manage listings and bookings through a dedicated dashboard.',
      tags: ['front-end', 'design'],
      technologies: [
        'React',
        'React Router',
        'Vite',
        'Tailwind CSS',
        'Fetch API (Data Fetching)',
      ],
      year: '2025',
      registration: {
        username: 'demo_user_1',
        email: 'demo_user_1@stud.noroff.no',
        password: 'Password123',
      },
      url: 'https://holidaze-venue-booking.netlify.app/',
      github: 'https://github.com/H-chai/Holidaze',
      medias: [
        {
          url: '/Holidaze-fullScreen.jpg',
          alt: 'Holidaze home',
        },
        {
          url: '/Holidaze-venue.jpg',
          alt: 'Holidaze venue page',
        },
        {
          url: '/Holidaze-venue-responsive.jpg',
          alt: 'Holidaze venue mobile page',
        },
        {
          url: '/Holidaze-profile-responsive.jpg',
          alt: 'Holidaze profile mobile page',
        },
      ],
    },
    {
      id: '2',
      name: 'CrediBid',
      goal: 'CredBid is an auction platform where users can list items for bidding and place bids on items listed by others. Each new user receives 1000 credits to use for bidding, and credits can be earned by successfully auctioning items. Non-registered users can browse listings but cannot place bids.',
      tags: ['front-end', 'design'],
      technologies: [
        'JavaScript',
        'Vite',
        'HTML',
        'CSS (Tailwind)',
        'Fetch API (Data Fetching)',
      ],
      year: '2024',
      registration: {
        username: 'demo_user_1',
        email: 'demo_user_1@stud.noroff.no',
        password: 'Password123',
      },
      url: 'https://credibid-auction.netlify.app/',
      github: 'https://github.com/H-chai/Auction-semester-project',
      reflections: ['Move API key to environment variables.'],
      medias: [
        {
          url: '/CrediBid-fullScreen.jpg',
          alt: 'CrediBid home',
        },
        {
          url: '/CrediBid-listing.jpg',
          alt: 'CrediBid listing page',
        },
        {
          url: '/CrediBid-listing-responsive.jpg',
          alt: 'CrediBid mobile listing page',
        },
        {
          url: '/CrediBid-create-page-responsive.jpg',
          alt: 'eCom mobile create listing page',
        },
      ],
    },
    {
      id: '3',
      name: 'eCom',
      goal: 'This is an e-commerce store built using React. The store allows users to browse products, view product details, add products to their cart, and complete a checkout process. Users can also contact the store via a contact form with validation.',
      tags: ['front-end', 'design'],
      technologies: [
        'React',
        'React Router',
        'CSS Modules',
        'Fetch API (Data Fetching)',
      ],
      year: '2025',
      url: 'https://reactecom-project.netlify.app/',
      github: 'https://github.com/H-chai/react-ecom',
      reflections: [
        'Self-Closing JSX Components.',
        'Removed console.log() Statements',
        'Replaced let with const',
      ],
      medias: [
        {
          url: '/eCom-fullScreen.jpg',
          alt: 'eCom home',
        },
        {
          url: '/eCom-product.jpg',
          alt: 'eCom product page',
        },
        {
          url: '/eCom-product-responsive.jpg',
          alt: 'eCom mobile product page',
        },
        {
          url: '/eCom-cart-responsive.jpg',
          alt: 'eCom mobile cart page',
        },
      ],
    },
  ],
  getProjectById: (id) => {
    const projects = get().projects;
    return projects.find((project) => project.id === id);
  },
}));
