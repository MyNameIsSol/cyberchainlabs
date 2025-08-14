import { Shield, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d1b2a] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo & Intro */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Shield size={28} className="text-pink-400" />
            <span className="text-xl font-bold">CyberChainLabs</span>
          </div>
          <p className="text-sm text-gray-300">
            Protecting the crypto community by tracking, reporting, and educating
            about online scams. Your safety is our mission.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-pink-400 mb-3">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-pink-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-pink-400 transition">Reports</a></li>
              <li><a href="#" className="hover:text-pink-400 transition">Categories</a></li>
              <li><a href="#" className="hover:text-pink-400 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-pink-400 mb-3">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-pink-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-pink-400 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-pink-400 transition">Support</a></li>
              <li><a href="#" className="hover:text-pink-400 transition">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-pink-400 mb-3">Stay Updated</h4>
          <p className="text-gray-300 text-sm mb-4">
            Subscribe to receive scam alerts and cyber safety tips.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg w-full text-black outline outline-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-fuchsia-500 px-4 py-2 rounded-r-lg flex items-center justify-center hover:scale-105 transition"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} CyberChainLabs. All rights reserved.
      </div>
    </footer>
  );
}
