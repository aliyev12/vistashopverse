import type { Metadata } from "next";
import { APP_NAME } from "@/lib/constants";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: `${APP_NAME}`,
  description: "Best online shopping experience",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex flex-center min-h-screen w-full">{children}</div>;
}
