import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CtaBand from '@/components/CtaBand';
import WorkCard from '@/components/WorkCard';
import AboutPortrait from '@/components/AboutPortrait';

export const metadata: Metadata = {
  title: 'Baker Built Construction — Minneapolis General Contractor',
};

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <header className="hero hero-feature gridbg" id="top">
        <div className="wrap">
          <div className="hero-copy">
            <div className="hero-eyebrow reveal">
              <span className="dot"></span>
              <span className="mono">20+ Years of Twin Cities Craftsmanship</span>
            </div>
            <h1 className="h-display reveal d1">
              Take your dream,<br />and <em className="em">build it</em> to last.
            </h1>
            <p className="lede reveal d2">
              Baker Built Construction is Nate Baker — a Minneapolis general contractor handling remodels, roofing, windows, decks, and new builds. Planned with care, measured twice, and finished like it&apos;s his own home.
            </p>
            <div className="hero-actions reveal d3">
              <Link className="btn btn-accent" href="/estimate">Get a Free Estimate <span className="arw">→</span></Link>
              <Link className="btn btn-ghost" href="/work">See the Work</Link>
            </div>
            <div className="hero-meta reveal d4">
              <div className="it"><div className="v">20<span className="u">+</span></div><div className="k">Years Experience</div></div>
              <div className="it"><div className="v">95</div><div className="k">BuildZoom Score</div></div>
              <div className="it"><div className="v">No.<span className="u">1</span></div><div className="k">Job too big or small</div></div>
            </div>
          </div>

          {/* full-bleed photo */}
          <div className="hero-plate reveal d2">
            <div className="plate">
              <div className="plate-inner">
                <Image
                  className="hero-slot"
                  src="/hero-cabin.jpg"
                  alt="Custom home built by Baker Built Construction"
                  width={1200}
                  height={926}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===== SERVICES ===== */}
      <section className="section" id="services">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="marker reveal"><b>01</b> / Services</div>
              <h2 className="h-section reveal">What we build &amp; restore.</h2>
              <p className="lede reveal d1">A full-service residential scope — from a single window to a whole new structure. Every job planned, permitted where required, and warrantied.</p>
            </div>
            <Link className="btn btn-ghost reveal d1" href="/services">All Services <span className="arw">→</span></Link>
          </div>

          <div className="spec-grid reveal d1">
            {[
              { no: 'S‑01', title: 'Home Remodeling', desc: 'Kitchens, baths, and basement finishes that respect the bones of older Minneapolis homes.', tags: ['Kitchen', 'Bath', 'Basement'], icon: <svg width="42" height="42" viewBox="0 0 42 42" fill="none" stroke="var(--blue)" strokeWidth="1.4"><rect x="4" y="14" width="20" height="24"/><rect x="16" y="4" width="22" height="34"/><line x1="16" y1="22" x2="38" y2="22"/></svg> },
              { no: 'S‑02', title: 'Roofing', desc: 'Asphalt shingle installation and full tear-off replacement — built to handle MN winters.', tags: ['Tear-off', 'Shingle', 'Repair'], icon: <svg width="42" height="42" viewBox="0 0 42 42" fill="none" stroke="var(--blue)" strokeWidth="1.4"><polyline points="4,22 21,7 38,22"/><line x1="9" y1="22" x2="9" y2="36"/><line x1="33" y1="22" x2="33" y2="36"/><line x1="14" y1="18" x2="28" y2="18"/></svg> },
              { no: 'S‑03', title: 'Window Replacement', desc: 'Full-frame casement, picture, and safety-glazed units — measured and fit to the opening.', tags: ['Full-frame', 'Casement', 'Picture'], icon: <svg width="42" height="42" viewBox="0 0 42 42" fill="none" stroke="var(--blue)" strokeWidth="1.4"><rect x="7" y="6" width="28" height="30"/><line x1="21" y1="6" x2="21" y2="36"/><line x1="7" y1="21" x2="35" y2="21"/></svg> },
              { no: 'S‑04', title: 'Decking', desc: 'Exterior decks, stairs, landings, and footings engineered to carry the load and the years.', tags: ['Deck', 'Stairs', 'Footings'], icon: <svg width="42" height="42" viewBox="0 0 42 42" fill="none" stroke="var(--blue)" strokeWidth="1.4"><line x1="6" y1="12" x2="36" y2="12"/><line x1="6" y1="18" x2="36" y2="18"/><line x1="6" y1="24" x2="36" y2="24"/><line x1="11" y1="24" x2="11" y2="36"/><line x1="31" y1="24" x2="31" y2="36"/></svg> },
              { no: 'S‑05', title: 'New Builds', desc: 'Ground-up residential construction — from footing plan to final walk-through.', tags: ['Custom', 'Framing', 'Finish'], icon: <svg width="42" height="42" viewBox="0 0 42 42" fill="none" stroke="var(--blue)" strokeWidth="1.4"><polyline points="6,20 21,8 36,20"/><rect x="10" y="20" width="22" height="16"/><rect x="18" y="26" width="7" height="10"/></svg> },
              { no: 'S‑06', title: 'Additions', desc: 'Bump-outs, second stories, and stucco repair that tie cleanly into the existing structure.', tags: ['Addition', 'Stucco', 'Exterior'], icon: <svg width="42" height="42" viewBox="0 0 42 42" fill="none" stroke="var(--blue)" strokeWidth="1.4"><rect x="5" y="14" width="18" height="22"/><rect x="23" y="14" width="14" height="22" strokeDasharray="3 3"/><line x1="23" y1="14" x2="23" y2="36"/></svg> },
            ].map(({ no, title, desc, tags, icon }) => (
              <div className="spec" key={no}>
                <span className="corner"></span>
                <div className="sno">{no}</div>
                <div className="sicon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="tags">{tags.map(t => <span key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="section about" id="about">
        <div className="wrap">
          <AboutPortrait />
          <div className="copy">
            <div className="marker reveal"><b>02</b> / About</div>
            <h2 className="h-section reveal">Nate Baker <span style={{fontStyle:'italic',fontWeight:400}}>is</span> Baker Built.</h2>
            <p className="reveal d1">For more than <span className="em">twenty years</span> Nate has worked Minneapolis homes with his own hands — long before the LLC went up in 2017. He still measures the openings, pulls the permits, and stands on the roof.</p>
            <p className="reveal d1">That means one point of contact, one person accountable, and no job passed down a chain. From a steep roof replacement to a basement remodel, the standard doesn&apos;t change: <span className="em">plan it carefully, build it right the first time.</span></p>
            <div className="creds reveal d2">
              <span className="cred"><span className="bd"></span>BuildZoom Score 95</span>
              <span className="cred blue"><span className="bd"></span>Licensed LLC</span>
              <span className="cred"><span className="bd"></span>Free Estimates</span>
              <span className="cred blue"><span className="bd"></span>Work Warrantied</span>
              <span className="cred"><span className="bd"></span>Se habla español</span>
            </div>
            <div className="sig reveal d2">&ldquo;No job too large or too small.&rdquo;<span className="sub">— Nate Baker, Minneapolis MN</span></div>
            <Link className="gateway reveal d2" href="/about" style={{marginTop:'30px'}}>More About Baker Built <span className="arw">→</span></Link>
          </div>
        </div>
      </section>

      {/* ===== WORK ===== */}
      <section className="section" id="work">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="marker reveal"><b>03</b> / Selected Work</div>
              <h2 className="h-section reveal">Projects from the field.</h2>
              <p className="lede reveal d1">A working record of recent projects across the Twin Cities — open a project to see the full story.</p>
            </div>
            <Link className="btn btn-ghost reveal d1" href="/work">All Projects <span className="arw">→</span></Link>
          </div>
          <div className="work-grid reveal d1">
            {[
              { name: 'Full Kitchen & Main-Floor Remodel', scope: 'Whole-Home', location: 'North Minneapolis', sheet: 'PRJ‑01', slug: '/work/kitchen-remodel', label: 'Kitchen & main-floor remodel' },
              { name: 'Asphalt Roof Tear-Off', scope: 'Exterior', location: 'Camden', sheet: 'PRJ‑02', slug: '/work/roof-tearoff', label: 'Asphalt roof tear-off' },
              { name: 'Full-Frame Window Overhaul', scope: 'Windows', location: 'Webber–Camden', sheet: 'PRJ‑03', slug: null, label: 'Full-frame window overhaul' },
              { name: 'Rear Deck & Stairs', scope: 'Decking', location: 'Victory', sheet: 'PRJ‑04', slug: null, label: 'Rear deck & stairs' },
              { name: 'Basement Finish', scope: 'Basement', location: 'Folwell', sheet: 'PRJ‑05', slug: null, label: 'Basement finish + egress' },
              { name: 'Stucco Repair & Bump-Out', scope: 'Addition', location: 'Jordan', sheet: 'PRJ‑06', slug: null, label: 'Stucco repair & bump-out' },
            ].map((card) => (
              <WorkCard key={card.sheet} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROOF ===== */}
      <section className="proof">
        <div className="proof-tex">
          <div className="section" style={{padding:'104px 0'}}>
            <div className="wrap">
              <div className="marker reveal"><b>04</b> / The Record</div>
              <h2 className="h-section reveal" style={{maxWidth:'18ch'}}>Earned the right way — one solid job at a time.</h2>
              <div className="stat-row reveal d1">
                <div className="stat"><div className="v">95<span className="u">/100</span></div><div className="k">BuildZoom Score</div></div>
                <div className="stat"><div className="v">20<span className="u">+</span></div><div className="k">Years Hands-On</div></div>
                <div className="stat"><div className="v">2017</div><div className="k">LLC Established</div></div>
                <div className="stat"><div className="v">100<span className="u">%</span></div><div className="k">Nate, On Site</div></div>
              </div>
              <div className="quotes reveal d2">
                <div className="quote">
                  <div className="qm">Tagline / On Record</div>
                  <p>&ldquo;Take your dream and make it a reality.&rdquo;</p>
                  <div className="by">— Baker Built Construction</div>
                </div>
                <div className="quote empty">
                  <div className="qm" style={{color:'rgba(244,239,227,0.55)'}}>Awaiting · Plate Reserved</div>
                  <p>Your review goes here. We&apos;re collecting them as each Twin Cities project wraps.</p>
                  <div className="by">— Reserved for a recent client</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <div id="estimate">
        <CtaBand
          heading="Tell Nate about the project. The estimate's free."
          body="A free, no-pressure estimate from the person who'll actually do the work — fill out the work-order request or call direct."
        />
      </div>
    </>
  );
}
