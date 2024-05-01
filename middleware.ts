import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: [//routes to be accessible even when user isnt logged in
        '/',
        '/events/:id',
        '/api/webhook/clerk',
        '/api/webhook/stripe',//for payment
        '/api/uploadthing',
        '/favicon.ico',
        '/assets/images/logo.svg',
        '/assets/images/hero.png'
         
    ],
    ignoredRoutes:[
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing',
    '/assests/images/logo.svg'
  ]
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};