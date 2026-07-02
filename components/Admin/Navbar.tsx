"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="h-16 border-b bg-#0000">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">

        <h1 className="text-2xl font-bold text-[#C9AC8C]">
          Green Hill Admin
        </h1>

        <nav className="flex items-center gap-8">

          <Link href="/controlpanel/dashboard">Dashboard</Link>

          <Link href="/controlpanel/entertainment">Entertainment</Link>

          <Link href="/controlpanel/posts">Posts</Link>

          <Link href="/controlpanel/comments">Comments</Link>

          {/* Show only if SUPER_ADMIN */}
          <Link href="/controlpanel/users">Users</Link>

        </nav>

        <div className="flex items-center gap-4">

          <span className="font-medium">
            Admin
          </span>

          <button className="rounded-md bg-red-500 px-4 py-2 text-white">
            Logout
          </button>

        </div>

      </div>
    </header>
  );
}