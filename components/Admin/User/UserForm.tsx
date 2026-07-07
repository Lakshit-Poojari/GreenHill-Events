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
      className="space-y-6 grid gap-6 md:grid-cols-2 rounded-xl border border-gray-700 bg-[#181616] p-6"
    >
      {/* Name */}
      <div>
        <label className="mb-2 block text-lg font-medium text-gray-300">
          Full Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter full name"
          className="w-full rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 text-white outline-none transition focus:border-[#C9AC8C]"
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
          className="w-full rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 text-white outline-none transition focus:border-[#C9AC8C]"
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
            className="w-full rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 pr-12 text-white outline-none transition focus:border-[#C9AC8C]"
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
              <EyeOff size={20} className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#C9AC8C]" />
            ) : (
              <Eye size={20} className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#C9AC8C]" />
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
            className="w-full rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 text-white outline-none transition focus:border-[#C9AC8C]"
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
              <EyeOff size={20} className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#C9AC8C]"/>
            ) : (
              <Eye size={20} className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#C9AC8C]"/>
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
          className="w-full rounded-lg border border-gray-700 bg-[#232121] px-4 py-3 text-white outline-none focus:border-[#C9AC8C]"
        >
          <option value="Active" className="bg-[#232121] text-white">Active</option>
          <option value="Inactive" className="bg-[#232121] text-white">Inactive</option>
        </select>


      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 p-7">
        <button
          type="button"
          className="rounded-lg border border-gray-700 px-4  text-white transition hover:border-red-500 hover:text-red-500"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-lg bg-[#C9AC8C] px-4  font-semibold text-black transition hover:opacity-90"
        >
          {isEdit ? "Update Admin" : "Create Admin"}
        </button>
      </div>
    </form>
  );
}