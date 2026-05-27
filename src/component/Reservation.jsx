import React from "react";

export default function WorkingHours() {
  return (
    <section id="Reservation" className="relative h-150 bg-working-hours-img bg-cover bg-center bg-no-repeat">
      <div className=" h-full max-w-7xl 2xl:max-w-360 mx-auto">
        <div className="grid lg:grid-cols-2 h-full items-center">
          <div>
            <div className="mb-8">
              <span className="uppercase text-white tracking-[3px] text-sm relative inline-block pb-3">Reservation
                <span className="absolute left-0 bottom-0 w-14 h-0.5 bg-[#d98a45]" />
              </span>
            </div>
            <h2 className="text-white text-5xl md:text-6xl font-bold mb-10">Working Hours</h2>
            <div className="flex flex-wrap gap-5">
              <button className="bg-[#d98a45] hover:bg-[#c27b38] transition px-8 py-4 text-white font-semibold uppercase">Book A Table</button>
              <button className="text-white font-semibold uppercase hover:text-[#d98a45] transition">Contact Us</button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="bg-[#07161d] w-full max-w-105 rounded-md p-12 shadow-2xl">
              <div className="text-center">
                <h3 className="text-white text-4xl font-bold mb-6">Sunday to Tuesday</h3>
                <p className="text-gray-300 text-2xl">09:00 AM - 10.00 PM</p>
              </div>
              <div className="h-px bg-white/10 my-14" />
              <div className="text-center">
                <h3 className="text-white text-4xl font-bold mb-6">Friday to Saturday</h3>
                <p className="text-gray-300 text-2xl">09:00 AM - 10.00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}