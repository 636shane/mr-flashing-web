import './globals.css';
import Link from 'next/link';
export const metadata = { title: 'MR Flashing', description: 'Draw and order custom flashings' };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{padding:'12px',borderBottom:'1px solid #ddd',display:'flex',gap:16,flexWrap:'wrap'}}>
          <strong>MR Flashing</strong>
          <nav style={{display:'flex',gap:12,flexWrap:'wrap'}}>
            <Link href="/">Draw</Link>
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