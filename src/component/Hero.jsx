import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex items-center justify-between">
          {/* Logo */}
          <div>
            <h1 className="text-white text-3xl font-bold tracking-wide">
              TasteNest
            </h1>
            <p className="text-[10px] text-gray-300 uppercase tracking-[3px]">
              Fast Food Restaurant
            </p>
          </div>

          {/* Menu */}
          <ul className="hidden lg:flex items-center gap-12 text-white">
            <li className="relative">
              <a href="#" className="font-medium">
                Home
              </a>

              <span className="absolute left-0 -bottom-3 w-full h-[2px] bg-orange-400"></span>
            </li>

            <li>
              <a href="#">Pages</a>
            </li>

            <li>
              <a href="#">Menu</a>
            </li>

            <li>
              <a href="#">Order</a>
            </li>

            <li>
              <a href="#">Blog</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>

            <li>
              <a href="#">Shop</a>
            </li>
          </ul>

          {/* Reservation Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 uppercase text-sm tracking-wider font-medium transition">
            Reservation
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div>
          <p className="uppercase text-white tracking-[4px] text-sm mb-5">
            Hello, New Friend
          </p>

          <h1 className="text-white font-bold text-5xl md:text-7xl lg:text-8xl uppercase">
            Reserve Your Table
          </h1>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <button className="border border-white text-white px-8 py-4 uppercase font-medium hover:bg-white hover:text-black transition">
              Book A Table
            </button>

            <button className="text-white px-8 py-4 uppercase font-medium hover:text-orange-400 transition">
              Open Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}