import React from 'react';
import Heading from './Heading';
import Card from './Card';
import StudentIdCard from "../app/images/id-cards.png";
import MakeupWebsite from "../app/images/makeup-website.png";
import StaticInteractiveResume from "../app/images/static-interactive-resume.png";
import ShareableResumeBuilder from "../app/images/shareable-resume-builder.png";

const data = [
  {
    id: 0,
    title: "Student Id Card",
    desc: "I created a student ID card component for three students using props to pass the students data such as name, age, roll number, and class into the component. I styled each card using Tailwind CSS to ensure a clean, modern, and fully responsive design.",
    img: StudentIdCard,
    tags: ["React", "Node", "CSS", "Typescript"],
  },
  {
    id: 1,
    title: "Makeup Website",
    desc: "I developed a makeup website using Next.js and React. I utilized TypeScript and Tailwind CSS, ensuring a modern, clean, and fully responsive design that works seamlessly across all devices.",
    img: MakeupWebsite,
    tags: ["React", "Node", "CSS", "Typescript"],
  },
  {
    id: 2,
    title: "Shareable Resume Builder",
    desc: "I created a shareable resume builder application that allows users to generate and download their resumes as PDFs. The application features a user-friendly interface where individuals can input their work experience, skills, and education.",
    img: ShareableResumeBuilder,
    tags: ["React", "Node", "CSS", "Typescript"],
  },
  {
    id: 3,
    title: "Static Interactive Resume",
    desc: "I created a static interactive resume using Next.js and React. The resume features sections such as education, work experience, and skills. Additionally, I integrated interactive elements such as clickable links and animations to enhance user engagement while navigating through my professional background.",
    img: StaticInteractiveResume,
    tags: ["React", "Node", "CSS", "Typescript"],
  },
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (
          <Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
