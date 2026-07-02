"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import UserForm, {
  UserFormData,
} from "@/components/Admin/User/UserForm";

const Page = () => {
  const params = useParams();
  const router = useRouter();

  // Dummy data
  // Later this will come from GET /api/users/:id
  const user: UserFormData = {
    name: "John Doe",
    email: "john@greenhill.com",
    password: "",
    confirmPassword: "",
    status: "Active",
  };

  const handleSubmit = (data: UserFormData) => {
    console.log("Update User:", params.id, data);

    // TODO:
    // PUT /api/users/:id

    router.push("/controlpanel/users");
  };

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

        <h1 className="text-3xl font-bold text-gray-800">
          Edit Admin
        </h1>

        <p className="mt-1 text-gray-500">
          Update administrator information.
        </p>
      </div>

      {/* Form */}
      <UserForm
        initialData={user}
        isEdit
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Page;