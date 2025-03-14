import { Building2 } from "lucide-react";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <nav className="shadow-lg bg-sidebar">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <Building2 className="h-8 w-8 text-accent" />
                  <span className="ml-2 text-xl font-bold text-gray-900">
                    Heart of Tirana
                  </span>
                </Link>
                <div className="hidden md:flex items-center space-x-8 ml-10">
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-accent px-3 py-2 rounded-md text-md font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    href="/explore"
                    className="text-gray-600 hover:text-accent px-3 py-2 rounded-md text-md font-medium"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
