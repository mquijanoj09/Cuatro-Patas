import type { Metadata } from "next";
import "./globals.css";
import { NavBar, User } from "@/components";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Cuatro Patas",
  description: "Administrador de inventario y facturación",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-base flex h-[100dvh] w-screen">
        <Providers>
          <NavBar />
          <User />
          {children}
        </Providers>
      </body>
    </html>
  );
}
