"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const page = () => {
  const [form, setform] = useState(
    {
      email: "",
      password: ""
    }
  )
  const [showPassword, setShowPassword] = useState(false);
  const [message, setmessage] = useState("")
  const [success, setsuccess] = useState("false")

  const handleChange = (e:React.ChangeEvent <HTMLInputElement | HTMLSelectElement>) =>{
    setform(
      {
        ...form,
        [e.target.name]: e.target.value
      }
    )
  }

  const handleSubmit = async(e:React.FormEvent) =>{
    e.preventDefault();
    try {
      const body = {
        email:form.email.trim().toLowerCase(),
        password:form.password
      }

      const response = await fetch("/api/auth/login",{
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

      const data = await response.json()

      if (response.ok) {
        setmessage(data.message)
        window.location.href = "/controlpanel/dashboard";
      }else {
        setmessage(data.message || "Invalid email or password");
      }


    } catch (error) {
        console.error(error);
        setmessage("Something went wrong");
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-[#101010] px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-700 bg-[#181616] p-8 shadow-2xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-wide text-[#C9AC8C]">
            Green Hill Events
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Admin Control Panel
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="h-12 w-full rounded-lg border border-gray-700 bg-[#232121] px-4 text-white placeholder-gray-500 transition-all duration-300 focus:border-[#C9AC8C] focus:ring-2 focus:ring-[#C9AC8C]/20 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="h-12 w-full rounded-lg border border-gray-700 bg-[#232121] px-4 pr-12 text-white placeholder-gray-500 transition-all duration-300 focus:border-[#C9AC8C] focus:ring-2 focus:ring-[#C9AC8C]/20 focus:outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 transition hover:text-[#C9AC8C]"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          <p
            className={`min-h-6 text-center text-sm font-medium ${
              message === "Login successful!"
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {message}
          </p>

          {/* Login Button */}
          <button
            type="submit"
            className="h-12 w-full rounded-lg bg-[#C9AC8C] font-semibold text-black shadow-lg transition-all duration-300 hover:bg-[#b89671] hover:shadow-xl active:scale-[0.98]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default page


  


