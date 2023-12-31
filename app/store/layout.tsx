import type { Metadata } from "next";
import Navbar from "./widgets/Navbar";

export const metadata: Metadata = {
  title: "Shop Street - Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-[100vw] max_contain h-[100vh] flex flex-col-reverse md:flex-row">
      <Navbar />
      {children}
    </div>
  );
}
