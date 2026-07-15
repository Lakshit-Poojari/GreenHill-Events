"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import SearchBar from "@/components/Admin/User/SearchBar";
import UserTable, { User } from "@/components/Admin/User/UserTable";
import DeleteDialog from "@/components/Admin/User/DeleteDialog";


export default function UserManagementPage() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [role, setRole] = useState("ALL");

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetchUsers();
}, []);

const fetchUsers = async () => {
  try {
    setLoading(true);

    const response = await fetch("/api/users", {
      method: "GET",
      credentials: "include",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    setUsers(result.users);
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    }
  } finally {
    setLoading(false);
  }
};

  const handleDeleteClick = (id: number) => {
    setSelectedUser(id);
    setIsDeleteOpen(true);
  };

const handleDeleteConfirm = async () => {
  if (!selectedUser) return;

  try {
    const response = await fetch(`/api/users/${selectedUser}`, {
      method: "DELETE",
      credentials: "include",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    alert(result.message);

    fetchUsers();
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    }
  } finally {
    setIsDeleteOpen(false);
    setSelectedUser(null);
  }
};

const handleView = (id: number) => {
  router.push(`/controlpanel/users/${id}`);
};

const handleRoleChange = async (id: number) => {
  try {
    const response = await fetch(`/api/users/${id}`, {
      method: "PATCH",
      credentials: "include",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    alert(result.message || "Role updated successfully.");

    fetchUsers();
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    } else {
      alert("Something went wrong.");
    }
  }
};

  const filteredUsers = users.filter((user) => {
  const matchesSearch =
    user.full_name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase());

  const matchesRole =
    role === "ALL" || user.role === role;

  return matchesSearch && matchesRole;
});

if (loading) {
  return (
    <div className="flex h-64 items-center justify-center">
      <p className="text-lg text-gray-500">Loading users...</p>
    </div>
  );
}

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold white">
            User Management
          </h1>

          <p className="mt-1 text-[#C9AC8C]">
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
  users={filteredUsers}
  onEdit={(id) => router.push(`/controlpanel/users/${id}/edit`)}
  onDelete={handleDeleteClick}
  onRoleChange={handleRoleChange}
  onView={(id) => router.push(`/controlpanel/users/${id}`)}
/>

      <DeleteDialog
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
}