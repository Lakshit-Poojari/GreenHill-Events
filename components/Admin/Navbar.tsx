"use client";

import { Menu, LogOut } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-gray-800 bg-[#181616]">
      <div className="flex h-full items-center justify-between px-6">

        {/* Left */}
        <div className="flex items-center gap-4">
          <button className="lg:hidden text-white">
            <Menu size={24} />
          </button>

          <h2 className="text-lg font-semibold text-white">
            Dashboard
          </h2>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">

          <div className="text-right">
            <p className="text-sm text-white font-medium">
              Green Hill Admin
            </p>

            <p className="text-xs text-gray-400">
              SUPER_ADMIN
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600">
            <LogOut size={16} />
            Logout
          </button>

        </div>
      </div>
    </header>
  );
}