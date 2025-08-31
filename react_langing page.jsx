import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-black bg-opacity-70 fixed top-0 left-0 right-0 z-50">
        <div className="text-2xl font-bold tracking-widest">STYLE.AI</div>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">Trends</a></li>
            <li><a href="#" className="hover:text-gray-300">Cultural Picks</a></li>
            <li><a href="/login" className="hover:text-gray-300">Login</a></li>
            <li>
              <a
                href="/signup"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-semibold"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-col justify-center items-center text-center flex-1 pt-32 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          AI-Powered Outfit Prediction
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Upload your look & get instant fashion insights with cultural trends.
        </p>
        <label className="cursor-pointer bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg font-semibold">
          Upload Outfit
          <input type="file" id="upload" hidden />
        </label>
      </section>

      {/* Predictions */}
      <section className="px-6 py-12 bg-gray-800">
        <h2 className="text-3xl font-semibold mb-8 text-center">Predicted Outfit</h2>
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          <img
            id="outfit-img"
            src="/assets/images/sample.jpg"
            alt="Outfit"
            className="w-full md:w-1/2 object-cover"
          />
          <div className="p-6 flex flex-col justify-center">
            <h3 id="outfit-title" className="text-2xl font-bold mb-2">
              Beige Sweater & Wide Pants
            </h3>
            <p id="outfit-desc" className="mb-4 text-gray-300">
              This cozy neutral-toned outfit is trending in Autumn/Winter 2025,
              inspired by Scandinavian minimalism and modern office chic.
            </p>
            <span className="trend text-indigo-400 font-medium">
              Trend: Minimalist Cozy Wear
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black bg-opacity-80 text-center py-4 text-sm">
        © 2025 Style.AI | Fashion by Prediction
      </footer>
    </div>
  );
}
