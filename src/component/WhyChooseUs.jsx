import React from "react";
import {
  UtensilsCrossed,
  Coffee,
  ChefHat,
} from "lucide-react";

const features = [
  {
    icon: UtensilsCrossed,
    title: "MENU FOR EVERY TASTE",
    description:
      "Lorem ipsum dolor sit amet consectetur. Felis eget sit sit scelerisque vestibulum. Urna faucibus amet massa lacus lorem.",
  },
  {
    icon: Coffee,
    title: "ALWAYS QUALITY BEANS",
    description:
      "Lorem ipsum dolor sit amet consectetur. Felis eget sit sit scelerisque vestibulum. Urna faucibus amet massa lacus lorem.",
  },
  {
    icon: ChefHat,
    title: "EXPERIENCED BARISTA",
    description:
      "Lorem ipsum dolor sit amet consectetur. Felis eget sit sit scelerisque vestibulum. Urna faucibus amet massa lacus lorem.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#041219] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="inline-block text-white text-sm tracking-[3px] uppercase relative pb-4">
            Features
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[#d98a45]" />
          </span>

          <h2 className="text-white text-4xl md:text-5xl font-bold mt-6 mb-6">
            Why people choose us?
          </h2>

          <p className="text-gray-400 leading-8 text-lg">
            Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc
            varius. Facilisis eget cras sit semper sit enim. Turpis aliquet at
            ac eu donec ut. Sagittis vestibulum at quis non massa netus.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="text-center group"
              >
                {/* Icon */}
                <div className="flex justify-center mb-10">
                  <Icon
                    size={60}
                    strokeWidth={1.5}
                    className="text-white transition duration-300 group-hover:text-[#d98a45]"
                  />
                </div>

                {/* Title */}
                <h3 className="text-white text-3xl font-bold uppercase mb-6">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-8 text-lg max-w-sm mx-auto">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}