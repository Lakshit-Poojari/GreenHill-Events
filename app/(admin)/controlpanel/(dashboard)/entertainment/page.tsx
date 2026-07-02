import { FolderKanban, LayoutGrid } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
        <div className="space-y-8">
            {/* Header */}
            <div className="rounded-xl border  bg-[#181616] border-gray-700 p-8 shadow-sm">
                <h1 className="text-3xl font-bold text-white">
                Entertainment Dashboard
                </h1>

                <p className="mt-2 text-[#C9AC8C]">
                Manage entertainment offerings, categories, and performers from one
                place.
                </p>
            </div>

            {/* Cards */}
            <div className="grid gap-6  md:grid-cols-2">

                {/* Categories */}
                <Link href="/controlpanel/entertainment/categories"
                    className="group  rounded-xl border  bg-[#181616] border-gray-700 p-6 shadow-sm transition 
                    hover:-translate-y-1  hover:border-[#C9AC8C]  hover:shadow-[0_12px_35px_rgba(201,172,140,0.8)]" >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center  rounded-lg bg-[#C9AC8C]/15 text-[#C9AC8C]">
                        <LayoutGrid size={28} />
                    </div>

                    <h2 className="text-xl font-semibold text-white ">
                        Categories
                    </h2>

                    <p className="mt-2 text-sm text-gray-400">
                        Organize entertainment into categories and manage category details.
                    </p>

                    <div className="mt-6 text-sm font-medium text-[#C9AC8C]">
                        Manage Categories →
                    </div>
                </Link>

                {/* Offerings */}
                <Link href="/controlpanel/entertainment/offering"
                    className="group rounded-xl border  bg-[#181616] border-gray-700 p-6 shadow-sm transition 
                    hover:-translate-y-1 hover:border-[#C9AC8C]  hover:shadow-[0_12px_35px_rgba(201,172,140,0.8)]">

                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-[#C9AC8C]/15 text-[#C9AC8C]">
                        <FolderKanban size={28} />
                    </div>

                    <h2 className="text-xl font-semibold text-white group-hover:text-[#C9AC8C] ">
                        Offerings
                    </h2>

                    <p className="mt-2 text-sm text-gray-400">
                        Create, edit, and manage entertainment offerings available on the
                        website.
                    </p>

                    <div className="mt-6 text-sm font-medium text-[#C9AC8C]">
                        Manage Offerings →
                    </div>
                </Link>

            </div>
        </div>
    </>
  )
}

export default page