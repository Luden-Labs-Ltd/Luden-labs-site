import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className='w-full border-b border-gray-100 bg-white'>
      <div className='mx-auto max-w-[1920px] px-4 md:px-8 lg:px-12'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <Link to='/' className='flex items-center gap-2'>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-blue-600'>
              <span className='text-sm font-bold text-white'>L</span>
            </div>
            <span className='font-medium text-gray-900'>Luden Labs</span>
          </Link>

          {/* Navigation Links */}
          <div className='hidden items-center gap-6 md:flex'>
            <Link
              to='/projects'
              className='text-gray-500 transition-colors hover:text-gray-900'
            >
              Услуги
            </Link>
            <Link
              to='/#about'
              className='text-gray-500 transition-colors hover:text-gray-900'
            >
              О нас
            </Link>
            <Link
              to='/#contacts'
              className='text-gray-500 transition-colors hover:text-gray-900'
            >
              Контакты
            </Link>
            <Link
              to='/#psychotechnology'
              className='text-gray-500 transition-colors hover:text-gray-900'
            >
              Психотехнология
            </Link>
          </div>

          {/* Language Selector */}
          <div className='flex items-center gap-2'>
            <button className='text-gray-400 transition-colors hover:text-gray-600'>
              <svg
                className='h-5 w-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                />
              </svg>
            </button>
            <button className='text-gray-400 transition-colors hover:text-gray-600'>
              <svg
                className='h-5 w-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </button>
            <span className='text-sm text-gray-500'>RU</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
