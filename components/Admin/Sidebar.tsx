"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Clapperboard,
  FileText,
  MessageSquare,
  Users,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const links = [
  {
    name: "Dashboard",
    href: "/controlpanel/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Entertainment",
    href: "/controlpanel/entertainment",
    icon: Clapperboard,
  },
  {
    name: "Case Study",
    href: "/controlpanel/case-studies",
    icon: FileText,
  },
  {
    name: "Comments",
    href: "/controlpanel/comments",
    icon: MessageSquare,
  },
  {
    name: "Emails",
    href: "/controlpanel/mails",
    icon: Mail,
  },
  {
    name: "Users",
    href: "/controlpanel/users",
    icon: Users,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile / Tablet Menu Button */}
      <button
        type="button"
        onClick={() => setSidebarOpen((prev) => !prev)}
        className="fixed top-4 left-4 z-9999 rounded-lg bg-[#181616] p-1 text-[#C9AC8C] lg:hidden"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col bg-[#181616] border-r border-gray-800">
        <div className="border-b border-gray-800 p-6">
          <h1 className="text-2xl font-bold text-[#C9AC8C]">
            Green Hill Event
          </h1>

          <p className="text-sm text-gray-400">Admin Panel</p>
        </div>

        <nav className="flex-1 space-y-2 p-4">
          {links.map((link) => {
            const Icon = link.icon;
            const active = pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                  active
                    ? "bg-[#C9AC8C] text-black"
                    : "text-gray-300 hover:bg-[#2a2a2a]"
                }`}
              >
                <Icon size={20} />
                {link.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile / Tablet Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setSidebarOpen(false)}
          />

          {/* Sidebar */}
          <aside className="relative z-10 flex h-full w-64 flex-col border-r border-gray-800 bg-[#181616]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-800 p-2 mt-20">
              <div>
                <h1 className="text-2xl font-bold text-[#C9AC8C]">
                  Green Hill Event
                </h1>

                <p className="text-sm text-gray-400">Admin Panel</p>
              </div>

            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-2 p-4">
              {links.map((link) => {
                const Icon = link.icon;
                const active = pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                      active
                        ? "bg-[#C9AC8C] text-black"
                        : "text-gray-300 hover:bg-[#2a2a2a]"
                    }`}
                  >
                    <Icon size={20} />
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
