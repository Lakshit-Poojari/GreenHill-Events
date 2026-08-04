"use client";

import { useState } from "react";

interface CommentFormProps {
  caseStudyId: number;
}
export default function CommentForm({ caseStudyId }: CommentFormProps) {
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
          parent_comment_id: null,
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
    <div className="mt-16 bg-[#2A2626] p-16">
      <h2 className="text-[52px] font-['Playfair_Display'] text-[#C9AC8C]">
        Leave Comment
      </h2>

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        <textarea
          name="comment"
          rows={7}
          placeholder="Comment"
          value={formData.comment}
          onChange={handleChange}
          required
          className="w-full resize-none border border-[#57514C] bg-transparent p-4 outline-none placeholder:text-gray-400"
        />

        <div className="grid gap-8 md:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-[#57514C] bg-transparent p-4 outline-none placeholder:text-gray-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-[#57514C] bg-transparent p-4 outline-none placeholder:text-gray-400"
          />
        </div>

        <input
          type="text"
          name="website"
          placeholder="Website"
          value={formData.website}
          onChange={handleChange}
          className="w-full border border-[#57514C] bg-transparent p-4 outline-none placeholder:text-gray-400"
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-[#C9AC8C] px-10 py-3 text-2xl text-black transition hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Comment"}
        </button>
      </form>
    </div>
  );
}
