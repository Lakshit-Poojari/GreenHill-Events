"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export interface UserFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  status: "Active" | "Inactive";
}

interface UserFormProps {
  initialData?: UserFormData;
  onSubmit: (data: UserFormData) => void;
  isEdit?: boolean;
}

export default function UserForm({
  initialData,
  onSubmit,
  isEdit = false,
}: UserFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] = useState<UserFormData>(
    initialData || {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      status: "Active",
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl border bg-white p-6 shadow-sm"
    >
      {/* Name */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Full Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter full name"
          className="w-full rounded-lg border px-4 py-3 outline-none transition focus:border-[#C9AC8C]"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Email
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          className="w-full rounded-lg border px-4 py-3 outline-none transition focus:border-[#C9AC8C]"
          required
        />
      </div>

      {/* Password */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
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
            className="w-full rounded-lg border px-4 py-3 pr-12 outline-none transition focus:border-[#C9AC8C]"
            required={!isEdit}
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Confirm Password */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Confirm Password
        </label>

        <div className="relative">
          <input
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder={
              isEdit
                ? "Leave blank to keep current password"
                : "Confirm password"
            }
            className="w-full rounded-lg border px-4 py-3 pr-12 outline-none transition focus:border-[#C9AC8C]"
            required={!isEdit}
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(
                !showConfirmPassword
              )
            }
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            {showConfirmPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Status */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Status
        </label>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full rounded-lg border px-4 py-3 outline-none transition focus:border-[#C9AC8C]"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>


      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3">
        <button
          type="button"
          className="rounded-lg border px-6 py-3 font-medium hover:bg-gray-100"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-lg bg-[#C9AC8C] px-6 py-3 font-medium text-white transition hover:opacity-90"
        >
          {isEdit ? "Update Admin" : "Create Admin"}
        </button>
      </div>
    </form>
  );
}