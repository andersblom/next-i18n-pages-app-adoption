import { Layout } from "@/components/Layout";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";

export async function generateMetadata({ params }) {
  return {
    title: `[${params.locale}] Create Next App`,
  };
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.locale}>
      <body>
        <Layout locale={params.locale}>{children}</Layout>
      </body>
    </html>
  );
}
