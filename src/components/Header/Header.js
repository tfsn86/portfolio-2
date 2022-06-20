import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaBars } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className='flex flex-wrap items-center justify-between py-3 sticky px-8 mb-3 top-3'>
        <div className='container mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <span className='text-1xl leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'>
              <NavLink to='/'>Torben Florup Schytt-Nielsen</NavLink>
            </span>
            <button
              className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className='fas fa-bars text-black'>
                <FaBars />
              </i>
            </button>
          </div>

          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
          >
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto justify-end flex-1 items-center text-1xl'>
              <li className='lg:mx-1 text-black px-2 hover:opacity-50'>
                <NavLink
                  to='/projects'
                  className={({ isActive }) =>
                    isActive
                      ? 'lg:underline lg:underline-offset-8 decoration-1'
                      : ''
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li className='lg:mx-1 text-black px-2 hover:opacity-50'>
                <NavLink
                  to='/skills'
                  className={({ isActive }) =>
                    isActive
                      ? 'lg:underline lg:underline-offset-8 decoration-1'
                      : ''
                  }
                >
                  Skills
                </NavLink>
              </li>
              <li className='lg:mx-1 text-black px-2 hover:opacity-50'>
                <a
                  href='https://www.linkedin.com/in/torbenschyttnielsen/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaLinkedin />
                </a>
              </li>
              <li className='lg:mx-1 text-black px-2 hover:opacity-50'>
                <a
                  href='https://github.com/tfsn86'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaGithub />
                </a>
              </li>
              <li className='lg:mx-1 text-black px-2 hover:opacity-50'>
                <a href='mailto:tfsn86@gmail.com'>
                  <MdEmail />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
