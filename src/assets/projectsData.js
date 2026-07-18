// src/data/projectsData.js
import nileVerseImg from './nile-verse.png';
import rohaPicksImg from './roha-picks.png';
import gurshaImg from './gursha.jpg';
import BiT from './BiT.png';
import BruhAiImage from './bruhai.png';
import unifiedImg from './unified.jpg';
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
    title: "BiT Faculty of Computing Final Year Project Selection and Tracking System",
    description:"A web-based platform built for Bahir Dar University Faculty of Computing to simplify how final year student projects are selected, managed, and tracked."
,
    imageUrl: BiT,
    technologies: ["React.js", "Tailwind CSS", "Express.js", "PostgreSQL"],
    url: "https://bit-pms.onrender.com/",
    github: "https://github.com/Samuel-Tiruneh",
  },

{
  _id: "6",
  title: "Unified",
  description: "All-in-one mobile app provides a centralized platform for various productivity features. Built with Flutter, it integrates notes, to-do lists, contact management, and a real-time chat app into a single, seamless experience. The clean and responsive interface allows users to stay organized and connected, making it a powerful tool for managing daily tasks and communications.",
  imageUrl: unifiedImg ,
 technologies: ["Flutter", "postgreSQL"],
  url: "https://unified-d0a7c.web.app/",
  github: "https://github.com/samuelapl"
}
];

export default projects;
