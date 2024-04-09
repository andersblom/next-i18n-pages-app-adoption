import createMiddleware from "next-intl/middleware";
import { locales } from "./locales";

export default createMiddleware({
  locales,
  defaultLocale: "en-US",
  localePrefix: "as-needed",
  localeDetection: false,
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
