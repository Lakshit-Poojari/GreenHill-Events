"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import UserForm, { UserFormData } from "@/components/Admin/User/UserForm";

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: UserFormData) => {
    try {
      setLoading(true);

      const payload = {
        full_name: data.full_name.trim().replace(/\s+/g, " "),
        email: data.email.trim().toLowerCase(),
        password: data.password.trim(),
        status: data.status,
      };

      const response = await fetch("/api/users", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to create admin.");
      }

      alert(result.message || "Admin created successfully.");

      router.push("/controlpanel/users");
      router.refresh();
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <Link
            href="/controlpanel/users"
            className="mb-2 inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-[#181616] px-4 py-2 text-sm 
              font-medium text-white transition-all duration-300 hover:border-[#C9AC8C] hover:text-[#C9AC8C]"
          >
            <ArrowLeft size={18} />
            Back to Users
          </Link>

          <h1 className="text-3xl font-bold text-white">Create Admin</h1>

          <p className="mt-1 text-[#C9AC8C]">
            Add a new administrator account.
          </p>
        </div>
      </div>

      {/* Form */}
      <UserForm onSubmit={handleSubmit} loading={loading} />
    </div>
  );
};

export default Page;
