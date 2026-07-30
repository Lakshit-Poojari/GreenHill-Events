"use client";

import Link from "next/link";
import { Eye, Trash2 } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";

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
    data: Contact[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
}

const Page = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  async function fetchContacts() {
    try {
      const res = await fetch("/api/contactEmail");
      const data: ApiResponse = await res.json();

      if (data.success) {
        setContacts(data.contact.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) =>
      [contact.name, contact.email, contact.phone ?? "", contact.message]
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [contacts, searchTerm]);

  if (loading) {
    return (
      <div className="flex justify-center py-20 text-white">
        Loading contact enquiries...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-white">
          Contact Enquiries
        </h1>

        <p className="mt-2 text-[#C9AC8C]">
          View and manage contact form enquiries.
        </p>
      </div>

      {/* Search */}
      <div className="mb-6 flex flex-wrap justify-end gap-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg border border-gray-700 bg-[#202020] px-4 py-2 text-white placeholder-gray-500 outline-none focus:border-[#C9AC8C] md:w-80"
        />
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-gray-700 bg-[#181616] shadow-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="border-b border-gray-700 bg-[#202020]">
              <tr className="text-left text-sm uppercase tracking-wider text-gray-400">
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4">Message</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredContacts.map((contact) => (
                <tr
                  key={contact.id}
                  className="border-b border-gray-700 hover:bg-[#202020]"
                >
                  <td className="px-6 py-5 font-medium text-white">
                    {contact.name}
                  </td>

                  <td className="px-6 py-5 text-gray-300">
                    {contact.email}
                  </td>

                  <td className="px-6 py-5 text-gray-300">
                    {contact.phone || "-"}
                  </td>

                  <td className="max-w-sm px-6 py-5 text-gray-300">
                    <p className="line-clamp-2">{contact.message}</p>
                  </td>

                  <td className="px-6 py-5 text-gray-400">
                    {new Date(contact.created_at).toLocaleString()}
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex justify-center gap-2">
                      <Link
                        href={`/controlpanel/mails/${contact.id}`}
                        className="rounded-lg border border-[#A855F7] bg-[#A855F7]/10 p-2 text-[#A855F7] shadow-[0_0_8px_#A855F7] transition-all duration-300 hover:bg-[#A855F7]/20 hover:shadow-[0_0_12px_#A855F7]"
                      >
                        <Eye size={18} />
                      </Link>

                    </div>
                  </td>
                </tr>
              ))}

              {filteredContacts.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="py-10 text-center text-gray-400"
                  >
                    No contact enquiries found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;