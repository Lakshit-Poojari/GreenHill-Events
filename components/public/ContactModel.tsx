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

    const name = formData.name.trim();

    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;

    if (name.length < 2) {
      alert("Name must be at least 2 characters long.");
      return;
    }

    if (name.length > 50) {
      alert("Name must not exceed 50 characters.");
      return;
    }

    if (!nameRegex.test(name)) {
      alert(
        "Please enter a valid name. Only letters, spaces, hyphens, and apostrophes are allowed.",
      );
      return;
    }

    // -------------------------
    // Email validation
    // -------------------------
    const email = formData.email.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      alert("Email is required.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // -------------------------
    // Message validation
    // -------------------------
    const message = formData.message.trim();

    if (message.length < 5) {
      alert("Message must be at least 5 characters long.");
      return;
    }

    if (message.length > 2000) {
      alert("Message must not exceed 2000 characters.");
      return;
    }

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
      className="fixed inset-0 z-9999 flex items-center justify-center overflow-y-auto bg-black/80 p-2.5 backdrop-blur-sm sm:p-3"
      onClick={onClose}
    >
      <div
        className="relative my-3 w-full max-w-4xl overflow-hidden rounded-2xl bg-[#1D1919] shadow-[0_25px_60px_rgba(0,0,0,0.6)] sm:my-6 sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-[#C9AC8C] transition-all duration-300 hover:bg-[#C9AC8C] hover:text-black sm:right-5 sm:top-5 sm:h-10 sm:w-10"
          aria-label="Close contact form"
        >
          <X size={18} className="sm:h-5 sm:w-5" />
        </button>

      
  
            <div className="rounded-xl bg-[#242020] p-4  sm:rounded-2xl sm:p-6 md:p-7">
              {/* Heading */}
              <div className="mb-2 sm:mb-2">
                <h2 className="pr-10 font-['Playfair_Display'] text-3xl text-[#C9AC8C] sm:text-4xl">
                  Contact Me
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-gray-300 sm:text-base">
                  Fields marked with
                  <span className="mx-1 text-red-500">*</span>
                  are required.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Name */}
                <div>
                  <label className="mb-1 block text-base font-medium text-white sm:text-lg">
                    Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    pattern="[A-Za-zÀ-ÖØ-öø-ÿ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*"
                    minLength={2}
                    maxLength={50}
                    required
                    className="h-10 w-full rounded-xl border border-[#57514C] bg-[#1A1717] px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[#C9AC8C] focus:ring-1 focus:ring-[#C9AC8C] sm:h-11 sm:px-5 sm:text-base"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-1 block text-base font-medium text-white sm:text-lg">
                    Email <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-10 w-full rounded-xl border border-[#57514C] bg-[#1A1717] px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[#C9AC8C] focus:ring-1 focus:ring-[#C9AC8C] sm:h-11 sm:px-5 sm:text-base"
                  />
                </div>

                {/* Message */}
                <div className="m-1">
                  <label className="mb-1 block text-base font-medium text-white sm:text-lg">
                    Message <span className="text-red-500">*</span>
                  </label>

                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    minLength={5}
                    maxLength={2000}
                    required
                    className="w-full resize-none rounded-xl border border-[#57514C] bg-[#1A1717] p-2 text-sm text-white outline-none transition-all duration-300 focus:border-[#C9AC8C] focus:ring-1 focus:ring-[#C9AC8C] sm:p-5 sm:text-base"
                  />
                </div>

                {/* Recaptcha */}
                <div className="overflow-x-auto">
                  <h3 className="mb-1 text-base font-medium text-white sm:text-lg">
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
                  className="w-full rounded-full border border-[#C9AC8C] bg-[#2A2626] px-6 py-3 text-base font-semibold text-[#C9AC8C] transition-all duration-300 hover:bg-[#C9AC8C] hover:text-black hover:shadow-lg hover:shadow-[#C9AC8C]/20 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:px-8 sm:py-3 sm:text-lg"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
    
      </div>

  );
}
