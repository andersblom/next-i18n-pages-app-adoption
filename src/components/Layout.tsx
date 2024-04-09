import Link from "next/link";
import { locales } from "@/locales";

export const Layout = ({ children, locale }) => {
  return (
    <div>
      <div className="mb-2 bg-slate-400">
        <div>current lang: {locale}</div>
        <div>
          locales:{" "}
          {locales.map((lang) => (
            <Link href={`/${lang}`} locale={lang} key={lang} className="mr-2">
              {lang}
            </Link>
          ))}
        </div>
      </div>
      <div className="mb-2 bg-slate-200">
        <ul className="flex">
          <li className="mr-4">
            <Link href={`/${locale}`}>Home</Link>
          </li>
          <li className="mr-4">
            <Link href={`/${locale}/products`}>Products</Link>
          </li>
          <li className="mr-4">
            <Link href={`/${locale}/search`}>Search</Link>
          </li>
          <li>
            <Link href={`/${locale}/old-app`}>Old app (fallback proxy)</Link>
          </li>
        </ul>
      </div>
      <div>{children}</div>
    </div>
  );
};
