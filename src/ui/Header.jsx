import React from "react";

export default function Header() {
  return (
    <header className="bg-[#F5EFE6] text-[#5B3A29] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 align-baseline ">
          <img src="logo-dark.png" alt="logo" className="w-20 h-auto" />
          <span className="text-xl font-bold tracking-wide">CabinStay</span>
        </div>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-black transition">
            Home
          </a>
          <a href="#" className="hover:text-black transition">
            Cabins
          </a>
          <a href="#" className="hover:text-black transition">
            About
          </a>
          <a href="#" className="hover:text-black transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
