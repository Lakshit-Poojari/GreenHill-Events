"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import UserForm, {UserFormData,} from "@/components/Admin/User/UserForm";

const page = () => {
  const handleSubmit = (data: UserFormData) => {
    console.log("Create Admin:", data);

    // TODO:
    // Call POST /api/users
    // router.push("/controlpanel/users");
  };
  return (
   <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <Link
            href="/controlpanel/users"
            className="mb-2 inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-[#181616] px-4 py-2 text-sm font-medium 
            text-white transition-all duration-300 hover:border-[#C9AC8C] hover:text-[#C9AC8C]"
          >
            <ArrowLeft size={18} />
            Back to Users
          </Link>

          <h1 className="text-3xl font-bold text-white">
            Create Admin
          </h1>

          <p className="mt-1 text-[#C9AC8C]">
            Add a new administrator account.
          </p>
        </div>
      </div>

      {/* Form */}
      <UserForm onSubmit={handleSubmit} />
    </div>
  )
}

export default page