"use client";

import { Edit, Eye, Shield, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

export interface User {
  id: number;
  full_name: string;
  email: string;
  role: "SUPER_ADMIN" | "ADMIN";
  status: "ACTIVE" | "INACTIVE";
}

interface UserTableProps {
  users: User[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onRoleChange: (id: number, role: "SUPER_ADMIN" | "ADMIN") => void;
  onView: (id: number) => void;
}

const UserTable = ({
  users,
  onEdit,
  onDelete,
  onRoleChange,
  onView,
}: UserTableProps) => {
  const [me, setme] = useState<User | null>(null);

  useEffect(() => {
    fetchuser();
  }, []);

  const fetchuser = async () => {
    try {
      const response = await fetch("/api/auth/me");
      const result = await response.json();

      if (result.success) {
        setme(result.user);
      }
    } catch (error) {
      console.error(error);
    }
  };
  if (users.length === 0) {
    return (
      <div className="rounded-xl border border-gray-700 bg-[#181616] py-16 text-center">
        <h3 className="text-lg font-semibold text-white">No Users Found</h3>

        <p className="mt-2 text-sm text-gray-400">
          Try changing your search or create a new admin.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-gray-700 bg-[#181616] shadow-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-[#232121]">
            <tr className="text-left text-sm font-semibold text-gray-300">
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-t border-gray-700 transition hover:bg-[#232121]"
              >
                {/* Name */}
                <td className="px-6 py-4 font-medium text-white">
                  {user.full_name}
                </td>

                {/* Email */}
                <td className="px-6 py-4 text-gray-400">{user.email}</td>

                {/* Role */}
                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      user.role === "SUPER_ADMIN"
                        ? "border border-[#C9AC8C]/50 bg-[#C9AC8C]/10 text-[#C9AC8C] hover:bg-[#C9AC8C]/20"
                        : "border border-[#00BFFF]/50 bg-[#00BFFF]/10 text-[#00BFFF] hover:bg-[#00BFFF]/20"
                    }`}
                  >
                    {user.role === "SUPER_ADMIN" ? "Super Admin" : "Admin"}
                  </span>
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      user.status === "ACTIVE"
                        ? "border-green-700/50 bg-green-500/10 text-green-400"
                        : "border-red-700/50 bg-red-500/10 text-red-400"
                    }`}
                  >
                    {user.status === "ACTIVE" ? "Active" : "Inactive"}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-3">
                    {/* View */}
                    <button
                      title="View User"
                      onClick={() => onView(user.id)}
                      className="rounded-lg border border-gray-700 bg-[#232121] p-2 text-gray-400
             transition-all duration-300
             hover:border-[#A855F7]/70 hover:bg-[#A855F7]/10 hover:text-[#A855F7]"
                    >
                      <Eye size={18} />
                    </button>
                    {/* Edit */}
                    {me?.role === "SUPER_ADMIN" && (
                      <button
                        title="Edit User"
                        onClick={() => onEdit(user.id)}
                        className="rounded-lg border border-gray-700 bg-[#232121] p-2 text-gray-400
             transition-all duration-300
            hover:border-[#00BFFF]/70 hover:bg-[#00BFFF]/10 hover:text-[#00BFFF]"
                      >
                        <Edit size={18} />
                      </button>
                    )}

                    {/* IN FUTURE NEED TO PROMOTE/DEMOTE USER JUST UNCOMMENT BELOW CODE */}

                    {/* Promote / Demote */}
                    {/* <button
                      title={
                        user.role === "SUPER_ADMIN"
                          ? "Demote to Admin"
                          : "Promote to Super Admin"
                      }
                      onClick={() => onRoleChange(user.id, user.role)}
                      className={`rounded-lg p-2 transition ${
                        user.role === "SUPER_ADMIN"
                          ? "border border-[#C9AC8C] bg-[#C9AC8C]/10 text-[#C9AC8C] shadow-[0_0_8px_#C9AC8C] hover:bg-[#C9AC8C]/20"
                          : "border border-[#39FF14] bg-[#39FF14]/10 text-[#39FF14] shadow-[0_0_8px_#39FF14] hover:bg-[#39FF14]/20"
                      }`}
                    >
                      <Shield size={18} />
                    </button> */}

                    {/* Delete */}
                    {me?.role === "SUPER_ADMIN" && (
                      <button
                        title="Delete User"
                        onClick={() => onDelete(user.id)}
                        className="rounded-lg border border-gray-700 bg-[#232121] p-2 text-gray-400
             transition-all duration-300
             hover:border-red-500/70 hover:bg-red-500/10 hover:text-red-400"
                      >
                        <Trash2 size={18} />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-gray-700 px-6 py-4 text-sm text-gray-400">
        <span>
          Showing <strong>{users.length}</strong> user
          {users.length > 1 ? "s" : ""}
        </span>

        <span>Total: {users.length}</span>
      </div>
    </div>
  );
};

export default UserTable;
