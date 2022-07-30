export const Home = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row container mx-auto px-8 md:pt-32 items-center'>
        <div className='md:basis-1/3'>
          <h1 className='m-10 md:m-20 text-center'>About</h1>
        </div>
        <div className='md:basis-2/3 md:w-32 md:border-l-2 md:border-dotted md:border-black'>
          <p className='m-6 md:m-20'>
            I am a Business Analyst at the IT and Development Agency of the
            Danish Ministry of Taxation. Outside work I like to code web
            applications. Some of them are displayed on this site.
            <br />
            <br />
            Education: Master of Science in Public Administration
            <br />
            <br />
            Work Experience: Civil Servant at the Danish Ministry of Culture and
            Ministry of Social Affairs
          </p>
        </div>
      </div>
      <div className='py-40'></div>
    </>
  );
};
