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
    {
      id: '4',
      name: 'RIIK',
      goal: 'Redesigned the RIIK municipal website, contributing to both the UI design and frontend implementation. The project focused on improving responsive design, accessibility, and extending the WordPress CMS for easier content management.',
      responsibilities: [
        '- Designed and implemented a new desktop navigation.',
        '- Refactored CSS and improved responsive layouts across devices.',
        '- Built WordPress CMS functionality for managing employee profiles.',
        '- Implemented category-based rendering to display employees in different sections automatically.',
        '- Improved accessibility following Universal Design (Universell utforming / WCAG) principles.',
      ],
      results: [
        '- Eliminated hard-coded employee data by introducing a CMS-driven workflow.',
        '- Enabled administrators to manage employee information without developer support.',
        '- Improved mobile usability and overall maintainability of the website.',
      ],
      tags: ['front-end', 'Wordpress', 'design'],
      technologies: ['WordPress', 'PHP', 'JavaScript', 'HTML', 'CSS'],
      year: '2026',
      url: 'https://www.riik.no/',
      medias: [
        {
          url: '/Riik-overview.png',
          alt: 'Overview of the RIIK website showing key desktop pages and layouts.',
        },
        {
          url: '/Riik-responsive-1.png',
          alt: 'RIIK mobile interface showing the homepage and navigation menu',
        },
        {
          url: '/Riik-responsive-2.png',
          alt: 'RIIK tablet interface and WordPress CMS for managing employee profiles.',
        },
      ],
    },
    {
      id: '5',
      name: 'Indigo IKT',
      goal: 'Redesigned the Indigo IKT corporate website, taking responsibility for both the UI design and frontend implementation. The project focused on improving accessibility, responsive design, and establishing a reusable Design System. This Design System serves as the foundation for future company websites and related digital products, ensuring a consistent user experience and visual identity.',
      responsibilities: [
        '- Redesigned the corporate website to provide a more modern and user-friendly experience.',
        '- Improved responsive layouts to ensure usability across desktop, tablet, and mobile devices.',
        '- Enhanced accessibility following Universal Design (Universell utforming / WCAG) principles.',
        '- Designed and documented a reusable Design System, including colors, typography, spacing, navigation, forms, tables, cards, and other core UI components.',
        "- Rebuilt the company's Grafisk Profil page from scratch to provide a centralized brand guideline for internal teams.",
        '- Implemented interactive color palettes using JavaScript, allowing users to copy HEX color codes with a single click.',
      ],
      results: [
        '- Established a scalable Design System that serves as the foundation for future company websites and related digital products.',
        '- Improved consistency across the user interface by standardizing reusable design components.',
        '- Made brand assets easier for designers and developers to reference through an interactive brand guideline page.',
        '- Improved accessibility and responsive usability across the entire website.',
      ],
      tags: ['front-end', 'Wordpress', 'UI/UX'],
      technologies: ['WordPress', 'PHP', 'JavaScript', 'HTML', 'CSS', 'Figma'],
      year: '2026',
      url: 'https://www.indigo-ikt.no/',
      medias: [
        {
          url: '/Indigo-overview.png',
          alt: 'Overview of the Indigo website showing key pages and interface designs.',
        },
        {
          url: '/Indigo-responsive-1.png',
          alt: 'Indigo mobile interface showing the homepage and navigation menu.',
        },
        {
          url: '/Indigo-responsive-2.png',
          alt: 'Indigo tablet interfaces showing the company overview and brand color palette.',
        },
        {
          url: '/Indigo-DesignSystem-1.png',
          alt: 'Indigo design system showing reusable UI components and interface elements.',
        },
        {
          url: '/Indigo-DesignSystem-2.png',
          alt: 'Responsive form component examples from the Indigo design system.',
        },
      ],
    },
    {
      id: '6',
      name: 'Kidget',
      goal: 'The goal of Kidget is to create a fun and engaging allowance tracker for kids, where children can record chores as income and expenses, track saving goals, ans earn badges and level up - making money management feel like a game.',
      tags: ['front-end', 'design'],
      technologies: [
        'React',
        'TypeScript',
        'React Router',
        'Vite',
        'Supabase (Auth + PostgreSQL)',
        'i18next (Internationalization)',
        'Recharts',
      ],
      year: '2026',
      url: 'https://kidget.netlify.app/',
      github: 'https://github.com/H-chai/kidget',
      medias: [
        {
          url: '/Kidget-onboard.png',
          alt: 'Kidget onboarding page (Mobile UI)',
        },
        {
          url: '/Kidget-setting.png',
          alt: 'Kidget setting page (Mobile UI)',
        },
        {
          url: '/Kidget-home.png',
          alt: 'Kidget home page (Mobile UI)',
        },
        {
          url: '/Kidget-history.png',
          alt: 'Kidget history page (Mobile UI)',
        },
        {
          url: '/Kidget-level.png',
          alt: 'Kidget level page (Mobile UI)',
        },
        {
          url: '/Kidget-expense.png',
          alt: 'Kidget expense page (Mobile UI)',
        },
      ],
    },
  ],
  getProjectById: (id) => {
    const projects = get().projects;
    return projects.find((project) => project.id === id);
  },
}));
