export const Projects = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row container mx-auto px-8 md:pt-32 items-center'>
        <div className='md:basis-1/3'>
          <h1 className='m-10 md:m-20 text-center text-4xl'>
            Personal projects
          </h1>
        </div>
        <div className='md:basis-2/3 md:w-32 md:border-l-2 md:border-dotted md:border-black'>
          <p className='m-6 md:m-20'>
            For now I only display one project. It is a football statistics
            application focused on the Premier League. You can try it out by
            visiting this{' '}
            <a
              className='underline'
              href='https://plstats.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              link
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
