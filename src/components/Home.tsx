export default function Home() {
  const trustItems = [
    { icon: "👨‍🔧", text: "50+ Trained Staff" },
    { icon: "🌱", text: "Eco-Friendly Cleaning" },
    { icon: "📍", text: "200+ Postcode Covers" }
  ];
  return (
    <div className="md:h-screen bg-linear-to-r from-[#71a1d9] via-red-400 to-purple-500 text-white flex flex-col justify-center items-center px-10">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center drop-shadow-lg text-primary">
        Welcome to Our Amazing Site
      </h1>
      <p className="text-lg md:text-2xl mb-8 text-center max-w-xl drop-shadow-md">
        Explore, Learn, and Connect. Your journey starts here with amazing experiences!
      </p>
      <div className="flex gap-4">
        <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-purple-100 transition">
          Get Started
        </button>
        <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition">
          Learn More
        </button>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {trustItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#71a1d9] backdrop-blur-md p-6 border-white rounded-xl shadow-lg hover:scale-105 transform transition"
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <p className="text-lg font-semibold">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}