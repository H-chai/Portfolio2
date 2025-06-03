# Portfolio

## Overview

This is my personal frontend development portfolio showcasing selected projects completed during the Noroff Frontend Development course. The website highlights three main projects, each with a dedicated article page that includes descriptions, live demos, source code links, and reflections on improvements based on teacher feedback.

## Live Demo

[Deployed Application](https://hikarioverby-frontend.netlify.app/)

## Technologies Used

- React
- React Router
- Tailwind CSS
- Vite
- GitHub Pages / Netlify

## Features

- **Landing Page**: Displays teaser cards for each project with thumbnail, title, and short description.
- **Project Article Pages**: Each card links to a dedicated page with a detailed project overview, reflection, GitHub link, and live demo.
- **Responsive Design**: Fully responsive and optimized for mobile, tablet, and desktop screens.
- **Clean Navigation**: Easy-to-navigate interface using React Router.
- **Modular Component Structure**: Built using reusable components for better scalability and maintainability.

## Highlights Projects

- **JavaScript Frameworks(JSF)**: A product listing SPA with search, routing, and cart features.
- **Semester Project(SP2)**: An auction site featuring user registration/login, listing creation, and bidding.
- **Exam Project(EP2)**: A multi-page accommodation booking platform with admin dashboard and user features.

Each project page includes:

- A high-quality project image (optimized under 200KB)
- Live website link (opens in new tab)
- GitHub repository link (opens in new tab)
- Reflection and improvement notes
- Short technical and design insights

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/H-chai/Portfolio2.git
   ```
2. Navigate to the project folder:
   ```sh
   cd portfolio
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run start
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/src
  ├── components
  ├── contexts
  ├── hooks
  ├── pages
  ├── store
  ├── utils
  ├── App.jsx
  ├── main.jsx
  ├── App.css
  ├── index.css
/public
/index-html
```

## Future Improvements

- Add animations for card transitions using Framer Motion
- Introduce dark mode toggle
- Implement content filtering or tags
- Add multilingual support (English / Japanese)
- Improve accessibility (ARIA, keyboard nav)
