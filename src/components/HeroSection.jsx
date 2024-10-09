const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR Build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent">
          {' '}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        empower your creativity and bring your VR app ideas to life with our inuitive development tools. get statrted
        today turn your imagination into immersive reality
      </p>
      <div className="flex justify-center my-10">
        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 mx-3 rounded-md">
          Start For Free
        </a>
        <a href="#" className="py-2 px-3 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video autoPlay loop muted controls className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
          <source src="https://i.imgur.com/jCiPYrV.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video autoPlay loop muted controls className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
          <source src="https://i.imgur.com/b3Nj2ys.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
