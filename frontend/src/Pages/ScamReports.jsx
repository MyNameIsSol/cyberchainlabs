// src/pages/ViewScamReports.jsx
import { useState } from "react";
import { Bitcoin, Coins } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const coinsData = [
  { name: "Bitcoin", icon: <Bitcoin className="w-5 h-5 text-white" />, count: 120 },
  { name: "Ethereum", icon: <Coins className="w-5 h-5 text-white" />, count: 95 },
  { name: "USDT", icon: <Coins className="w-5 h-5 text-white" />, count: 70 },
  { name: "BNB", icon: <Coins className="w-5 h-5 text-white" />, count: 55 },
  { name: "Solana", icon: <Coins className="w-5 h-5 text-white" />, count: 40 },
  { name: "XRP", icon: <Coins className="w-5 h-5 text-white" />, count: 32 },
  { name: "Litecoin", icon: <Coins className="w-5 h-5 text-white" />, count: 28 },
  { name: "Cardano", icon: <Coins className="w-5 h-5 text-white" />, count: 22 },
  { name: "Dogecoin", icon: <Coins className="w-5 h-5 text-white" />, count: 18 },
  { name: "Polygon", icon: <Coins className="w-5 h-5 text-white" />, count: 15 },
];

const categoriesData = [
  { name: "Investment Scam", count: 45 },
  { name: "Phishing", count: 32 },
  { name: "Rug Pull", count: 28 },
  { name: "Wallet Hack", count: 21 },
  { name: "Exchange Fraud", count: 19 },
];

const scamReports = Array.from({ length: 10 }, (_, i) => ({
  title: `Scam Incident #${i + 1}`,
  description:
    "User reported losing funds to a fraudulent address claiming to be an investment firm.",
  cryptoAddress: `0xABCDEF123456789${i}`,
  date: "2025-08-13",
}));

export default function ViewScamReports() {
  const [page, setPage] = useState(1);

  return (
    <div>
    <Navbar />
    <div className="bg-slate-800 min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Side */}
          <div className="lg:col-span-2 space-y-4">
            {scamReports.map((report, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-pink-300 shadow-sm rounded-xl p-4"
              >
                <h3 className="text-lg font-semibold text-white">{report.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{report.description}</p>
                <p className="mt-2 text-xs text-gray-500">
                  <span className="font-medium">Address:</span> {report.cryptoAddress}
                </p>
                <p className="text-xs text-gray-500">Date: {report.date}</p>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-4">
              {[1, 2, 3, 4, 5].map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`px-3 py-1 rounded-md ${
                    page === p
                      ? "bg-gradient-to-br from-pink-500 to-pink-700 text-white"
                      : "bg-white border border-pink-300 text-gray-600"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            {/* Coins List */}
            <div className="bg-slate-900 border border-slate-200 shadow-sm rounded-xl p-4">
              <h4 className="text-lg font-semibold bg-gradient-to-br from-pink-400 to-pink-600 text-transparent bg-clip-text mb-4">
                Coins Involved
              </h4>
              <div className="divide-y divide-slate-200">
                {coinsData.map((coin, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      {coin.icon}
                      <span className="text-gray-400">{coin.name}</span>
                    </div>
                    <span className="text-gray-600 text-sm">{coin.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories List */}
            <div className=" bg-slate-900 border border-slate-200 shadow-sm rounded-xl p-4">
              <h4 className="text-lg font-semibold bg-gradient-to-br from-pink-400 to-pink-600 text-transparent bg-clip-text mb-4">
                Categories
              </h4>
              <div className="divide-y divide-slate-200">
                {categoriesData.map((cat, idx) => (
                  <div key={idx} className="flex justify-between py-2">
                    <span className="text-gray-600">{cat.name}</span>
                    <span className="text-gray-400 text-sm">{cat.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
</div>
      <Footer />
    </div>
  );
}
