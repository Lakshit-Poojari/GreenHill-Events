"use client";

import { Edit, Shield, Trash2 } from "lucide-react";

export interface User {
  id: number;
  name: string;
  email: string;
  role: "SUPER_ADMIN" | "ADMIN";
  status: "Active" | "Inactive";
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
      <div className="rounded-xl border border-dashed border-gray-300 bg-white py-16 text-center">
        <h3 className="text-lg font-semibold text-gray-700">
          No Users Found
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Try changing your search or create a new admin.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr className="text-left text-sm font-semibold text-gray-700">
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
                className="border-t border-gray-200 hover:bg-gray-50"
              >
                {/* Name */}
                <td className="px-6 py-4 font-medium text-gray-800">
                  {user.name}
                </td>

                {/* Email */}
                <td className="px-6 py-4 text-gray-600">
                  {user.email}
                </td>

                {/* Role */}
                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      user.role === "SUPER_ADMIN"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
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
                      user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-3">
                    {/* Edit */}
                    <button
                      title="Edit User"
                      onClick={() => onEdit(user.id)}
                      className="rounded-lg bg-blue-50 p-2 text-blue-600 transition hover:bg-blue-100"
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
                          ? "bg-yellow-50 text-yellow-700 hover:bg-yellow-100"
                          : "bg-green-50 text-green-700 hover:bg-green-100"
                      }`}
                    >
                      <Shield size={18} />
                    </button>

                    {/* Delete */}
                    <button
                      title="Delete User"
                      onClick={() => onDelete(user.id)}
                      className="rounded-lg bg-red-50 p-2 text-red-600 transition hover:bg-red-100"
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
      <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4 text-sm text-gray-500">
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