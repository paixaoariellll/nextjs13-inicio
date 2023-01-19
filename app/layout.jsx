'use client';

import { SessionProvider } from 'next-auth/react';

const RootLayout = ({ children }) => (
  <html>
    <head />
    <SessionProvider>
      <body>{children}</body>
    </SessionProvider>
  </html>
);

export default RootLayout;
