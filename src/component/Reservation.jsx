import React from "react";

export default function WorkingHours() {
  return (
    <section
      className="relative min-h-[650px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[650px]">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <span className="uppercase text-white tracking-[3px] text-sm relative inline-block pb-3">
                Reservation
                <span className="absolute left-0 bottom-0 w-14 h-[2px] bg-[#d98a45]" />
              </span>
            </div>

            <h2 className="text-white text-5xl md:text-6xl font-bold mb-10">
              Working Hours
            </h2>

            <div className="flex flex-wrap gap-5">
              <button className="bg-[#d98a45] hover:bg-[#c27b38] transition px-8 py-4 text-white font-semibold uppercase">
                Book A Table
              </button>

              <button className="text-white font-semibold uppercase hover:text-[#d98a45] transition">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-[#07161d] w-full max-w-[420px] rounded-md p-12 shadow-2xl">
              <div className="text-center">
                <h3 className="text-white text-4xl font-bold mb-6">
                  Sunday to Tuesday
                </h3>

                <p className="text-gray-300 text-2xl">
                  09:00 AM - 10.00 PM
                </p>
              </div>

              <div className="h-px bg-white/10 my-14" />

              <div className="text-center">
                <h3 className="text-white text-4xl font-bold mb-6">
                  Friday to Saturday
                </h3>

                <p className="text-gray-300 text-2xl">
                  09:00 AM - 10.00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}