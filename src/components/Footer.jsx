const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-gray-300 px-6 md:px-16 py-14">
      <div className="max-w-7xl mx-auto">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-14">
          <div>
            <h1 className="text-5xl font-black text-white">Wanderlust</h1>

            <p className="mt-4 max-w-md text-gray-400">
              Explore beautiful destinations and create unforgettable memories.
            </p>
          </div>

          {/* Newsletter */}
          <div className="w-full max-w-md">
            <h3 className="text-white font-semibold mb-4">
              Subscribe Newsletter
            </h3>

            <div className="flex items-center bg-white/5 border border-white/10 rounded-xl p-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none flex-1 px-3 text-sm"
              />

              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 px-5 py-2 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
          <div>
            <h3 className="text-white mb-4 font-semibold">Quick Links</h3>

            <ul className="space-y-2">
              <li className="hover:text-cyan-400 cursor-pointer">Home</li>
              <li className="hover:text-cyan-400 cursor-pointer">
                Destinations
              </li>
              <li className="hover:text-cyan-400 cursor-pointer">Bookings</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4 font-semibold">Support</h3>

            <ul className="space-y-2">
              <li className="hover:text-cyan-400 cursor-pointer">
                Help Center
              </li>
              <li className="hover:text-cyan-400 cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4 font-semibold">Contact</h3>

            <ul className="space-y-2 text-gray-400">
              <li>+880 1234-567890</li>
              <li>info@wanderlust.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4 font-semibold">Follow Us</h3>

            <div className="flex gap-3">
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-cyan-500 transition">
                X
              </span>

              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-cyan-500 transition">
                in
              </span>

              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-cyan-500 transition">
                ◎
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-5 text-center text-sm text-gray-500">
          &copy; 2026 Wanderlust. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
