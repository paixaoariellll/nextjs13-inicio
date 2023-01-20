import nextAuthMiddleware from 'next-auth/middleware';

export const middleware = nextAuthMiddleware;

export const config = { matcher: ['/admin'] };
