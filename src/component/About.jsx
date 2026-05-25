import React from "react";

const data = [
  {
    tag: "ABOUT US",
    title: "We Invite You to Visit Our Coffee House",
    desc: "Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius. Facilisis eget cras sit semper sit enim. Turpis aliquet at ac eu donec ut.",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1200",
  },
  {
    tag: "COFFEE MENU",
    title: "Quality Kava Beans",
    desc: "Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius. Facilisis eget cras sit semper sit enim. Turpis aliquet at ac eu donec ut.",
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1200",
    reverse: true,
  },
  {
    tag: "OUR TEAM",
    title: "Use the Tips & Recipes of Our Barista",
    desc: "Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius. Facilisis eget cras sit semper sit enim. Turpis aliquet at ac eu donec ut.",
    image:
      "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1200",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-[#06141b] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-20">
          {data.map((item, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-14 items-center ${
                item.reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Content */}
              <div className="max-w-md">
                <p className="text-[11px] uppercase tracking-[3px] text-white/70 relative inline-block mb-6">
                  {item.tag}
                  <span className="absolute -bottom-2 left-0 w-10 h-[2px] bg-orange-500"></span>
                </p>

                <h2 className="text-white text-4xl font-bold leading-tight mb-6">
                  {item.title}
                </h2>

                <p className="text-gray-400 leading-8 text-sm mb-8">
                  {item.desc}
                </p>

                <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 text-white text-xs uppercase tracking-wider font-semibold">
                  Read More
                </button>
              </div>

              {/* Image */}
              <div className="group">
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-[450px] object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}