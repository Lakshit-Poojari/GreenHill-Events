"use client";

import {
  ArrowLeft,
  Mail,
  Phone,
  User,
  Calendar,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  created_at: string;
}

interface ApiResponse {
  success: boolean;
  contact: {
    success: boolean;
    data: Contact;
  };
}

const Page = () => {
  const { id } = useParams();

  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContact();
  }, []);

  async function fetchContact() {
    try {
      const res = await fetch(`/api/contactEmail/${id}`);
      const data: ApiResponse = await res.json();

      if (data.success) {
        setContact(data.contact.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center py-20 text-white">
        Loading contact enquiry...
      </div>
    );
  }

  if (!contact) {
    return (
      <div className="py-20 text-center text-gray-400">
        Contact enquiry not found.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Back Button */}
      <Link
        href="/controlpanel/mails"
        className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-[#181616] px-4 py-2 text-sm font-medium text-white transition hover:border-[#C9AC8C] hover:text-[#C9AC8C]"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      {/* Header */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-white">Contact Enquiry</h1>

        <p className="mt-2 text-[#C9AC8C]">View complete enquiry details.</p>
      </div>

      {/* Details */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-8 shadow-lg">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="mb-2 flex items-center gap-2 text-[#C9AC8C]">
              <User size={18} />
              Name
            </p>

            <p className="text-white">{contact.name}</p>
          </div>

          <div>
            <p className="mb-2 flex items-center gap-2 text-[#C9AC8C]">
              <Mail size={18} />
              Email
            </p>

            <p className="text-white">{contact.email}</p>
          </div>

          <div>
            <p className="mb-2 flex items-center gap-2 text-[#C9AC8C]">
              <Phone size={18} />
              Phone
            </p>

            <p className="text-white">{contact.phone || "-"}</p>
          </div>

          <div>
            <p className="mb-2 flex items-center gap-2 text-[#C9AC8C]">
              <Calendar size={18} />
              Submitted On
            </p>

            <p className="text-white">
              {new Date(contact.created_at).toLocaleString()}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <p className="mb-3 flex items-center gap-2 text-[#C9AC8C]">
            <MessageSquare size={18} />
            Message
          </p>

          <div className="rounded-lg border border-gray-700 bg-[#202020] p-5">
            <p className="whitespace-pre-wrap leading-7 text-gray-300">
              {contact.message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
