export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="md:flex md:justify-between md:items-start gap-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Xyz company</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-2xl border-2 border-white focus:outline-none"
              />
              <button className="bg-white px-4 py-2 rounded-r-2xl text-black">
                Subscribe
              </button>
            </div>
          </div>          
            <div>
              <h3 className="font-semibold mb-2">Support</h3>
              <ul className="text-gray-400 space-y-1">
                <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer">Terms of Service</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center px-4">
          <p className="text-gray-400 text-sm">&copy; 2026 YourBrand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}