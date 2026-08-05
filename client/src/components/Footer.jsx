import React from 'react'
import { LiaInfinitySolid } from 'react-icons/lia'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

function Footer() {
  return (
    <div className='bg-[#f3f3f3] flex justify-center px-4 pb-10 py-4 pt-10'>
      <div className='w-full max-w-6xl bg-white rounded-[24px] shadow-sm border border-gray-200 py-8 px-3 text-center'>
        <div className='flex justify-center items-center gap-1 mb-3'>
            <LiaInfinitySolid size={34} className='text-green-600' />
            <h2 className='font-extrabold text-2xl glow-text'>Oris Ai</h2>
        </div>
        <p className='text-gray-500 text-sm max-w-xl mx-auto mb-6'>
          AI-powered interview preparation platform designed to improve
          communication skills, technical depth and professional confidence.
        </p>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-600 mb-4'>
          <a href='mailto:lakshyapratapsinghchauhan7@gmail.com' className='text-black hover:underline'>Contact</a>
          <a href='https://www.linkedin.com/in/lakshya-pratap-singh-070b022b7/' target='_blank' rel='noreferrer' className='flex items-center gap-2 text-black hover:underline'>
            <AiFillLinkedin className='text-blue-600' />
            LinkedIn
          </a>
          <a href='https://github.com/lakshya-pratap-singh-chauhan' target='_blank' rel='noreferrer' className='flex items-center gap-2 text-black hover:underline'>
            <AiFillGithub />
            GitHub
          </a>
          <a href='mailto:lakshyapratapsinghchauhan7@gmail.com' className='text-black hover:underline'>Feedback</a>
        </div>
        <p className='text-gray-400 text-xs'>© 2026 Lakshya Pratap Singh. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
