"use client";

import { useParams } from "next/navigation";

export default function Home() {
  const params = useParams();
  const locale = params?.locale;
  return (
    <main>
      <div>Home (app) - Client side rendered</div>
      <div>Locale from useParams: {locale}</div>
    </main>
  );
}
