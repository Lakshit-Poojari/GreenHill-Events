"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export interface UserFormData {
  full_name: string;
  email: string;
  password: string;
  confirmPassword: string;
  status: "ACTIVE" | "INACTIVE";
}

interface UserFormProps {
  initialData?: UserFormData;
  onSubmit: (data: UserFormData) => void | Promise<void>;
  isEdit?: boolean;
  loading?: boolean;
}

export default function UserForm({
  initialData,
  onSubmit,
  isEdit = false,
  loading = false,
}: UserFormProps) {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] = useState<UserFormData>(
    initialData || {
      full_name: "",
      email: "",
      password: "",
      confirmPassword: "",
      status: "ACTIVE",
    }
  );

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;

  let formattedValue = value;

  switch (name) {
    case "full_name":
      formattedValue = value.replace(/\s{2,}/g, " ");
      break;

    case "email":
      formattedValue = value.trim().toLowerCase();
      break;

    default:
      formattedValue = value;
  }

  setFormData((prev) => ({
    ...prev,
    [name]: formattedValue,
  }));
};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      formData.password &&
      formData.password !== formData.confirmPassword
    ) {
      alert("Passwords do not match.");
      return;
    }

    await onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-6 rounded-xl border border-gray-700 bg-[#181616] p-6 md:grid-cols-2"
    >
      {/* Name */}
      <div>
        <label className="mb-2 block text-lg font-medium text-gray-300">
          Full Name
        </label>

        <input
          type="text"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          placeholder="Enter full name"
          disabled={loading}
          className="w-full rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 text-white outline-none transition focus:border-[#C9AC8C] disabled:cursor-not-allowed disabled:opacity-50"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="mb-2 block text-lg font-medium text-gray-300">
          Email
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          disabled={loading}
          className="w-full rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 text-white outline-none transition focus:border-[#C9AC8C] disabled:cursor-not-allowed disabled:opacity-50"
          required
        />
      </div>

      {/* Password */}
      <div>
        <label className="mb-2 block text-lg font-medium text-gray-300">
          Password
        </label>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder={
              isEdit
                ? "Leave blank to keep current password"
                : "Enter password"
            }
            disabled={loading}
            className="w-full rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 pr-12 text-white outline-none transition focus:border-[#C9AC8C] disabled:cursor-not-allowed disabled:opacity-50"
            required={!isEdit}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            disabled={loading}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            {showPassword ? (
              <EyeOff className="text-gray-400 hover:text-[#C9AC8C]" size={20} />
            ) : (
              <Eye className="text-gray-400 hover:text-[#C9AC8C]" size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Confirm Password */}
      <div>
        <label className="mb-2 block text-lg font-medium text-gray-300">
          Confirm Password
        </label>

        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder={
              isEdit
                ? "Leave blank to keep current password"
                : "Confirm password"
            }
            disabled={loading}
            className="w-full rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 pr-12 text-white outline-none transition focus:border-[#C9AC8C] disabled:cursor-not-allowed disabled:opacity-50"
            required={!isEdit}
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
            disabled={loading}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            {showConfirmPassword ? (
              <EyeOff className="text-gray-400 hover:text-[#C9AC8C]" size={20} />
            ) : (
              <Eye className="text-gray-400 hover:text-[#C9AC8C]" size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Status */}
      <div>
        <label className="mb-2 block text-lg font-medium text-gray-300">
          Status
        </label>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          disabled={loading}
          className="w-full rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 text-white outline-none focus:border-[#C9AC8C] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="ACTIVE">Active</option>
          <option value="INACTIVE">Inactive</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 p-7 md:col-span-2">
        <button
          type="button"
          onClick={() => router.push("/controlpanel/users")}
          disabled={loading}
          className="rounded-lg border border-gray-700 px-4 py-2 text-white transition hover:border-red-500 hover:text-red-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-[#C9AC8C] px-4 py-2 font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading
            ? isEdit
              ? "Updating..."
              : "Creating..."
            : isEdit
            ? "Update Admin"
            : "Create Admin"}
        </button>
      </div>
    </form>
  );
}