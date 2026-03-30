export default function Home() {
  const heroContent = [
  {
    id: "hero1",
    title: "Discover Your Next Adventure",
    subtitle: "Explore amazing places, experiences, and activities around the world.",
  },
  {
    id: "hero2",
    title: "Learn New Skills Online",
    subtitle: "Join thousands of learners and master your favorite topics from home.",
  },
  {
    id: "hero3",
    title: "Boost Your Productivity",
    subtitle: "Tools and tips to help you stay focused and get more done every day.",
  }
];
  return (
    <div className="md:h-screen bg-linear-to-r from-blue-500 via-red-400 to-purple-500 text-white flex flex-col justify-center items-center px-6">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center drop-shadow-lg">
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
    {heroContent.map((item) => (
  <div
    key={item.id}
    className="bg-white text-black bg-opacity-20 p-6 rounded-xl shadow-lg hover:scale-105 transform transition"
  >
    <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
    <p>{item.subtitle}</p>
  </div>
))}
      </div>
    </div>
  )
}