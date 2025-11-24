import "../styles/globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <div><Link href="/">Crave Dev Docs</Link></div>
         
        </nav>
        <main>{children}</main>
        <footer className="footer">
          <div>© Crave</div>
          <div className="nav-links">
            <Link href="https://example.com/repo">Repository</Link>
            <Link href="/docs">Docs</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/license">License</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
