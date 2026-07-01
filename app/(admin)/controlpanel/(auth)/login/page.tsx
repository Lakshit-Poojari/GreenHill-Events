"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#C9AC8C]">
            Green Hill Events
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Admin Control Panel
          </p>
        </div>

        <form className="space-y-6">

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 outline-none transition-all duration-200 focus:border-[#C9AC8C] focus:ring-2 focus:ring-[#C9AC8C]/20"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pr-12 text-gray-700 outline-none transition-all duration-200 focus:border-[#C9AC8C] focus:ring-2 focus:ring-[#C9AC8C]/20"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-gray-500 transition hover:text-[#C9AC8C]"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg bg-[#C9AC8C] py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-[#b89671] active:scale-[0.98]"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default page


  


