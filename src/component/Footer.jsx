import React from "react";
// import {
// //   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
// } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-[#031118]">
      {/* Newsletter Banner */}
      <section
        className="relative min-h-[450px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <span className="uppercase tracking-[3px] text-sm text-white relative pb-3 inline-block">
              News Letter
              <span className="absolute left-0 bottom-0 w-12 h-[2px] bg-[#d88a45]" />
            </span>

            <h2 className="text-white text-5xl lg:text-6xl font-bold mt-6 mb-6">
              Subscribe Our Newsletter
            </h2>

            <p className="text-gray-300 text-lg max-w-3xl leading-8 mb-10">
              Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc
              varius. Facilisis eget cras sit semper sit enim. Turpis aliquet
              at ac eu donec ut.
            </p>

            <form className="flex flex-col md:flex-row gap-4 max-w-4xl">
              <input
                type="email"
                placeholder="Type here"
                className="flex-1 h-16 px-8 bg-[#0b2a30] text-white placeholder:text-gray-400 outline-none"
              />

              <button className="h-16 px-10 bg-[#d88a45] text-white font-semibold hover:bg-[#c67d3d] transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-16">
            {/* Company */}
            <div>
              <h2 className="text-white text-3xl font-bold mb-8">
                TasteNest
              </h2>

              <p className="text-gray-400 leading-8 mb-10">
                Lorem ipsum dolor sit amet consectetur. Tristique cursus morbi
                nibh nec et vulputate. Turpis tortor nisi imperdiet quis
                accumsan.
              </p>

              <div className="flex gap-5">
                {[
                  
                ].map((Icon, index) => (
                  <div
                    key={index}
                    className="w-14 h-14 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-[#d88a45] hover:text-white transition"
                  >
                    
                  </div>
                ))}
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-white text-2xl font-semibold mb-8">
                Opening Restaurant
              </h3>

              <div className="space-y-5 text-gray-400">
                <p>Sa - We: 09:00am - 10:00pm</p>
                <p>Thu - We: 09:00am - 10:00pm</p>
                <p>Friday Closed</p>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-white text-2xl font-semibold mb-8">
                User Link
              </h3>

              <ul className="space-y-5 text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#d88a45]">
                    About Us
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-[#d88a45]">
                    Contact Us
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-[#d88a45]">
                    Order Delivery
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-[#d88a45]">
                    Payment & Tax
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-[#d88a45]">
                    Terms of Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white text-2xl font-semibold mb-8">
                Contact Us
              </h3>

              <div className="text-gray-400 leading-8 mb-10">
                <p>543 Country Club Ave,</p>
                <p>NC 27587, London, UK</p>
                <p>+1257 6541120</p>
              </div>

              <div className="bg-white rounded-md p-2 flex">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-5 outline-none text-gray-700"
                />

                <button className="bg-[#d88a45] text-white px-8 py-3 rounded">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}