import Navbar from "@/components/Admin/Navbar";
import "../../../globals.css";
import Sidebar from "@/components/Admin/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex h-screen overflow-hidden bg-[#101010]">
        {/* Sidebar */}
        <Sidebar />

        {/* Right Section */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Top Navbar */}
          <Navbar />

          {/* Page Content */}
          <main className="min-h-0 flex-1 overflow-y-auto p-6">
            <div className="mx-auto max-w-7xl">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
