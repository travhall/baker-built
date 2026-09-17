import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section nf-header">
      <div className="wrap">
        <div className="marker">404 / Not Found</div>
        <h1 className="h-section">This page doesn&apos;t exist — yet.</h1>
        <p className="lede">Head back home or jump straight to getting an estimate.</p>
        <div className="actions">
          <Link className="btn btn-accent" href="/">Go Home <span className="arw">→</span></Link>
          <Link className="btn btn-ghost" href="/estimate">Request an Estimate</Link>
        </div>
      </div>
    </section>
  );
}
