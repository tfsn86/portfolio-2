export const Home = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row container mx-auto px-8 md:pt-32 items-center'>
        <div className='md:basis-1/3'>
          <h1 className='m-10 md:m-20 text-center'>About</h1>
        </div>
        <div className='md:basis-2/3 md:w-32 md:border-l-2 md:border-dotted md:border-black'>
          <p className='m-6 md:m-20'>
            I am a Senior Business Consultant at NNIT. For more information
            about my professional background please visit my LinkedIn profile.
            Outside work I experiment with coding web applications and some of
            them are displayed on this site.
          </p>
        </div>
      </div>
    </>
  );
};
