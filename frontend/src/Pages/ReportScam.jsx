import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";

const categories = ["Crypto Fraud", "Phishing", "Investment Scam", "Ponzi Scheme"];

export default function ReportScam() {
  const [tab, setTab] = useState(0);
  const [form, setForm] = useState({
    category: "",
    entity: "",
    chain: "",
    description: "",
    amountLost: "",
    date: "",
    contactLE: false,
    showPublic: true,
    evidence: null
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  return (
    <div>
        <Navbar />
    <div className="flex items-center justify-center min-h-screen bg-slate-800 text-white">
      

      <main className="flex-grow p-6">
        <div className="max-w-3xl mx-auto bg-slate-900 rounded-xl p-8 shadow-lg">
          {/* Tabs */}
          <div className="flex space-x-4 mb-6 text-sm">
            {["Scam Details", "Your Experience", "Evidence & Contact"].map((title, idx) => (
              <button
                key={idx}
                onClick={() => setTab(idx)}
                className={`px-3 py-2 ${tab === idx
                  ? "border-b-2 border-pink-400 font-semibold"
                  : "text-gray-400 hover:text-pink-400"}`}
              >
                {title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {tab === 0 && (
            <div className="space-y-4">
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full p-2 rounded bg-slate-700"
              >
                <option value="">Select Category</option>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <input
                type="text"
                name="entity"
                placeholder="Scam URL or Crypto Address"
                value={form.entity}
                onChange={handleChange}
                className="w-full p-2 rounded bg-slate-700"
              />
              <input
                type="text"
                name="chain"
                placeholder="Blockchain (optional)"
                value={form.chain}
                onChange={handleChange}
                className="w-full p-2 rounded bg-slate-700"
              />
            </div>
          )}

          {tab === 1 && (
            <div className="space-y-4">
              <textarea
                name="description"
                placeholder="Describe what happened"
                value={form.description}
                onChange={handleChange}
                className="w-full p-2 rounded bg-slate-700"
                rows="4"
              />
              <input
                type="text"
                name="amountLost"
                placeholder="Amount lost (e.g. 1000 USD)"
                value={form.amountLost}
                onChange={handleChange}
                className="w-full p-2 rounded bg-slate-700"
              />
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full p-2 rounded bg-slate-700"
              />
            </div>
          )}

          {tab === 2 && (
            <div className="space-y-4">
              <input
                type="file"
                name="evidence"
                onChange={e => setForm(prev => ({ ...prev, evidence: e.target.files[0] }))}
                className="w-full text-gray-300"
              />
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  name="contactLE"
                  checked={form.contactLE}
                  onChange={handleChange}
                />
                I agree Law Enforcement may contact me
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  name="showPublic"
                  checked={form.showPublic}
                  onChange={handleChange}
                />
                Allow public summary (no PII)
              </label>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-6 flex justify-between">
            <button
              disabled={tab === 0}
              onClick={() => setTab(tab - 1)}
              className="px-4 py-2 bg-slate-700 rounded hover:bg-slate-600"
            >
              Back
            </button>
            {tab < 2 ? (
              <button
                onClick={() => setTab(tab + 1)}
                className="px-4 py-2 bg-pink-400 rounded hover:bg-pink-500 flex items-center gap-2"
              >
                Next <ArrowRight size={16} />
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-full font-semibold"
              >
                Submit Report
              </button>
            )}
          </div>
        </div>
      </main>
      </div>

      <Footer />
    </div>
  );
}
