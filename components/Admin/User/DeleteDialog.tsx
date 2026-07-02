"use client";

import { AlertTriangle } from "lucide-react";

interface DeleteDialogProps {
  isOpen: boolean;
  title?: string;
  message?: string;
  loading?: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteDialog({
  isOpen,
  title = "Delete User",
  message = "Are you sure you want to delete this user? This action cannot be undone.",
  loading = false,
  onClose,
  onConfirm,
}: DeleteDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md rounded-xl bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center gap-3 border-b p-6">
          <div className="rounded-full bg-red-100 p-3">
            <AlertTriangle className="text-red-600" size={24} />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              {title}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {message}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6">
          <button
            onClick={onClose}
            disabled={loading}
            className="rounded-lg border border-gray-300 px-5 py-2 font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}