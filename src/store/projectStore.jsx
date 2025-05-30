import { create } from 'zustand';

export const useStore = create(() => ({
  projects: [
    {
      id: '1',
      name: 'Holidaze',
      gaol: 'The goal of Holidaze is to create a user-friendly accommodation booking platform where users can explore venues, view details, and make reservations. Admins can manage listings and bookings through a dedicated dashboard.',
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
      url: 'https://reactecom-project.netlify.app/',
      media: [
        {
          url: 'Holidaze-fullScreen.jpg',
          alt: 'Holidaze home',
        },
        {
          url: 'Holidaze-venue.jpg',
          alt: 'Holidaze venue page',
        },
        {
          url: 'Holidaze-venue-responsive.jpg',
          alt: 'Holidaze venue mobile page',
        },
        {
          url: 'Holidaze-profile-responsive.jpg',
          alt: 'Holidaze profile mobile page',
        },
      ],
    },
    {
      id: '2',
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
          url: '/eCom-cart.jpg',
          alt: 'eCom cart page',
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
    {
      id: '3',
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
      media: [
        {
          url: 'CrediBid-fullScreen.jpg',
          alt: 'CrediBid home',
        },
        {
          url: 'CrediBid-listing.jpg',
          alt: 'CrediBid listing page',
        },
        {
          url: 'CrediBid-profile.jpg',
          alt: 'CrediBid profile page',
        },
        {
          url: 'CrediBid-listing-responsive.jpg',
          alt: 'CrediBid mobile listing page',
        },
        {
          url: 'CrediBid-create-page-responsive.jpg',
          alt: 'eCom mobile create listing page',
        },
      ],
    },
  ],
}));
