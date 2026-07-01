"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex h-screen items-center justify-center from-stone-100 via-white to-stone-200 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-wide text-[#C9AC8C]">
            Green Hill Events
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Admin Control Panel
          </p>
        </div>

        <form className="space-y-5">

          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>

            <input id="email" type="email" placeholder="Enter your email"
              className="h-12 w-full rounded-lg border border-gray-300 px-4 text-gray-700 placeholder-gray-400 transition duration-200 
              focus:border-[#C9AC8C] focus:ring-2 focus:ring-[#C9AC8C]/20 focus:outline-none"/>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <div className="relative">
              <input id="password"  type={showPassword ? "text" : "password"} placeholder="Enter your password"
                className="h-12 w-full rounded-lg border border-gray-300 px-4 pr-12 text-gray-700 placeholder-gray-400 transition duration-200 
                focus:border-[#C9AC8C] focus:ring-2 focus:ring-[#C9AC8C]/20 focus:outline-none"
              />

              <button type="button" onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 transition hover:text-[#C9AC8C]">
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="h-12 w-full rounded-lg bg-[#C9AC8C] font-semibold text-white transition duration-300 hover:bg-[#b89671] hover:shadow-lg active:scale-[0.98]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default page


  


