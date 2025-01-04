"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function RootLayout({
  children,
  auth,
}: //,
Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {
  const loginSegment = useSelectedLayoutSegment("auth");
  console.log(loginSegment);
  return (
    <html lang="en">
      <body>
        <>
          <nav>
            <Link href="/login">Open modal</Link>
          </nav>
          <div>{auth}</div>
          <div>{children}</div>
        </>
      </body>
    </html>
  );
}
