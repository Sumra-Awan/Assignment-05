import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface PropsType {
    title: string;
    desc: string;
    img: string | StaticImageData; 
    tags: string[];
}

const Card: React.FC<PropsType> = ({ title, desc, img, tags }) => {
  return (
    <div className='border border-black w-[300px] sm:w-[350px]' data-aos="flip-left">
      <Image 
        className='w-[300px] sm:w-[350px] h-auto'
        src={img}
        width={350}
        height={350}
        alt={title}
      />
      <div className='p-4 space-y-4'>
        <div className='text-4xl font-extralight'>{title}</div>
        <div>{desc}</div>
        <div>
          {tags.map((el) => (
            <div className='tags' key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
