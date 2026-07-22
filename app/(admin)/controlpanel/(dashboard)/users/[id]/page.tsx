"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Edit } from "lucide-react";
import { useParams } from "next/navigation";

interface User {
  id: number;
  full_name: string;
  email: string;
  role: "SUPER_ADMIN" | "ADMIN";
  status: "ACTIVE" | "INACTIVE";
  created_at: string;
  updated_at: string;
}

const Page = () => {
  const { id } = useParams();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      setLoading(true);

      const response = await fetch(`/api/users/${id}`, {
        credentials: "include",
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      setUser(result.user);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <p className="text-lg text-gray-400">Loading user...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-6 text-center text-red-400">
        User not found.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <Link
            href="/controlpanel/users"
            className="mb-3 inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-[#181616] px-4 py-2 text-sm 
              font-medium text-white transition hover:border-[#C9AC8C] hover:text-[#C9AC8C]"
          >
            <ArrowLeft size={18} />
            Back to Users
          </Link>

          <h1 className="text-3xl font-bold text-white">View User</h1>

          <p className="mt-1 text-[#C9AC8C]">Administrator details</p>
        </div>

        <Link
          href={`/controlpanel/users/${user.id}/edit`}
          className="inline-flex items-center gap-2 rounded-lg bg-[#C9AC8C] px-5 py-3 font-medium text-black transition 
            hover:opacity-90"
        >
          <Edit size={18} />
          Edit User
        </Link>
      </div>

      {/* User Details */}
      <div className="grid gap-6 rounded-xl border border-gray-700 bg-[#181616] p-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-400">
            Full Name
          </label>
          <div className="rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 text-white">
            {user.full_name}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-400">
            Email
          </label>
          <div className="rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 text-white">
            {user.email}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-400">
            Role
          </label>

          <div className="rounded-lg border border-gray-700 bg-[#232121] px-4 py-3">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                user.role === "SUPER_ADMIN"
                  ? "bg-[#C9AC8C]/20 text-[#C9AC8C]"
                  : "bg-blue-500/20 text-blue-400"
              }`}
            >
              {user.role === "SUPER_ADMIN" ? "Super Admin" : "Admin"}
            </span>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-400">
            Status
          </label>

          <div className="rounded-lg border border-gray-700 bg-[#232121] px-4 py-3">
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                user.status === "ACTIVE"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {user.status === "ACTIVE" ? "Active" : "Inactive"}
            </span>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-400">
            Created At
          </label>
          <div className="rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 text-white">
            {new Date(user.created_at).toLocaleString()}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-400">
            Updated At
          </label>
          <div className="rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 text-white">
            {new Date(user.updated_at).toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
