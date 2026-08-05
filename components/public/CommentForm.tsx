"use client";

import { useState } from "react";

interface CommentFormProps {
  caseStudyId: number;
  parentCommentId?: number | null;
  onSuccess?: () => void;
}
export default function CommentForm({
  caseStudyId,
  parentCommentId = null,
  onSuccess,
}: CommentFormProps) {
  const [formData, setFormData] = useState({
    comment: "",
    name: "",
    email: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          case_study_id: caseStudyId,
          parent_comment_id: parentCommentId,
          name: formData.name,
          email: formData.email,
          website: formData.website,
          comment: formData.comment,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message || "Failed to submit comment.");
        return;
      }

      alert("Comment submitted successfully!");
      onSuccess?.();

      setFormData({
        comment: "",
        name: "",
        email: "",
        website: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mt-12 rounded-3xl border border-[#57514C] bg-[#2A2626] p-6 shadow-xl md:p-10">
      <h2 className="font-['Playfair_Display'] text-4xl text-[#C9AC8C] md:text-[52px]">
        Leave Comment
      </h2>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <textarea
          name="comment"
          rows={7}
          placeholder="Comment"
          value={formData.comment}
          onChange={handleChange}
          required
          className="w-full resize-none rounded-2xl border border-[#57514C] bg-transparent px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[#C9AC8C] focus:ring-1 focus:ring-[#C9AC8C]"
        />

        <div className="grid gap-6 md:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="rounded-2xl border border-[#57514C] bg-transparent px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[#C9AC8C] focus:ring-1 focus:ring-[#C9AC8C]"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="rounded-2xl border border-[#57514C] bg-transparent px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[#C9AC8C] focus:ring-1 focus:ring-[#C9AC8C]"
          />
        </div>

        <input
          type="text"
          name="website"
          placeholder="Website"
          value={formData.website}
          onChange={handleChange}
          className="w-full rounded-2xl border border-[#57514C] bg-transparent px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[#C9AC8C] focus:ring-1 focus:ring-[#C9AC8C]"
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-[#C9AC8C] px-10 py-4 text-lg font-medium text-[#1E1E1E] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[#C9AC8C]/25 hover:opacity-95 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Comment"}
        </button>
      </form>
    </div>
  );
}
