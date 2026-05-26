import React from "react";
import BGIMAGE from '/images/foodOrder/bg-image.png'
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
      <div className="max-w-7xl mx-auto px-6 py-28">
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center mt-24 pb-20">
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

      <div className="relative h-120 px-10 flex justify-around">
        <img src={BGIMAGE} alt="Food Ordering Background Image" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 max-w-6xl h-full px-6 flex items-center">
          <div>
            <h2 className="text-white text-5xl font-semibold leading-tight">
              Simple Way To <br /> Order Your Foods
            </h2>

            <div className="flex flex-wrap gap-5 mt-12">
              <button className="group bg-white rounded-xl p-4 flex items-center gap-4 shadow-lg hover:-translate-y-1 transition-all duration-300">
                
                <svg width="36" height="40" viewBox="0 0 37 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <g clipPath="url(#clip0)">
                    <path d="M16.8975 19.0693L0.149414 36.6163C0.337494 37.2829 0.675479 37.8976 1.13753 38.4134C1.59959 38.9293 2.17348 39.3327 2.81534 39.5928C3.45719 39.8529 4.15002 39.9628 4.84086 39.9142C5.5317 39.8655 6.20226 39.6594 6.80129 39.3119L25.6461 28.5792L16.8975 19.0693Z" fill="#EA4335"/>
                    <path d="M33.8337 16.0866L25.6846 11.4189L16.5117 19.4684L25.7219 28.5539L33.809 23.9363C34.5254 23.5611 35.1255 22.9971 35.5441 22.3052C35.9628 21.6133 36.1842 20.8201 36.1842 20.0114C36.1842 19.2027 35.9628 18.4094 35.5441 17.7176C35.1255 17.0257 34.5254 16.4616 33.809 16.0865L33.8337 16.0866Z" fill="#FBBC04"/>
                    <path d="M0.149821 3.31982C0.0486472 3.69409 -0.00174537 4.08026 0 4.46795V35.4682C0.000996972 35.8558 0.051343 36.2417 0.149821 36.6165L17.4721 19.5188L0.149821 3.31982Z" fill="#4285F4"/>
                    <path d="M17.0223 19.9681L25.6835 11.4192L6.86376 0.636475C6.15567 0.221805 5.35034 0.00219444 4.52977 8.6686e-06C2.49344 -0.00394893 0.703195 1.34757 0.149414 3.30729L17.0223 19.9681Z" fill="#34A853"/>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="36.1837" height="40" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>

                <div className="text-left">
                  <p className="text-[10px] uppercase font-medium tracking-wide text-black">Get iton</p>
                  <h3 className="text-[24px] leading-none font-semibold text-black">Google Play</h3>
                </div>
              </button>

              <button className="group bg-white rounded-xl px-6 py-4 flex items-center gap-4 shadow-lg hover:-translate-y-1 transition-all duration-300">
                
                <svg width="30" height="34" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" >
                  <path d="M21.0618 28.8C19.4285 30.3833 17.6451 30.1333 15.9285 29.3833C14.1118 28.6167 12.4451 28.5833 10.5285 29.3833C8.12846 30.4167 6.8618 30.1167 5.42846 28.8C-2.70487 20.4167 -1.50487 7.65 7.72846 7.18333C9.97846 7.3 11.5451 8.41667 12.8618 8.51667C14.8285 8.11667 16.7118 6.96667 18.8118 7.11667C21.3285 7.31667 23.2285 8.31667 24.4785 10.1167C19.2785 13.2333 20.5118 20.0833 25.2785 22C24.3285 24.5 23.0951 26.9833 21.0451 28.8167L21.0618 28.8ZM12.6951 7.08333C12.4451 3.36667 15.4618 0.3 18.9285 0C19.4118 4.3 15.0285 7.5 12.6951 7.08333Z" fill="black" />
                </svg>

                <div className="text-left">
                  <p className="text-[10px] uppercase font-medium tracking-wide text-black">Get iton</p>
                  <h3 className="text-[24px] leading-none font-semibold text-black">Apple Store</h3>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="flex mr-20">
          <img src={Phone1} alt="Food Delivery Home Page Screen"
            className="w-64 h-142 -mt-20 px-1 drop-shadow-[0_20px_50px_rgba(0,0,0,.5)]" />

          <img src={Phone2} alt="Food Delivery Details Page Screen"
            className="w-64 h-140 px-1 drop-shadow-[0_20px_50px_rgba(0,0,0,.5)]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-62.5 pb-28">
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
                className="w-full h-65 object-cover"
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