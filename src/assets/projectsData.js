// src/data/projectsData.js
import nileVerseImg from './nile-verse.png';
import rohaPicksImg from './roha-picks.png';
import gurshaImg from './gursha.png';
import kimImg from './kim.png';
import BruhAiImage from './bruhai.png';
import PlaneWiseImage from './planwise.jpeg';
const projects = [
  {
    _id: "1",
    title: "NileVerse",
    description:
      "NileVerse is a comprehensive cryptocurrency blog platform that provides easy content management, live market data from Binance and CoinGecko, and carefully selected crypto news. It offers a personalized dashboard for users, tools for community interaction, and a smooth interface built with React. The backend, powered by Express.js, ensures high performance. The platform also includes secure authentication, password reset features, and a variety of other useful functions.",
    imageUrl: nileVerseImg,
    technologies: ["React","Redux","Tailwind CSS","Express.js", "PostgreSQL", "External APIs",],
    url: "https://nileverse-sigma.vercel.app/",
    github: "https://github.com/Samuel-Tiruneh",
  },
  {
    _id: "2",
    title: "Roha Picks",
    description:
      "Roha Picks is a modern and easy-to-use movie recommendation website. It helps you find the best movies to watch, lets you watch trailers, see movie details, and add movies to your favorites. You can also explore trending and popular movies. Soon, users will be able to post their own movie-related content. The platform has a strong backend powered by RESTful and GraphQL APIs to keep everything running smoothly.",
    imageUrl: rohaPicksImg,
    technologies: ["React","Tailwind CSS","GraphQL", "Express","MongoDB"],
    url: "https://roha-picks.onrender.com",
    github: "https://github.com/Samuel-Tiruneh",
  },
  {
    _id: "3",
    title: "BruhAI",
    description:
      "BruhAI is an innovative chat platform that brings together multiple AI models in a single, unified space, eliminating the hassle of switching between different apps or services. It offers a sleek, user-friendly interface designed to make conversations with AI smooth, intuitive, and enjoyable. Users can effortlessly engage with various AI tools tailored to different needs, whether for work, education, or entertainment.",
    imageUrl: BruhAiImage,
    technologies: ["TypeScript","React","Next.js","Tailwind CSS", "TypeScript", "PostgreSQL","External APIs" ],
    url: "https://bruhai.vercel.app",
    github: "https://github.com/Samuel-Tiruneh",
  },
  {
    _id: "4",
    title: "Gursha Flavors",
    description:
      "A full-stack mobile app built with Flutter for Gursha Flavors, an Ethiopian restaurant offering online food delivery. The app features a clean UI, real-time order tracking, and secure user authentication. Firebase handles user management and push notifications, while a custom Node.js backend manages menu data, orders, and payment integration — delivering a seamless food ordering experience for local customers.",
    imageUrl: gurshaImg,
    technologies: ["Flutter", "Firebase"],
    url: "https://foodiesapp-e74b8.web.app/",
    github: "https://github.com/Samuel-Tiruneh",
  },
  {
    _id: "5",
    title: "KimTech-Landing Page",
    description:
      "The official website for Kim Tech, an Ethiopian tech startup, is built with React, Tailwind CSS, and Express.js. It showcases a modern, fully responsive design that works well on all devices. The site highlights the company’s services, mission, and team, providing visitors with a smooth and engaging browsing experience.",
    imageUrl: kimImg,
    technologies: ["React.js", "Tailwind CSS", "Express.js"],
    url: "https://kimtech.onrender.com/",
    github: "https://github.com/Samuel-Tiruneh",
  },

  {
    _id: "6",
    title: "PlanWise",
    description:
      "This full-stack productivity platform helps to manage personal notes effortlessly. Users can create, update, delete, and pin important notes using a clean and responsive interface. The backend delivers fast and reliable data processing, while the frontend offers an intuitive way to organize and prioritize notes effectively.",
    imageUrl: PlaneWiseImage,
    technologies: ["React", "Tailwind CSS","RESTful API" ,"MongoDB", "Node.js", "Express.js"],
    url: "https://noteappv1-1.onrender.com",
    github: "https://github.com/Samuel-Tiruneh",
  },
];

export default projects;
