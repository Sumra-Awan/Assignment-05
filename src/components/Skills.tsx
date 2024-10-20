import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
       <div data-aos="zoom-in">
        <h2 className='text-4xl md:text-5xl'>Technologies I Work With </h2>
        <p className='text-gray-900 pt-2'>
        I’m a web development enthusiast with a strong background in HTML, CSS, and JavaScript. I’ve gained hands-on experience creating interactive and user-friendly websites using React and Next.js. I’m also skilled in Tailwind CSS for designing stylish and responsive layouts. I love learning new technologies and staying up-to-date with the latest trends, so I can keep improving my skills and bring fresh ideas to my projects.
        </p>
       </div>
       <div>
        <div className='grid grid-cols-2 text-gray-900 text-3xl sm:text-4xl'>
          <div className='space-y-2'>
            <h2 data-aos="zoom-in">Typescript</h2>
            <h2 data-aos="zoom-in">Next.js</h2>
            <h2 data-aos="zoom-in">React.js</h2>
          </div>
          <div className='space-y-2'>
            <h2 data-aos="zoom-in">Tailwind</h2>
            <h2 data-aos="zoom-in">CSS</h2>
            <h2 data-aos="zoom-in">Node.js</h2>
          </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Skills