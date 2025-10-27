import './globals.css';
import Link from 'next/link';
export const metadata = { title:'MR Flashing', description:'Draw, price, and order custom roof flashings.' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body>
        <header style={{padding:'12px',borderBottom:'1px solid #ddd',display:'flex',gap:16,alignItems:'center',flexWrap:'wrap'}}>
          <strong>MR Flashing</strong>
          <nav style={{display:'flex',gap:12,flexWrap:'wrap'}}>
            <Link href="/">Draw</Link>
            <Link href="/templates">Templates</Link>
            <Link href="/orders">Orders</Link>
            <Link href="/suppliers">Suppliers</Link>
            <Link href="/settings">Settings</Link>
          </nav>
        </header>
        <main style={{padding:'16px'}}>{children}</main>
      </body>
    </html>
  );
}