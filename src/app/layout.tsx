import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "منصتي التعليمية",
  description: "منصة شخصية لبيع الدورات",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} bg-slate-950 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
