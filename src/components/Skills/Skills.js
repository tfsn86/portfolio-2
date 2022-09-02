import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNode,
} from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { DiPostgresql } from 'react-icons/di';

export const Skills = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row container mx-auto px-8 md:pt-32 items-center'>
        <div className='md:basis-1/3'>
          <h1 className='m-10 md:m-20 text-center text-4xl'>
            Programming skills
          </h1>
        </div>
        <div className='md:basis-2/3 md:w-32 md:border-l-2 md:border-dotted md:border-black'>
          <div className='m-6 md:m-20'>
            <span className='flex container md:border-b-2 md:border-black md:pb-3 items-center justify-center'>
              <h2 className='text-2xl'>Front End</h2>
            </span>
            <div className='flex flex-row container justify-center md:pt-3 md:pb-10'>
              <span className='text-5xl px-2'>
                <a
                  href='https://developer.mozilla.org/en-US/docs/Web/HTML'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaHtml5 color='#e34c26' />
                </a>
              </span>
              <span className='text-5xl px-2'>
                <a
                  href='https://developer.mozilla.org/en-US/docs/Web/CSS'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaCss3Alt color='#264de4' />
                </a>
              </span>
              <span className='text-5xl px-2'>
                <a
                  href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaJsSquare color='#f0db4f' />
                </a>
              </span>
              <span className='text-5xl px-2'>
                <a
                  href='https://reactjs.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaReact color='#61dbfb' />
                </a>
              </span>
            </div>
            <span className='flex container md:border-b-2 md:border-black md:pb-3 items-center justify-center'>
              <h2 className='text-2xl'>Back End</h2>
            </span>
            <div className='flex flex-row container justify-center md:pt-3 md:pb-10'>
              <span className='text-5xl px-2'>
                <a
                  href='https://expressjs.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <SiExpress color='#303030' />
                </a>
              </span>
              <span className='text-5xl px-2'>
                <a
                  href='https://nodejs.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaNode color='#3C873A' />
                </a>
              </span>
            </div>
            <span className='flex container md:border-b-2 md:border-black md:pb-3 items-center justify-center'>
              <h2 className='text-2xl'>Database</h2>
            </span>
            <div className='flex flex-row container justify-center md:pt-3 md:pb-10'>
              <span className='text-5xl px-2'>
                <a
                  href='https://expressjs.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <DiPostgresql color='#0064a5' />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
