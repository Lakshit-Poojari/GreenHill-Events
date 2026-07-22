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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="w-full max-w-md rounded-xl  bg-[#181616] shadow-2xl">
        {/* Header */}
        <div className="flex items-start gap-4 -700 p-6">
          <div className="rounded-full bg-red-500/10 p-3">
            <AlertTriangle className="text-red-500" size={24} />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">{title}</h2>

            <p className="mt-2 text-sm leading-6 text-gray-400">{message}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6">
          <button
            onClick={onClose}
            disabled={loading}
            className="rounded-lg border border-gray-700 bg-[#232121] px-5 py-2 font-medium text-gray-300 transition-all 
            duration-300 hover:border-gray-500 hover:bg-[#2c2c2c] disabled:cursor-not-allowed"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white transition-all duration-300 hover:bg-red-700 
            disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
