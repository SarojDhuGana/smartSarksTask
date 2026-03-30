export default function About() {
const heroContent = [
  {
    id: "hero1",
    title: "Discover Your new Advanture",
    subtitle: "Explore amazing places, experiences, and activities around the world.",
  },
  {
    id: "hero2",
    title: "Learn New Skills Section",
    subtitle: "Join thousands of learners and master your favorite topics from home.",
  },
  {
    id: "hero3",
    title: "Boost Your Productivity",
    subtitle: "Tools and tips to help you stay focused and get more done every day.",
  },
  {
    id: "about1",
    title: "About Us",
    subtitle: "We are passionate about connecting people with unforgettable experiences and knowledge.",
  },
  {
    id: "about2",
    title: "Our Mission",
    subtitle: "To inspire learning, exploration, and personal growth through innovative online and offline solutions.",
  },
  {
    id: "about3",
    title: "Our Values",
    subtitle: "Creativity, curiosity, and community guide everything we do.",
  }
];

  return (
    <div className="md:h-screen bg-linear-to-r from-blue-500 via-red-400 to-purple-500 text-white flex flex-col justify-center px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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