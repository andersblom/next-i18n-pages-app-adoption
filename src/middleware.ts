import { chain } from "./middleware/chainable";
import { loggingMiddleware } from "./middleware/logging";
import { localizedRoutingMiddleware } from "./middleware/localize-routes";

export default chain([localizedRoutingMiddleware, loggingMiddleware]);

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
