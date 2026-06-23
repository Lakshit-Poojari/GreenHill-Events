import React from "react";

interface ContactFormProps {
  bgClass?: string;
}

const ContactForm = ({
  bgClass = "bg-transparent",
}: ContactFormProps) => {
  return (
    <div className={`${bgClass} max-w-4xl mx-auto px-8 py-12 text-white`}>
      <p className="text-xl font-medium">Mobile Bar Enquiry</p>

      <p className="mt-2 text-lg">
        Fields marked with an <span className="text-red-500">*</span> are required
      </p>

      <form className="mt-6 space-y-8">
        {/* Form fields */}
      </form>
    </div>
  );
};

export default ContactForm;