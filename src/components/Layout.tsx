import Link from "next/link";
import { locales } from "@/locales";

export const Layout = ({ children, locale }) => {
  return (
    <div>
      <div className="mb-2 bg-slate-300">
        <div>current lang: {locale}</div>
        <div>
          locales:{" "}
          {locales.map((lang) => (
            <Link
              href={`/${lang}`}
              locale={lang}
              key={lang}
              className="mr-2 link"
            >
              {lang}
            </Link>
          ))}
        </div>
      </div>
      <div className="mb-2 bg-slate-200">
        <ul className="flex">
          <li className="mr-4">
            <Link href={`/${locale}`} className="link">
              Home
            </Link>
          </li>
          <li className="mr-4">
            <Link href={`/${locale}/products`} className="link">
              Products
            </Link>
          </li>
          <li className="mr-4">
            <Link href={`/${locale}/search`} className="link">
              Search
            </Link>
          </li>
          <li>
            <Link href={`/${locale}/old-app`} className="link">
              Old app (fallback proxy)
            </Link>
          </li>
        </ul>
      </div>
      <div>{children}</div>
    </div>
  );
};
