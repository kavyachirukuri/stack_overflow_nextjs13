import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  // "/",
  // "/api/webhook",
  // "/question/:id",
  // "/tags",
  "/tags/:id",
  "/profile/:id",
  "/collection",
  // "/community",
  // "/jobs",
]);

export default clerkMiddleware((auth, request) => {
  if (isProtectedRoute(request)) auth().protect();
});

// export default authMiddleware({
//   publicRoutes: [
//     "/",
//     "/api/webhook",
//     "/question/:id",
//     "/tags",
//     "/tags/:id",
//     "/profile/:id",
//     "/community",
//     "/jobs",
//   ],
//   ignoredRoutes: ["/api/webhook", "/api/chatgpt"],
// });

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
