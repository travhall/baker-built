import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Style Guide — Baker Built Construction',
};

/* ---- small helpers used only on this page ---- */
function SectionLabel({ label }: { label: string }) {
  return (
    <div style={{
      fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.22em',
      textTransform: 'uppercase', color: 'var(--ink-3)', borderBottom: '1px solid var(--hair)',
      paddingBottom: '10px', marginBottom: '32px', marginTop: '80px',
    }}>
      {label}
    </div>
  );
}

function Swatch({ name, token, hex, dark }: { name: string; token: string; hex: string; dark?: boolean }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{
        width: '100%', aspectRatio: '1', background: `var(${token})`,
        border: '1px solid var(--hair)',
      }} />
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, color: 'var(--ink)' }}>{name}</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--ink-3)', marginTop: '3px' }}>{token}</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--ink-3)' }}>{hex}</div>
      </div>
    </div>
  );
}

export default function StyleGuide() {
  return (
    <div style={{ background: 'var(--paper)', minHeight: '100vh' }}>
      {/* ===== PAGE HEADER ===== */}
      <section className="pj-masthead mast-center gridbg">
        <div className="wrap">
          <div className="pj-mast-top">
            <div>
              <div className="marker"><b>SG</b> / Style Guide</div>
              <h1 className="pj-title">Design <em className="em">System</em> Reference.</h1>
            </div>
            <p className="pj-summary">
              Tokens, type scale, components, and patterns used across the Baker Built site. <span className="em">Blueprint × Craftsmanship</span> direction — warm paper palette, Zilla Slab display, IBM Plex Sans body.
            </p>
          </div>
          <div className="titlestrip">
            <div className="cell"><div className="k">Sheet</div><div className="v accent">SG‑01</div></div>
            <div className="cell"><div className="k">Fonts</div><div className="v">3 Families</div></div>
            <div className="cell"><div className="k">Colors</div><div className="v">10 Tokens</div></div>
            <div className="cell"><div className="k">Components</div><div className="v">12+ Types</div></div>
            <div className="cell"><div className="k">CSS</div><div className="v">globals.css</div></div>
            <div className="cell"><div className="k">Status</div><div className="v ok">Live</div></div>
          </div>
        </div>
      </section>

      <div className="wrap" style={{ paddingTop: '16px', paddingBottom: '120px' }}>

        {/* ===== COLOR ===== */}
        <SectionLabel label="01 / Color Tokens" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '24px', marginBottom: '32px' }}>
          <Swatch name="Paper" token="--paper" hex="#F4EFE3" />
          <Swatch name="Paper 2" token="--paper-2" hex="#ECE4D4" />
          <Swatch name="Paper Card" token="--paper-card" hex="#F8F4EA" />
          <Swatch name="Ink" token="--ink" hex="#2B2823" dark />
          <Swatch name="Ink 2" token="--ink-2" hex="#565047" dark />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '24px' }}>
          <Swatch name="Ink 3" token="--ink-3" hex="#8A8275" />
          <Swatch name="Red (Accent)" token="--red" hex="#EC3B30" dark />
          <Swatch name="Red Deep" token="--red-deep" hex="#C62A21" dark />
          <Swatch name="Blue" token="--blue" hex="#3C5A73" dark />
          <Swatch name="Blue Soft" token="--blue-soft" hex="#6E8499" dark />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginTop: '24px' }}>
          <div style={{ padding: '16px 20px', border: '1px solid var(--hair)', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ink-2)', background: 'var(--paper-card)' }}>
            <b style={{ color: 'var(--ink)', display: 'block', marginBottom: '6px' }}>--hair</b>rgba(43, 40, 35, 0.16) — divider lines on light backgrounds
          </div>
          <div style={{ padding: '16px 20px', background: 'var(--ink)', border: '1px solid rgba(244,239,227,0.16)', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'rgba(244,239,227,0.6)' }}>
            <b style={{ color: 'var(--paper)', display: 'block', marginBottom: '6px' }}>--grid-line / --grid-major</b>Blueprint grid lines — applied via .gridbg pseudo-element
          </div>
        </div>

        {/* ===== TYPOGRAPHY ===== */}
        <SectionLabel label="02 / Typography" />

        <div style={{ marginBottom: '40px' }}>
          <div className="mono" style={{ marginBottom: '12px' }}>Display — Zilla Slab 600, .h-display</div>
          <h1 className="h-display">Take your dream,<br />and <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>build it</em> to last.</h1>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <div className="mono" style={{ marginBottom: '12px' }}>Section — Zilla Slab 600, .h-section</div>
          <h2 className="h-section">What we build &amp; restore.</h2>
        </div>

        <div style={{ marginBottom: '40px', borderTop: '1px solid var(--hair)', paddingTop: '32px' }}>
          <div className="mono" style={{ marginBottom: '12px' }}>Project Title — .pj-title</div>
          <h1 className="pj-title">Full Kitchen &amp;<br /><em className="em">Main-Floor</em> Remodel</h1>
        </div>

        <div style={{ marginBottom: '40px', borderTop: '1px solid var(--hair)', paddingTop: '32px' }}>
          <div className="mono" style={{ marginBottom: '12px' }}>Lede — IBM Plex Sans, .lede</div>
          <p className="lede">A full-service residential scope — from a single window to a whole new structure. Every job planned, permitted where required, and warrantied.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px', borderTop: '1px solid var(--hair)', paddingTop: '32px' }}>
          <div>
            <div className="mono" style={{ marginBottom: '12px' }}>Body — IBM Plex Sans 17px</div>
            <p style={{ margin: 0, fontSize: '17px', lineHeight: 1.6, color: 'var(--ink-2)' }}>
              Nate has worked Minneapolis homes with his own hands — long before the LLC went up in 2017. He still measures the openings, pulls the permits, and stands on the roof.
            </p>
          </div>
          <div>
            <div className="mono" style={{ marginBottom: '12px' }}>Mono — IBM Plex Mono, .mono</div>
            <span className="mono" style={{ display: 'block', marginBottom: '10px' }}>Label / Annotation</span>
            <span className="mono mono-red" style={{ display: 'block', marginBottom: '10px' }}>Accent Label</span>
            <span className="mono mono-blue" style={{ display: 'block' }}>Blueprint Label</span>
          </div>
          <div>
            <div className="mono" style={{ marginBottom: '12px' }}>Signature — Zilla Slab italic, .sig</div>
            <div className="sig" style={{ marginTop: 0 }}>
              &ldquo;No job too large or too small.&rdquo;
              <span className="sub">— Nate Baker, Minneapolis MN</span>
            </div>
          </div>
        </div>

        {/* ===== MARKERS ===== */}
        <SectionLabel label="03 / Markers &amp; Labels" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div><div className="marker"><b>01</b> / Services</div></div>
          <div><div className="marker">The Person Behind the Work</div></div>
          <div style={{ background: 'var(--ink)', padding: '24px', display: 'inline-block' }}>
            <div className="marker" style={{ color: 'rgba(244,239,227,0.6)' }}><b>04</b> / The Record</div>
          </div>
        </div>

        {/* ===== BUTTONS ===== */}
        <SectionLabel label="04 / Buttons" />
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <a className="btn" href="#">Default Button <span className="arw">→</span></a>
          <a className="btn btn-ghost" href="#">Ghost Button <span className="arw">→</span></a>
          <a className="btn btn-accent" href="#">Accent Button <span className="arw">→</span></a>
          <a className="gateway" href="#">Gateway Link <span className="arw">→</span></a>
        </div>
        <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap', background: 'var(--ink)', padding: '24px' }}>
          <a className="btn btn-accent" href="#">Get a Free Estimate <span className="arw">→</span></a>
          <a className="btn btn-ghost" style={{ color: 'var(--paper)', borderColor: 'rgba(244,239,227,0.65)', background: 'transparent' }} href="#">See the Work</a>
        </div>

        {/* ===== PLATES ===== */}
        <SectionLabel label="05 / Plate &amp; Ticks" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          <div>
            <div className="mono" style={{ marginBottom: '12px' }}>Standard plate with crosshair ticks + titleblock</div>
            <div className="plate ticks" style={{ maxWidth: '420px' }}>
              <span className="tick tl"></span><span className="tick tr"></span>
              <span className="tick bl"></span><span className="tick br"></span>
              <div className="plate-inner">
                <div className="img-ph" style={{ aspectRatio: '4/3' }}><span>Photo placeholder · 4:3</span></div>
              </div>
              <div className="titleblock">
                <div><div className="tk">Subject</div><div className="tv">Nate Baker</div></div>
                <div><div className="tk">Role</div><div className="tv">Owner · Operator</div></div>
                <div><div className="tk">Sheet</div><div className="tv">FIG‑00</div></div>
              </div>
            </div>
          </div>
          <div>
            <div className="mono" style={{ marginBottom: '12px' }}>Image placeholder (.img-ph) — various aspect ratios</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="img-ph" style={{ aspectRatio: '16/9' }}><span>Hero shot · 16:9 (.pj-fig-slot)</span></div>
              <div className="img-ph" style={{ aspectRatio: '4/3' }}><span>Work card · 4:3 (.work-slot)</span></div>
              <div className="img-ph" style={{ aspectRatio: '3/2' }}><span>Gallery · 3:2 (.gal-cell)</span></div>
            </div>
          </div>
        </div>

        {/* ===== TITLE STRIP ===== */}
        <SectionLabel label="06 / Title Strip" />
        <div className="mono" style={{ marginBottom: '12px' }}>Architectural data row — .titlestrip (6 cells, collapses to 3 then 2 on smaller screens)</div>
        <div className="titlestrip">
          <div className="cell"><div className="k">Project No.</div><div className="v accent">PRJ‑01</div></div>
          <div className="cell"><div className="k">Scope</div><div className="v">Whole-Home Interior</div></div>
          <div className="cell"><div className="k">Location</div><div className="v">North Minneapolis</div></div>
          <div className="cell"><div className="k">Duration</div><div className="v">≈ 9 Weeks</div></div>
          <div className="cell"><div className="k">Crew</div><div className="v">Nate + Trades</div></div>
          <div className="cell"><div className="k">Status</div><div className="v ok">Complete</div></div>
        </div>

        {/* ===== SPEC GRID ===== */}
        <SectionLabel label="07 / Spec Grid (Services)" />
        <div className="mono" style={{ marginBottom: '12px' }}>3-column card grid — .spec-grid / .spec — hover shows blueprint corner tick</div>
        <div className="spec-grid">
          {[
            { no: 'S‑01', title: 'Home Remodeling', desc: 'Kitchens, baths, and basement finishes.', tags: ['Kitchen', 'Bath', 'Basement'] },
            { no: 'S‑02', title: 'Roofing', desc: 'Asphalt shingle installation and full tear-off replacement.', tags: ['Tear-off', 'Shingle', 'Repair'] },
            { no: 'S‑03', title: 'Window Replacement', desc: 'Full-frame casement, picture, and safety-glazed units.', tags: ['Full-frame', 'Casement', 'Picture'] },
          ].map(({ no, title, desc, tags }) => (
            <div className="spec" key={no}>
              <span className="corner"></span>
              <div className="sno">{no}</div>
              <div style={{ marginBottom: '16px', marginTop: '18px' }}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="var(--blue)" strokeWidth="1.4">
                  <rect x="3" y="10" width="16" height="20"/><rect x="13" y="3" width="18" height="27"/>
                </svg>
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="tags">{tags.map(t => <span key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>

        {/* ===== WORK CARDS ===== */}
        <SectionLabel label="08 / Work Cards" />
        <div className="mono" style={{ marginBottom: '12px' }}>Project index card — .work-card — hover lifts with shadow. Last meta cell turns accent on hover.</div>
        <div className="work-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <article className="work-card">
            <div className="plate ticks">
              <span className="tick tl"></span><span className="tick tr"></span>
              <span className="tick bl"></span><span className="tick br"></span>
              <div className="plate-inner">
                <div className="img-ph work-slot"><span>Kitchen &amp; main-floor remodel</span></div>
              </div>
              <div className="work-block">
                <div className="wb-name">Full Kitchen &amp; Main-Floor Remodel</div>
                <div className="wb-meta">
                  <div><div className="tk">Scope</div><div className="tv">Whole-Home</div></div>
                  <div><div className="tk">Location</div><div className="tv">North Minneapolis</div></div>
                  <div><div className="tk">Sheet</div><div className="tv">PRJ‑01</div></div>
                </div>
                <Link className="wb-open" href="/work/kitchen-remodel">View Project Sheet <span className="arw">→</span></Link>
              </div>
            </div>
          </article>
          <article className="work-card">
            <div className="plate ticks">
              <span className="tick tl"></span><span className="tick tr"></span>
              <span className="tick bl"></span><span className="tick br"></span>
              <div className="plate-inner">
                <div className="img-ph work-slot"><span>Sheet in progress</span></div>
              </div>
              <div className="work-block">
                <div className="wb-name">Full-Frame Window Overhaul</div>
                <div className="wb-meta">
                  <div><div className="tk">Scope</div><div className="tv">Windows</div></div>
                  <div><div className="tk">Location</div><div className="tv">Webber–Camden</div></div>
                  <div><div className="tk">Sheet</div><div className="tv">PRJ‑03</div></div>
                </div>
                <div className="wb-open pending"><span className="st">Sheet in progress</span></div>
              </div>
            </div>
          </article>
        </div>

        {/* ===== CREDENTIALS ===== */}
        <SectionLabel label="09 / Credential Badges" />
        <div className="mono" style={{ marginBottom: '12px' }}>Trust signals — .cred — red diamond (default) or blue diamond (.cred.blue)</div>
        <div className="creds">
          <span className="cred"><span className="bd"></span>BuildZoom Score 95</span>
          <span className="cred blue"><span className="bd"></span>Licensed LLC</span>
          <span className="cred"><span className="bd"></span>Free Estimates</span>
          <span className="cred blue"><span className="bd"></span>Work Warrantied</span>
          <span className="cred"><span className="bd"></span>Se habla español</span>
        </div>

        {/* ===== TAGS ===== */}
        <SectionLabel label="10 / Tags" />
        <div className="mono" style={{ marginBottom: '12px' }}>Scope / trade labels — used in spec cards, trade rows, and build phases</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
          {['Kitchen', 'Bath', 'Basement', 'Tear-off', 'Architectural Shingle', 'Full-frame', 'Egress', 'Footings', 'Custom Build', 'Stucco', 'Flush Beam', 'Ice-and-Water'].map(t => (
            <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink-2)', border: '1px solid var(--hair)', padding: '4px 9px' }}>{t}</span>
          ))}
        </div>

        {/* ===== FORMS ===== */}
        <SectionLabel label="11 / Form Elements" />
        <div className="mono" style={{ marginBottom: '12px' }}>Work order form — .field, inputs, select, textarea — focus ring uses accent red</div>
        <div style={{ maxWidth: '560px', border: '1px solid var(--hair)', background: 'var(--paper-card)' }}>
          <div style={{ padding: '32px 36px' }}>
            <div className="field row2">
              <div><label>Name</label><input type="text" placeholder="Your name" /></div>
              <div><label>Phone</label><input type="tel" placeholder="(612) 000‑0000" /></div>
            </div>
            <div className="field">
              <label>Project Type</label>
              <select defaultValue="">
                <option value="" disabled>Select a scope…</option>
                <option>Home Remodeling</option>
                <option>Roofing</option>
              </select>
            </div>
            <div className="field">
              <label>Brief Description</label>
              <textarea placeholder="What are you looking to build, repair, or replace?"></textarea>
            </div>
            <button className="btn btn-accent" style={{ width: '100%', justifyContent: 'center' }}>Submit Request <span className="arw">→</span></button>
          </div>
        </div>

        {/* ===== STAT ROW ===== */}
        <SectionLabel label="12 / Stat Row &amp; Quotes" />
        <div className="mono" style={{ marginBottom: '12px' }}>Proof section — dark ink background, noise texture, stat row + quote cards</div>
        <div style={{ background: 'var(--ink)', padding: '48px' }}>
          <div className="proof-tex">
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="stat-row" style={{ marginTop: 0 }}>
                <div className="stat"><div className="v">95<span className="u">/100</span></div><div className="k">BuildZoom Score</div></div>
                <div className="stat"><div className="v">20<span className="u">+</span></div><div className="k">Years Hands-On</div></div>
                <div className="stat"><div className="v">2017</div><div className="k">LLC Established</div></div>
                <div className="stat"><div className="v">100<span className="u">%</span></div><div className="k">Nate, On Site</div></div>
              </div>
              <div className="quotes" style={{ marginTop: '24px' }}>
                <div className="quote">
                  <div className="qm">Tagline / On Record</div>
                  <p>&ldquo;Take your dream and make it a reality.&rdquo;</p>
                  <div className="by">— Baker Built Construction</div>
                </div>
                <div className="quote empty">
                  <div className="qm" style={{ color: 'rgba(244,239,227,0.55)' }}>Awaiting · Plate Reserved</div>
                  <p>Your review goes here — collected as each Twin Cities project wraps.</p>
                  <div className="by">— Reserved for a recent client</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== CTA BAND ===== */}
        <SectionLabel label="13 / CTA Band" />
        <div className="mono" style={{ marginBottom: '12px' }}>Estimate call-to-action band — closes every interior page</div>
        <div className="cta-band">
          <div className="proof-tex">
            <div className="wrap">
              <div className="inner" style={{ padding: '56px 0' }}>
                <div>
                  <div className="marker" style={{ color: 'rgba(244,239,227,0.6)' }}><b>05</b> / Request an Estimate</div>
                  <h2 className="h-section" style={{ color: 'var(--paper)', maxWidth: '18ch' }}>Tell Nate about the project. The estimate&apos;s free.</h2>
                  <p className="lede" style={{ color: 'rgba(244,239,227,0.82)', marginTop: '20px' }}>A free, no-pressure estimate from the person who&apos;ll actually do the work.</p>
                </div>
                <div className="actions">
                  <Link className="btn btn-accent" href="/estimate" style={{ fontSize: '14px', padding: '18px 30px' }}>Request a Free Estimate <span className="arw">→</span></Link>
                  <div className="callbox">
                    <div className="k">Call / Text</div>
                    <div className="v"><a href="tel:+16129643505">(612) 964‑3505</a></div>
                    <div className="sub">Mon–Fri · 8AM–5PM · Se habla español</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== BLUEPRINT GRID ===== */}
        <SectionLabel label="14 / Blueprint Grid Background" />
        <div className="mono" style={{ marginBottom: '12px' }}>Applied via .gridbg — 30px cell minor grid, 150px major grid, blueprint blue lines, faded at edges</div>
        <div className="gridbg" style={{ border: '1px solid var(--hair)', minHeight: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <div className="marker" style={{ justifyContent: 'center', marginBottom: '8px' }}>Grid Background</div>
            <p style={{ margin: 0, color: 'var(--ink-2)', fontSize: '15px' }}>Content sits on top via <code style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', background: 'var(--paper-2)', padding: '2px 6px' }}>z-index: 1</code></p>
          </div>
        </div>

        {/* ===== REVEAL ANIMATION ===== */}
        <SectionLabel label="15 / Reveal Animation" />
        <div style={{ border: '1px solid var(--hair)', background: 'var(--paper-card)', padding: '32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div>
              <div className="mono" style={{ marginBottom: '16px' }}>How it works</div>
              <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--ink-2)', margin: '0 0 16px' }}>
                Elements with <code style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', background: 'var(--paper-2)', padding: '2px 6px' }}>.reveal</code> start at <code style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', background: 'var(--paper-2)', padding: '2px 6px' }}>opacity: 0; translateY(22px)</code>. An IntersectionObserver in <code style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', background: 'var(--paper-2)', padding: '2px 6px' }}>RevealObserver.tsx</code> adds <code style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', background: 'var(--paper-2)', padding: '2px 6px' }}>.in</code> when 12% of the element enters the viewport.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 }}>
                Stagger delays: <code style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', background: 'var(--paper-2)', padding: '2px 6px' }}>.d1</code> 70ms, <code style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', background: 'var(--paper-2)', padding: '2px 6px' }}>.d2</code> 140ms, <code style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', background: 'var(--paper-2)', padding: '2px 6px' }}>.d3</code> 210ms, <code style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', background: 'var(--paper-2)', padding: '2px 6px' }}>.d4</code> 280ms. Disabled by <code style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', background: 'var(--paper-2)', padding: '2px 6px' }}>prefers-reduced-motion</code>.
              </p>
            </div>
            <div>
              <div className="mono" style={{ marginBottom: '16px' }}>Usage example</div>
              <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '11.5px', lineHeight: 1.7, color: 'var(--ink-2)', background: 'var(--paper-2)', padding: '16px 20px', overflowX: 'auto' }}>{`<div className="marker reveal">
  <b>01</b> / Services
</div>
<h2 className="h-section reveal d1">
  What we build.
</h2>
<p className="lede reveal d2">
  Supporting text...
</p>`}</pre>
            </div>
          </div>
        </div>

        {/* ===== BREADCRUMB ===== */}
        <SectionLabel label="16 / Breadcrumb / Sheet Bar" />
        <div className="mono" style={{ marginBottom: '12px' }}>Used on project detail pages — .crumb — sheet number anchored right</div>
        <div className="crumb" style={{ position: 'static' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '50px', gap: '18px' }}>
            <div className="path">
              <Link href="/work"><span className="arw">←</span> Selected Work</Link>
              <span className="sep">/</span>
              <span className="here">Full Kitchen &amp; Main-Floor Remodel</span>
            </div>
            <div className="sheetno">Sheet PRJ‑01</div>
          </div>
        </div>

        {/* ===== NEXT CARDS ===== */}
        <SectionLabel label="17 / Project Navigation Cards" />
        <div className="mono" style={{ marginBottom: '12px' }}>End-of-project nav — .pj-next — &ldquo;next project&rdquo; + CTA card pair</div>
        <div className="pj-next">
          <div className="wrap" style={{ padding: 0 }}>
            <Link className="navcard" href="/work/roof-tearoff">
              <div className="k">Next Project <span className="arw">→</span></div>
              <div className="t">Asphalt Roof Tear-Off</div>
            </Link>
            <Link className="navcard cta" href="/estimate">
              <div className="k">Start Yours <span className="arw">→</span></div>
              <div className="t">Get a Free Estimate</div>
              <div className="sub">Tell Nate about your project — the estimate&apos;s free, and you talk to the person doing the work.</div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
