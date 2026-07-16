"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Clapperboard,
  FileText,
  MessageSquare,
  Users,
} from "lucide-react";

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
    name: "Posts",
    href: "/controlpanel/posts",
    icon: FileText,
  },
  {
    name: "Comments",
    href: "/controlpanel/comments",
    icon: MessageSquare,
  },
  {
    name: "Users",
    href: "/controlpanel/users",
    icon: Users,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex w-64 flex-col bg-[#181616] border-r border-gray-800">
      <div className="border-b border-gray-800 p-6">
        <h1 className="text-2xl font-bold text-[#C9AC8C]">
          Green Hill Event
        </h1>

        <p className="text-sm text-gray-400">
          Admin Panel
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
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
  );
}