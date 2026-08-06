"use client";

import React, { useState } from "react";

interface ContactFormProps {
  bgClass?: string;
}

const ContactForm = ({ bgClass = "bg-transparent" }: ContactFormProps) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("/api/contactEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message || "Failed to submit enquiry.");
        return;
      }

      alert("Enquiry submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mx-auto max-w-4xl rounded-3xl bg-[#242020] p-8 md:p-10 text-white shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
      <div className="mb-8">
        <h2 className="font-['Playfair_Display'] mt-5 text-4xl text-[#C9AC8C]">
          Mobile Bar Enquiry
        </h2>

        <p className="mt-3 text-gray-300">
          Fields marked with
          <span className="mx-1 text-red-500"> * </span>
          are required.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="mb-2 block text-lg font-medium text-white">
            Name <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="h-12 w-full rounded-xl border border-[#57514C] bg-[#1A1717] px-5 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[#C9AC8C] focus:ring-1 focus:ring-[#C9AC8C]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-lg font-medium text-white">
            Email <span className="text-red-500">*</span>
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="h-12 w-full rounded-xl border border-[#57514C] bg-[#1A1717] px-5 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[#C9AC8C] focus:ring-1 focus:ring-[#C9AC8C]"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 block text-lg font-medium text-white">
            Phone
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-[#57514C] bg-[#1A1717] px-5 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[#C9AC8C] focus:ring-1 focus:ring-[#C9AC8C]"
          />
        </div>

        {/* Message */}
        <div>
          <label className="mb-2 block text-lg font-medium text-white">
            Message <span className="text-red-500">*</span>
          </label>

          <textarea
            rows={6}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full resize-none rounded-xl border border-[#57514C] bg-[#1A1717] p-5 text-white outline-none transition-all duration-300 focus:border-[#C9AC8C] focus:ring-1 focus:ring-[#C9AC8C]"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="rounded-full border border-[#C9AC8C] bg-[#2A2626] px-10 py-4 text-lg font-semibold text-[#C9AC8C] transition-all duration-300 hover:-translate-y-1 hover:bg-[#C9AC8C] hover:text-black hover:shadow-lg hover:shadow-[#C9AC8C]/20 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
