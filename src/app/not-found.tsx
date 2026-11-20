import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="card center">
      <h1>Page not found</h1>
      <p>The page you are looking for doesn&apos;t exist or has moved.</p>
      <div className="btn-row" style={{ justifyContent: 'center' }}>
        <Link className="btn" href="/">Dashboard</Link>
        <Link className="btn soft" href="/search">Search</Link>
      </div>
    </div>
  );
}
