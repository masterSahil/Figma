import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from '/images/logo/logo.png'

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [ "Home", "Pages", "Menu", "Order", "Blog", "Contact", "Shop" ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div>
            <img src={Logo} alt="Nest Text Logo" />
          </div>

          <ul className="hidden lg:flex items-center gap-10 text-white">
            {links.map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:text-orange-400 transition">{link}</a>
              </li>
            ))}
          </ul>

          <button className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded">Reservation</button>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-white">{open ? <X size={28} /> : <Menu size={28} />}</button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md">
          <ul className="flex flex-col text-white p-6 gap-5">
            {links.map((link, index) => (
              <li key={index}>
                <a href="#">{link}</a>
              </li>
            ))}

            <button className="bg-orange-500 py-3 rounded mt-2">Reservation</button>
          </ul>
        </div>
      )}
    </nav>
  );
}