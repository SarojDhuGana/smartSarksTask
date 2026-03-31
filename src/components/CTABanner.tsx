import mtEverest from "../assets/mtEverest.png";
export default function CTABanner() {
  return (
    <div className="relative rounded-xl h-96 md:w-full flex justify-center items-center bg-cover bg-center px-2 py-4" style={{ backgroundImage: `url(${mtEverest})` }}>
      <div className="absolute inset-0 bg-linear-to-r bg-gray-400/20 via-black/10 to-black/20"></div>
      <div className="relative text-white text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-100 w-full">
          Explore Nepal Like Never Before
        </h1>
        <p className="mb-6 mt-4 text-lg md:text-xl text-gray-200">
          From the peaks of the Himalayas to vibrant cultural cities,
          begin a journey filled with adventure, nature, and unforgettable memories.
        </p>
        <button className="border-2 px-6 py-2 rounded-full bg-orange-400 font-semibold hover:bg-white hover:text-orange-500 transition duration-300">
          Start Your Trip
        </button>
      </div>
    </div>
  );
}