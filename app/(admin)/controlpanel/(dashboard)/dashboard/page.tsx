import React from 'react'

const page = () => {
  return (
<div className="space-y-8">
  {/* Welcome */}
  <div className="rounded-xl border border-gray-700 bg-[#181616] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-[0_12px_35px_rgba(201,172,140,0.18)]">
    <h1 className="text-3xl font-bold text-white">
      Dashboard
    </h1>

    <p className="mt-2 text-gray-400">
      Welcome to the Green Hill Admin Panel.
    </p>
  </div>

  {/* Stats */}
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <div className="rounded-xl border border-gray-700 bg-[#181616] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C9AC8C] hover:shadow-[0_12px_35px_rgba(201,172,140,0.18)]">
      <p className="text-sm text-gray-400">Posts</p>
      <h2 className="mt-2 text-3xl font-bold text-white">24</h2>
    </div>

    <div className="rounded-xl border border-gray-700 bg-[#181616] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C9AC8C] hover:shadow-[0_12px_35px_rgba(201,172,140,0.18)]">
      <p className="text-sm text-gray-400">Comments</p>
      <h2 className="mt-2 text-3xl font-bold text-white">12</h2>
    </div>

    <div className="rounded-xl border border-gray-700 bg-[#181616] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C9AC8C] hover:shadow-[0_12px_35px_rgba(201,172,140,0.18)]">
      <p className="text-sm text-gray-400">Users</p>
      <h2 className="mt-2 text-3xl font-bold text-white">58</h2>
    </div>
  </div>

  {/* Quick Actions */}
  <div className="rounded-xl border border-gray-700 bg-[#181616] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-[0_12px_35px_rgba(201,172,140,0.18)]">
    <h2 className="text-xl font-semibold text-white">
      Quick Actions
    </h2>

    <div className="mt-4 flex flex-wrap gap-4">
      <button className="rounded-lg bg-[#C9AC8C] px-5 py-2 font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(201,172,140,0.4)]">
        Add Post
      </button>

      <button className="rounded-lg bg-[#C9AC8C] px-5 py-2 font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(201,172,140,0.4)]">
        Manage Comments
      </button>

      <button className="rounded-lg bg-[#C9AC8C] px-5 py-2 font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(201,172,140,0.4)]">
        Add User
      </button>
    </div>
  </div>
</div>
  )
}

export default page