import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Card, CardContent } from "./_components/ui/card";
import AuthProvider from "./_providers/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <AuthProvider>
        <div className="flex flex-col h-full">
          <div className="flex-1">
            {children}
          </div>
          <footer>
            <Card>
              <CardContent className="px-5 py-6">
                <p className="text-sm text-gray-400">
                  © 2024 Copyright <span className="font-bold">Everton Tarelli Dev</span>
                </p>
              </CardContent>
            </Card>
          </footer>
          </div>  
        </AuthProvider>
        <Toaster />
        </body>
    </html>
  );
}
