import Navbar from "@/components/Admin/Navbar";
import "../../../globals.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl p-6">
        {children}
      </main>
    </>
  );
}