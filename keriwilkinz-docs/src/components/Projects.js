import React from "react";
import Project from "./Project";

const Projects = () => {
  const works = [
    {
      stack: ["react", "Node.js", "React hooks"],
      description:
        "Introducing 'TechyTipsBlog' – a dynamic and user-friendly blog application that seamlessly combines creativity and functionality. The meticulously assembled front end provides users with a captivating interface, allowing effortless exploration of diverse categories. Dive into a world of engaging content penned by various authors, each click revealing a new and intriguing perspective. But that's not all – we've sprinkled in some magic with add-on features like a unique liking system, a mesmerizing typewriter effect that brings words to life, and powerful search capabilities to help you navigate the vast realm of thoughts and ideas. Welcome to TechyTipsBlog, where every click opens the door to a captivating journey through the art of expression.",
      title: "TechyTipsBlog",
      github: "https://github.com/kwilkinz/TechyTips_blog",
      url: "https://techytips.onrender.com/",
      image: "img/techytipsblog.png",
      index: 0,
    },

    {
      stack: ["JavaScript", "bootstrap", "Restful API"],
      description:
        "Presenting 'BookHaven' – a revolutionary library community application that seamlessly connects readers with the literary treasures of their local neighborhoods. Immerse yourself in a world where searching, reviewing, and checking out books become a delightful experience. The thoughtfully crafted search and sorting functions empower users to discover available books and their ratings effortlessly. What sets BookHaven apart is its robust foundation – coded with JavaScript functions designed for effortless scalability. Now, building and expanding your community library is a breeze, requiring little to no code refactoring. Welcome to BookHaven, where the joy of reading meets the ease of community engagement.",
      title: "BookHaven",
      github: "https://github.com/kwilkinz/Local-Library",
      url: "https://github.com/kwilkinz/Local-Library",
      image: "img/bookhaven.png",
      index: 1,
    },
    {
      stack: ["Express", "Knex", "Backend", "JavaScript"],
      description:
        "Introducing 'CineSearch' – a cutting-edge movie theater application that puts the power of film discovery in your hands. Behind the scenes, a meticulously crafted back end enables users to seamlessly search for their favorite movies currently gracing the big screen. Dive into a world where CRUD methods bring reviews to life, providing a dynamic space for user opinions. With the implementation of router and controller functions, CineSearch ensures that each user's specific requests are met with precision and efficiency. Say goodbye to movie dilemmas; say hello to CineSearch, your personalized gateway to the cinematic wonders playing in theaters near you.",
      title: "CineSearch",
      github: "https://github.com/kwilkinz/WeLoveMovies_back-end",
      url: "https://welovemovies-frontend-91f9.onrender.com/",
      image: "img/cinesearch.png",
      index: 2,
    },
    {
      stack: ["React", "Express", "JavaScript"],
      description:
        "Introducing 'CardCraft Pro' – the ultimate study tool application that empowers users to shape their ideal decks of knowledge. With the ability to create, edit, and delete both decks and cards, CardCraft Pro is a versatile companion for learners. Behind the scenes, a robust REST API and meticulously designed middleware functions ensure a seamless experience in crafting and refining your study materials. Navigate effortlessly through defined routes and URLs, utilizing state over multiple components to create a personalized and efficient study environment. Say hello to CardCraft Pro, where your learning journey is in your hands, and knowledge is crafted to perfection.",
      title: "CardCraftPro",
      github: "https://github.com/kwilkinz/Flashcard_App",
      url: "https://github.com/kwilkinz/Flashcard_App",
      image: "img/cardcraftpro.png",
      index: 3,
    },
  ];
  return (
    <div className="projects">
      <h1 className="recent-projects">
        <span>Recent Projects</span>
      </h1>
      <div className="underline"></div>
      <div className="section-center projects-center">
        {works.map(
          ({ description, stack, title, github, url, image, index }) => (
            <Project
              stack={stack}
              key={index}
              description={description}
              title={title}
              url={url}
              github={github}
              image={image}
              index={index}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
