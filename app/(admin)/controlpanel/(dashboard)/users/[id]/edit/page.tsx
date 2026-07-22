"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import UserForm, { UserFormData } from "@/components/Admin/User/UserForm";

const Page = () => {
  const params = useParams();
  const router = useRouter();

  const [user, setUser] = useState<UserFormData | null>(null);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      setPageLoading(true);

      const response = await fetch(`/api/users/${params.id}`, {
        method: "GET",
        credentials: "include",
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      setUser({
        full_name: result.user.full_name,
        email: result.user.email,
        password: "",
        confirmPassword: "",
        status: result.user.status,
      });
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      setPageLoading(false);
    }
  };

  const handleSubmit = async (data: UserFormData) => {
    try {
      setLoading(true);

      const payload = {
        full_name: data.full_name.trim().replace(/\s+/g, " "),
        email: data.email.trim().toLowerCase(),
        password: data.password.trim(),
        status: data.status,
      };

      const response = await fetch(`/api/users/${params.id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      alert(result.message || "User updated successfully.");

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

  if (pageLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <p className="text-lg text-gray-500">Loading user...</p>
      </div>
    );
  }

  if (!user) {
    return <div className="text-center text-red-500">User not found.</div>;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Link
          href="/controlpanel/users"
          className="mb-3 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#C9AC8C]"
        >
          <ArrowLeft size={18} />
          Back to Users
        </Link>

        <h1 className="text-3xl font-bold text-white">Edit Admin</h1>

        <p className="mt-1 text-[#C9AC8C]">Update administrator information.</p>
      </div>

      <UserForm
        initialData={user}
        isEdit
        loading={loading}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Page;
