import React from 'react';
import { BsMailbox2 } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
             <h2 className='text-5xl' data-aos="zoom-in">Get In Touch</h2>
             <p className='text-gray-900 text-[18px] pt-2' data-aos="zoom-in">
                Drop me a line, give me a call or leave me a message by submitting the form.
             </p>
             <div className='flex-gap-3 items-center' data-aos="zoom-in">
                <BsMailbox2 size={30} />xyz@gmail.com
             </div>
             <div className='flex-gap-3 items-center' data-aos="zoom-in">
                <BsTelephone size={30} /> (031) 000-0000
             </div>
            </div>
            <div className='space-y-8'>
            <div className='flex flex-col gap-1' data-aos="zoom-in">
                <label htmlFor="name">Name</label>
                <input type='text'
                className='h-[40px] bg-transparent border  border-y-amber-950'
                id='name'/>
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in">
                <label htmlFor="email">Email</label>
                <input type='text'
                className='h-[40px] bg-transparent border border-y-amber-950'
                id='email'/>
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in">
                <label htmlFor="msg">Message</label>
                <textarea
                className='h-[40px] bg-transparent border border-y-amber-950'
                id='msg' rows={8}>
                    </textarea>
            </div>
            <button className='bg-stone-500 p-2 px-6' data-aos="zoom-in">Send</button>
            </div>
        </div>
    </div>
  )
}

export default Contact