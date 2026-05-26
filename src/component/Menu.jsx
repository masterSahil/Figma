import React from "react";

const foods = [
  {
    id: 1,
    title: "Raspberry French Toast",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop",
    price: "$12.50",
    oldPrice: "$13.20",
  },
  {
    id: 2,
    title: "Raspberry French Toast",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    price: "$12.50",
    oldPrice: "$13.20",
  },
  {
    id: 3,
    title: "Raspberry French Toast",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1200&auto=format&fit=crop",
    price: "$12.50",
    oldPrice: "$13.20",
  },
];

export default function MenuSection() {
  return (
    <section className="relative overflow-hidden bg-[#07141b] py-24">
      {/* background glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-1/2 top-0 h-full w-[900px] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(255,153,51,0.08),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5">
        {/* heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="relative inline-block text-sm font-medium uppercase tracking-[3px] text-white">
            Menu
            <span className="absolute left-1/2 top-full mt-2 h-[2px] w-10 -translate-x-1/2 bg-[#d88a3d]" />
          </span>

          <h2 className="mt-8 text-4xl font-bold text-white md:text-5xl">
            Explore Our Foods
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-gray-400">
            Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc
            varius. Facilisis eget cras sit semper sit enim. Turpis aliquet at
            ac eu donec ut.
          </p>
        </div>

        {/* cards */}
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {foods.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-xl border border-white/5 bg-[#0c1a22] shadow-[0_15px_40px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(216,138,61,0.15)]"
            >
              {/* image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* content */}
              <div className="p-6">
                <h3 className="text-[30px] font-semibold leading-tight text-[#d88a3d]">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-400">
                  Time: 10 - 15 Minutes | Serves: 1
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <span className="text-4xl font-bold text-[#d88a3d]">
                    {item.price}
                  </span>

                  <span className="text-3xl text-gray-500 line-through">
                    {item.oldPrice}
                  </span>
                </div>

                <button className="mt-6 rounded-md bg-[#d88a3d] px-7 py-3 font-medium text-black transition-all duration-300 hover:bg-[#e69b4c] hover:shadow-lg hover:shadow-[#d88a3d]/30">
                  Order Now
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}