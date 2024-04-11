import { NextRequest } from "next/server";
import { CustomMiddleware, MiddlewareFactory } from "./chainable";

export const loggingMiddleware: MiddlewareFactory = (
  middleware: CustomMiddleware
) => {
  return async (request, event, response) => {
    console.log("Logging middleware – has access to locale:");
    console.log(
      response.headers.get("x-middleware-request-x-next-intl-locale")
    );
    return middleware(request, event, response);
  };
};
