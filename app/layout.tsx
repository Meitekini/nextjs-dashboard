import "@/app/ui/global.css";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Acme Dashboard",
  description: "Learn Nextjs",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
