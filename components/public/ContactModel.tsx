"use client";

import { X } from "lucide-react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: Props) {
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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

    if (!captchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contactEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          phone: "",
          captchaToken, // phone is optional
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message || "Failed to submit.");
        return;
      }

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      onClose();
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 p-2 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-[#1D1919] shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-10 w-20 items-center justify-center rounded-full bg-white/5 text-[#C9AC8C] transition-all duration-300 hover:rotate-180 hover:bg-[#C9AC8C] hover:text-black"
        >
          <X size={20} />
        </button>

        <section className="bg-[#171414]">
          <div className="mx-auto max-w-5xl p-5 md:p-6">
            <div className="rounded-2xl  bg-[#242020] p-6 md:p-7">
              {/* Heading */}
              <div className="mb-2 pb-3">
                <h2 className="font-['Playfair_Display'] text-4xl text-[#C9AC8C]">
                  Contact Me
                </h2>

                <p className="mt-1 text-gray-300">
                  Fields marked with
                  <span className="mx-1 text-red-500"> * </span>
                  are required.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="mb-1 block text-lg font-medium text-white">
                    Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-10 w-full rounded-xl border border-[#57514C] bg-[#1A1717] px-5 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-[#C9AC8C] focus:ring-1 focus:ring-[#C9AC8C]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-1 block text-lg font-medium text-white">
                    Email <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-10 w-full rounded-xl border border-[#57514C] bg-[#1A1717] px-5 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-[#C9AC8C] focus:ring-1 focus:ring-[#C9AC8C]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="mb-1 block text-lg font-medium text-white">
                    Message <span className="text-red-500">*</span>
                  </label>

                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[#57514C] bg-[#1A1717] p-5 text-white outline-none transition-all duration-300 focus:border-[#C9AC8C] focus:ring-1 focus:ring-[#C9AC8C]"
                  />
                </div>

                {/* Recaptcha */}
                <div>
                  <h3 className="mb-1 text-lg font-medium text-white">
                    Recaptcha
                  </h3>

                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                    onChange={(token) => setCaptchaToken(token || "")}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full border border-[#C9AC8C] bg-[#2A2626] px-8 py-3 text-lg font-semibold text-[#C9AC8C] transition-all duration-300 hover:-translate-y-1 hover:bg-[#C9AC8C] hover:text-black hover:shadow-lg hover:shadow-[#C9AC8C]/20 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
