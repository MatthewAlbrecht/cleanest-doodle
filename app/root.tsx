import { LinksFunction, Scripts } from 'remix';
import { LiveReload, Outlet, Links } from 'remix';

import tailwindUrl from './tailwind.css';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: tailwindUrl,
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&family=Lato:wght@400;700&display=swap',
    },
  ];
};
export default function App() {
  return (
    <html lang="en" className="font-body">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Remix: So great, it's funny!</title>
        <Links />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-doodlesBg-1 via-doodlesBg-3  to-doodlesBg-5">
        <Outlet />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
        <Scripts />
      </body>
    </html>
  );
}
