import React from "react";
import Phone1 from '/images/foodOrder/phone1.png'
import Phone2 from '/images/foodOrder/phone2.png'

export default function FoodShowcase() {
  const testimonials = [
    {
      color: "#f59e0b",
      text: "Lorem ipsum dolor sit amet consectetur. Suspendisse aliquet tellus adipiscing condimentum donec faucibus.",
    },
    {
      color: "#ef4444",
      text: "Lorem ipsum dolor sit amet consectetur. Suspendisse aliquet tellus adipiscing condimentum donec faucibus.",
    },
    {
      color: "#d946ef",
      text: "Lorem ipsum dolor sit amet consectetur. Suspendisse aliquet tellus adipiscing condimentum donec faucibus.",
    },
  ];

  const stats = [
    { number: "1287+", label: "VISITORS DAILY" },
    { number: "578+", label: "DELIVERIES MONTHLY" },
    { number: "1440+", label: "POSITIVE FEEDBACK" },
    { number: "40+", label: "AWARDS AND HONORS" },
  ];

  const foods = [
    {
      image:
        "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=1200",
      title: "Raspberry French Toast",
      price: "$12.50",
      oldPrice: "$13.20",
    },
    {
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200",
      title: "Raspberry French Toast",
      price: "$12.50",
      oldPrice: "$13.20",
    },
    {
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200",
      title: "Raspberry French Toast",
      price: "$12.50",
      oldPrice: "$13.20",
    },
  ];

  return (
    <section className="relative bg-[#031118] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-28">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#d89b52] uppercase tracking-[3px] text-xs">
            Features
          </span>

          <h2 className="text-white text-5xl font-bold mt-4 mb-6">
            Why people choose us?
          </h2>

          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc
            varius. Facilisis eget cras sit semper sit enim.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#081920] rounded-xl p-8 text-center"
            >
              <div
                className="text-4xl font-bold mb-6"
                style={{ color: item.color }}
              >
                “
              </div>

              <p className="text-gray-400 text-sm leading-7 mb-6">
                {item.text}
              </p>

              <div className="text-yellow-400 text-lg">★★★★★</div>

              <p className="text-gray-500 text-xs mt-2">Business Man</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-10">
          <div className="w-2 h-2 rounded-full bg-[#d89b52]" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center mt-24 pb-24">
          {stats.map((item, index) => (
            <div key={index}>
              <h3 className="text-white text-4xl font-bold">
                {item.number}
              </h3>

              <p className="text-gray-400 text-xs tracking-wider mt-3">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-[420px]">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
          <div>
            <h2 className="text-white text-5xl font-bold leading-tight">
              Simple Way To
              <br />
              Order Your Foods
            </h2>

            <div className="flex gap-4 mt-10 flex-wrap">
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold">
                Google Play
              </button>

              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold">
                Apple Store
              </button>
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-170px] z-30 flex gap-8">
          <img
            src={Phone1}
            alt=""
            className="w-[220px] drop-shadow-[0_20px_50px_rgba(0,0,0,.5)]"
          />

          <img
            src={Phone2}
            alt=""
            className="w-[220px] mt-16 drop-shadow-[0_20px_50px_rgba(0,0,0,.5)]"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-[250px] pb-28">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#d89b52] uppercase tracking-[3px] text-xs">
            Menu
          </span>

          <h2 className="text-white text-5xl font-bold mt-4 mb-6">
            Explore Our Foods
          </h2>

          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc
            varius. Facilisis eget cras sit semper sit enim.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {foods.map((food, index) => (
            <div
              key={index}
              className="bg-[#081920] rounded-xl overflow-hidden"
            >
              <img
                src={food.image}
                alt=""
                className="w-full h-[260px] object-cover"
              />

              <div className="p-6">
                <h3 className="text-white text-xl font-semibold mb-3">
                  {food.title}
                </h3>

                <p className="text-gray-500 text-sm mb-4">
                  Time: 10 - 15 Minutes | Serve: 1
                </p>

                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[#d89b52] font-bold text-xl">
                    {food.price}
                  </span>

                  <span className="line-through text-gray-500">
                    {food.oldPrice}
                  </span>
                </div>

                <button className="bg-[#d89b52] text-white px-5 py-2 text-sm font-medium">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}