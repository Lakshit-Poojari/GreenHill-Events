"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import SearchBar from "@/components/Admin/User/SearchBar";
import UserTable, { User } from "@/components/Admin/User/UserTable";
import DeleteDialog from "@/components/Admin/User/DeleteDialog";

const users: User[] = [
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
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [role, setRole] = useState("ALL");

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  const handleDeleteClick = (id: number) => {
    setSelectedUser(id);
    setIsDeleteOpen(true);
  };

  const handleDeleteConfirm = () => {
    console.log("Delete User:", selectedUser);

    setIsDeleteOpen(false);
    setSelectedUser(null);
  };

  const handleRoleChange = (id: number) => {
    console.log("Change Role:", id);

    // Later:
    // Open Role Change Dialog
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
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
          className="rounded-lg bg-[#C9AC8C] px-5 py-3 font-medium text-white transition hover:opacity-90"
        >
          Add Admin
        </Link>
      </div>

      <SearchBar
        search={search}
        setSearch={setSearch}
        role={role}
        setRole={setRole}
      />

      <UserTable
        users={users}
        onEdit={(id) => router.push(`/controlpanel/users/edit/${id}`)}
        onDelete={handleDeleteClick}
        onRoleChange={handleRoleChange}
      />

      <DeleteDialog
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
}