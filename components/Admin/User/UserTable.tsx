"use client";

import { Edit, Shield, Trash2 } from "lucide-react";

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
  onRoleChange: (id: number) => void;
}

const UserTable = ({
  users,
  onEdit,
  onDelete,
  onRoleChange,
}: UserTableProps) => {
  if (users.length === 0) {
    return (
      <div className="rounded-xl border border-gray-700 bg-[#181616] py-16 text-center">
        <h3 className="text-lg font-semibold text-white">
          No Users Found
        </h3>

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
                <td className="px-6 py-4 text-gray-400">
                  {user.email}
                </td>

                {/* Role */}
                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
    user.role === "SUPER_ADMIN"
  ? "border border-[#C9AC8C] bg-[#C9AC8C]/10 text-[#C9AC8C] shadow-[0_0_8px_#C9AC8C] hover:bg-[#C9AC8C]/20"
: "border border-[#00BFFF] bg-[#00BFFF]/10 text-[#00BFFF] shadow-[0_0_8px_#00BFFF] hover:bg-[#00BFFF]/20"
  }`}
                  >
                    {user.role === "SUPER_ADMIN"
                      ? "Super Admin"
                      : "Admin"}
                  </span>
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
    user.status === "ACTIVE"
    ? "border border-[#39FF14] bg-[#39FF14]/10 text-[#39FF14] shadow-[0_0_8px_#39FF14] hover:bg-[#39FF14]/20"
: "border border-[#FF3131] bg-[#FF3131]/10 text-[#FF3131] shadow-[0_0_8px_#FF3131] hover:bg-[#FF3131]/20"
  }`}
                  >
                    {user.status === "ACTIVE" ? "Active" : "Inactive"}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-3">
                    {/* Edit */}
                    <button
                      title="Edit User"
                      onClick={() => onEdit(user.id)}
                      className="rounded-lg border border-[#00BFFF] bg-[#00BFFF]/10 p-2 text-[#00BFFF] shadow-[0_0_8px_#00BFFF] transition-all duration-300 hover:bg-[#00BFFF]/20 hover:shadow-[0_0_12px_#00BFFF]"
                    >
                      <Edit size={18} />
                    </button>

                    {/* Promote / Demote */}
                    <button
                      title={
                        user.role === "SUPER_ADMIN"
                          ? "Demote to Admin"
                          : "Promote to Super Admin"
                      }
                      onClick={() => onRoleChange(user.id)}
                      className={`rounded-lg p-2 transition ${
  user.role === "SUPER_ADMIN"
   ? "border border-[#C9AC8C] bg-[#C9AC8C]/10 text-[#C9AC8C] shadow-[0_0_8px_#C9AC8C] hover:bg-[#C9AC8C]/20"
: "border border-[#39FF14] bg-[#39FF14]/10 text-[#39FF14] shadow-[0_0_8px_#39FF14] hover:bg-[#39FF14]/20"
}`}
                    >
                      <Shield size={18} />
                    </button>

                    {/* Delete */}
                    <button
                      title="Delete User"
                      onClick={() => onDelete(user.id)}
                      className="rounded-lg border border-[#FF3131] bg-[#FF3131]/10 p-2 text-[#FF3131] shadow-[0_0_8px_#FF3131] transition-all duration-300 hover:bg-[#FF3131]/20 hover:shadow-[0_0_12px_#FF3131]"
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
      <div className="flex items-center justify-between border-t border-gray-700 px-6 py-4 text-sm text-gray-400">
        <span>
          Showing <strong>{users.length}</strong>{" "}
          user{users.length > 1 ? "s" : ""}
        </span>

        <span>Total: {users.length}</span>
      </div>
    </div>
  );
};

export default UserTable;