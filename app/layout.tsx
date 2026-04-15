import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import '@/styles/globals.css';

const Navigation = dynamic(() => import('@/components/Navigation'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Pritvish Mandal - Technical Lead | Backend Systems Architect" />
        <meta name="keywords" content="Java, Spring Boot, Microservices, Kubernetes, GCP, Cloud Architecture" />
        <title>Pritvish Mandal - Technical Lead</title>
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
