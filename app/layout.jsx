import '../styles/globals.css';

const RootLayout = ({ children, title }) => (
  <html lang="en">
    <head>
      <title>{title ? `${title} - A.M.I.G.A.O` : 'A.M.I.G.A.'}</title>
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
