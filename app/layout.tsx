// Root layout for the whole app!
// If you want to change the font, meta tags, or add global providers, this is the spot :)
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Artistly - Premier Artist Booking Platform',
  description: 'Connect with talented performing artists across India. Book singers, dancers, speakers, and DJs for your events.',
  keywords: 'artist booking, event planning, performers, singers, dancers, speakers, DJs, India',
  authors: [{ name: 'Artistly Team' }],
  openGraph: {
    title: 'Artistly - Premier Artist Booking Platform',
    description: 'Connect with talented performing artists across India.',
    url: 'https://artistly.com',
    siteName: 'Artistly',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artistly - Premier Artist Booking Platform',
    description: 'Connect with talented performing artists across India.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags and fonts for the whole app! */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body style={{ fontFamily: 'Inter, sans-serif' }}>{children}</body>
    </html>
  );
}