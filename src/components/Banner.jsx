import { Separator } from "@heroui/react";

const Banner = () => {
  return (
    <div className="bg-[url('/assets/Banner.png')] text-white  flex justify-between flex-col items-center  gap-5 h-150">
      <div className="p-10 text-center flex justify-center flex-col items-center gap-3.5 flex-1">
        <h1 className="text-7xl">
          Discover Your <br /> Next Adventure
        </h1>

        <p className="text-2xl">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="flex gap-5">
          <button className="uppercase bg-cyan-500 px-5 py-3 cursor-pointer rounded-lg">
            Explore Now
          </button>

          <button className="uppercase px-5 py-3 bg-white/50 cursor-pointer rounded-lg">
            View Destination
          </button>
        </div>
      </div>

      <div className="w-full max-w-3xl mt-4 bg-white/2 my-10 backdrop-blur-lg border border-white/30 rounded-2xl flex justify-between items-center px-4 py-3 gap-2 shadow-2xl">
        <div className="flex-1 px-3 text-left">
          <h3 className="text-sm font-bold"> Location</h3>
          <p className="text-xs text-white/75">Address, City or Zip</p>
        </div>

        <Separator orientation="vertical" className="h-8 bg-white/30" />

        <div className="flex-1 px-3 text-left">
          <h3 className="text-sm font-bold"> Date / Duration</h3>
          <p className="text-xs text-white/75">Anytime / 3 Days</p>
        </div>

        <Separator orientation="vertical" className="h-8 bg-white/30" />

        <div className="flex-1 px-3 text-left">
          <h3 className="text-sm font-bold"> Budget</h3>
          <p className="text-xs text-white/75">$0 - $3000</p>
        </div>

        <Separator orientation="vertical" className="h-8 bg-white/30" />

        <div className="flex-1 px-3 text-left">
          <h3 className="text-sm font-bold"> People</h3>
          <p className="text-xs text-white/75">5 - 10</p>
        </div>

        <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 transition-all duration-200 py-3 px-6 rounded-xl font-bold cursor-pointer shadow-lg text-white">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
