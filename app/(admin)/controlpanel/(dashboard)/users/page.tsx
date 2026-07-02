"use client";

import Link from "next/link";
import { Edit, Plus, Search, Trash2 } from "lucide-react";

const users = [
  {
    id: 1,
    name: "Green Hill Admin",
    email: "admin@greenhill.com",
    role: "SUPER_ADMIN",
    status: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    email: "john@greenhill.com",
    role: "ADMIN",
    status: "Active",
  },
  {
    id: 3,
    name: "Emma Watson",
    email: "emma@greenhill.com",
    role: "ADMIN",
    status: "Inactive",
  },
];

export default function UserManagementPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            User Management
          </h1>

          <p className="mt-1 text-gray-500">
            Manage administrator accounts.
          </p>
        </div>

        <Link
          href="/controlpanel/users/create"
          className="inline-flex items-center gap-2 rounded-lg bg-[#C9AC8C] px-5 py-3 font-medium text-white transition hover:opacity-90"
        >
          <Plus size={18} />
          Add Admin
        </Link>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col gap-4 rounded-xl border bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
        <div className="relative w-full max-w-md">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search by name or email..."
            className="w-full rounded-lg border py-2.5 pl-10 pr-4 outline-none focus:border-[#C9AC8C]"
          />
        </div>

        <select className="rounded-lg border px-4 py-2.5 outline-none focus:border-[#C9AC8C]">
          <option>All Roles</option>
          <option>SUPER_ADMIN</option>
          <option>ADMIN</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-6 py-4 font-semibold">Name</th>
                <th className="px-6 py-4 font-semibold">Email</th>
                <th className="px-6 py-4 font-semibold">Role</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 text-center font-semibold">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="px-6 py-4 font-medium">
                    {user.name}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {user.email}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        user.role === "SUPER_ADMIN"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {user.role.replace("_", " ")}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-3">
                      <button className="rounded-lg bg-blue-50 p-2 text-blue-600 transition hover:bg-blue-100">
                        <Edit size={18} />
                      </button>

                      <button
                        disabled={user.role === "SUPER_ADMIN"}
                        className={`rounded-lg p-2 transition ${
                          user.role === "SUPER_ADMIN"
                            ? "cursor-not-allowed bg-gray-100 text-gray-400"
                            : "bg-red-50 text-red-600 hover:bg-red-100"
                        }`}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t px-6 py-4 text-sm text-gray-500">
          <span>Showing {users.length} users</span>

          <span>Total: {users.length}</span>
        </div>
      </div>
    </div>
  );
}