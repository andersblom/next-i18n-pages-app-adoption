import createMiddleware from "next-intl/middleware";
import { CustomMiddleware, MiddlewareFactory } from "./chainable";
import { locales } from "@/locales";

export const localizedRoutingMiddleware: MiddlewareFactory = (
  middleware: CustomMiddleware
) => {
  return async (request, event, response) => {
    const middlewareResponse = createMiddleware({
      locales,
      defaultLocale: "en-US",
      localePrefix: "as-needed",
      localeDetection: false,
    });
    const responseWithLocalization = middlewareResponse(request);
    return middleware(request, event, responseWithLocalization);
  };
};
