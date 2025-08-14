import Navbar from "../components/Navbar.jsx";
import heroImage from "../assets/images/hero-image.jpg"; // Make sure you have an image in src/assets
import { AlertTriangle, Search, ShieldCheck, Users } from "lucide-react";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 text-start md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Report Suspicious {" "}
            <span className="text-nowrap text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-pink-600">
              Crypto Activity
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            CyberChainLabs helps you detect, report, and avoid illegal crypto activities.
            Together, we can reduce scams and protect the blockchain community.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-gradient-to-br from-pink-400 to-pink-600 text-white rounded-lg font-semibold hover:scale-105 transition">
              Report a Scam
            </button>
            <button className="px-6 py-3 border border-pink-500 text-white rounded-lg font-semibold hover:bg-gradient-to-br from-pink-400 to-pink-600 transition">
              Search Scams
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Cyber security illustration"
            className="w-80 md:w-[500px] drop-shadow-[0_0_25px_rgba(236,72,153,0.5)]"
          />
        </div>
      </section>

       {/* Why Choose Us Section */}
      <section className="bg-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-400">
              CyberChainLabs
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-12">
            We’re not just another platform — we are your trusted partner in the fight against crypto fraud.
            Our goal is simple: protect investors, expose scams, and build a safer blockchain community.
          </p>

          {/* Feature Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-pink-500 transition">
              <ShieldCheck className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Verified Reports</h3>
              <p className="text-gray-400 text-sm">
                Every scam report is verified by our experts, ensuring you get accurate and trustworthy information.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-pink-500 transition">
              <Search className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Scam Search</h3>
              <p className="text-gray-400 text-sm">
                Easily search and identify suspicious crypto addresses, projects, or individuals before investing.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-pink-500 transition">
              <AlertTriangle className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-Time Alerts</h3>
              <p className="text-gray-400 text-sm">
                Get instant notifications on new scams so you can stay ahead of fraudsters and protect your assets.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-pink-500 transition">
              <Users className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
              <p className="text-gray-400 text-sm">
                Join a global community of blockchain users working together to create a safer crypto environment.
              </p>
            </div>
          </div>
        </div>
      </section>

     <section className="min-h-screen bg-slate-900 px-6 py-16 flex flex-col justify-center">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold text-pink-400">Our Core Services</h2>
    <p className="mt-4 text-gray-300">
      Protecting the blockchain community through scam detection, reporting, and education.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {/* Service 1 */}
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-pink-500/30 transition duration-300">
      <img
        src="/images/report-scam.jpg"
        alt="Report Scam"
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-pink-400 mb-3">Report a Scam</h3>
        <p className="text-gray-300 mb-4">
          Submit verified scam reports to help us track, investigate, and warn the crypto community.
        </p>
        <a href="/report" className="text-pink-400 hover:text-pink-300 font-medium">
          Report Now →
        </a>
      </div>
    </div>

    {/* Service 2 */}
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-pink-500/30 transition duration-300">
      <img
        src="/images/track-cases.jpg"
        alt="Track Investigations"
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-pink-400 mb-3">Track Investigations</h3>
        <p className="text-gray-300 mb-4">
          Monitor the progress of scam investigations and get updates on cases that matter to you.
        </p>
        <a href="/cases" className="text-pink-400 hover:text-pink-300 font-medium">
          Track Cases →
        </a>
      </div>
    </div>

    {/* Service 3 */}
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-pink-500/30 transition duration-300">
      <img
        src="/images/view-reports.jpg"
        alt="View Reports"
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-pink-400 mb-3">View Scam Reports</h3>
        <p className="text-gray-300 mb-4">
          Access our growing database of scam reports to stay informed and avoid falling victim.
        </p>
        <a href="/reports" className="text-pink-400 hover:text-pink-300 font-medium">
          View Reports →
        </a>
      </div>
    </div>
  </div>
</section>

<section className=" flex items-center justify-center bg-slate-800 text-white px-6 py-16">
  <div className="max-w-4xl text-center space-y-6">
    <h2 className="text-4xl font-bold">
      Your <span className="text-pink-500">Privacy</span> &{" "}
      <span className="text-pink-500">Safety</span> Are Guaranteed
    </h2>
    <p className="text-lg leading-relaxed text-gray-200">
      At CyberChain Labs, we take your security seriously.  
      Your data is encrypted, your transactions are protected,  
      and your identity remains confidential at all times.  
      You can focus on your goals while we safeguard your journey.
    </p>
    <p className="text-lg leading-relaxed text-gray-200">
      No compromises. No leaks. No exceptions.
    </p>
    <a
      href="#learn-more"
      className="inline-block px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-colors"
    >
      Learn More
    </a>
  </div>
</section>

<section className="bg-slate-900 min-h-screen py-16 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* Left side - Reports */}
    <div className="md:col-span-2 space-y-6">
      {[1, 2, 3].map((report, index) => (
        <div
          key={index}
          className="bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-700 hover:shadow-pink-500/30 transition"
        >
          <h3 className="text-xl font-bold text-pink-400 mb-2">
            Scam Report #{report}
          </h3>
          <p className="text-gray-300 mb-4">
            This is a short description of the scam report. It provides key
            details such as type, amount involved, and the date reported.
          </p>
          <div className="flex justify-between text-sm text-gray-400">
            <span>Category: Crypto Fraud</span>
            <span>Date: 2025-08-13</span>
          </div>
        </div>
      ))}
    </div>

    {/* Right side - Scam categories */}
    <div className="bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-700">
      <h3 className="text-2xl font-bold text-pink-400 mb-6">
        Scam Categories
      </h3>
      <div className="space-y-4">
        {/* Category 1 */}
        <div className="bg-slate-700 p-4 rounded-lg shadow hover:shadow-pink-500/30 transition">
          <h4 className="text-lg font-semibold text-pink-400 mb-2">
            Crypto Fraud
          </h4>
          <p className="text-gray-300 mb-3">
            Reports on scams involving cryptocurrency transactions and wallet theft.
          </p>
          <a href="#crypto-fraud" className="text-pink-400 hover:text-pink-300 font-medium">
            View Reports →
          </a>
        </div>

        {/* Category 2 */}
        <div className="bg-slate-700 p-4 rounded-lg shadow hover:shadow-pink-500/30 transition">
          <h4 className="text-lg font-semibold text-pink-400 mb-2">
            Phishing Attacks
          </h4>
          <p className="text-gray-300 mb-3">
            Information on phishing emails, fake websites, and malicious links.
          </p>
          <a href="#phishing" className="text-pink-400 hover:text-pink-300 font-medium">
            View Reports →
          </a>
        </div>

        {/* Category 3 */}
        <div className="bg-slate-700 p-4 rounded-lg shadow hover:shadow-pink-500/30 transition">
          <h4 className="text-lg font-semibold text-pink-400 mb-2">
            Investment Scams
          </h4>
          <p className="text-gray-300 mb-3">
            Cases of fake investments, Ponzi schemes, and fraudulent returns.
          </p>
          <a href="#investment" className="text-pink-400 hover:text-pink-300 font-medium">
            View Reports →
          </a>
        </div>
      </div>
    </div>

  </div>
</section>

<Footer />

    </div>
  );
};

export default Home;
