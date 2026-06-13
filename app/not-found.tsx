import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section" style={{textAlign:'center'}}>
      <div className="wrap">
        <div className="marker" style={{justifyContent:'center'}}>404 / Not Found</div>
        <h1 className="h-section" style={{maxWidth:'20ch',margin:'0 auto 24px'}}>This page doesn&apos;t exist — yet.</h1>
        <p className="lede" style={{margin:'0 auto 36px'}}>Head back home or jump straight to getting an estimate.</p>
        <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap'}}>
          <Link className="btn btn-accent" href="/">Go Home <span className="arw">→</span></Link>
          <Link className="btn btn-ghost" href="/estimate">Request an Estimate</Link>
        </div>
      </div>
    </section>
  );
}
