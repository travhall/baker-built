import type { Metadata } from 'next';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Services — Baker Built Construction',
};

const services = [
  {
    id: 'svc-01', no: 'S‑01', label: 'Service 01', title: 'Home Remodeling',
    desc: 'Kitchens, baths, and basement finishes that respect the bones of older Minneapolis homes. We plan the layout, update what\'s behind the walls, and finish with materials chosen to last — not just to photograph well.',
    incl: ['Layout & design input', 'Demolition & protection', 'Cabinetry & millwork', 'Counters, tile & flooring', 'Electrical & plumbing updates', 'Paint & final finish'],
    tags: ['Kitchen', 'Bath', 'Basement', 'Whole-Home'],
    imgLabel: 'Remodeling — finished kitchen or bath',
    icon: <svg width="40" height="40" viewBox="0 0 42 42" fill="none" stroke="var(--blue)" strokeWidth="1.4"><rect x="4" y="14" width="20" height="24"/><rect x="16" y="4" width="22" height="34"/><line x1="16" y1="22" x2="38" y2="22"/></svg>,
  },
  {
    id: 'svc-02', no: 'S‑02', label: 'Service 02', title: 'Roofing',
    desc: 'Asphalt shingle installation and full tear-off replacement — built to handle Minnesota winters. We strip to the deck, fix what we find, and rebuild the system by the book so the warranty holds.',
    incl: ['Full tear-off to the deck', 'Deck inspection & repair', 'Ice-and-water shield', 'Synthetic underlayment', 'Architectural shingles', 'Flashing, vents & ridge'],
    tags: ['Tear-off', 'Shingle', 'Repair', 'Flashing'],
    imgLabel: 'Roofing — finished shingle roof',
    icon: <svg width="40" height="40" viewBox="0 0 42 42" fill="none" stroke="var(--blue)" strokeWidth="1.4"><polyline points="4,22 21,7 38,22"/><line x1="9" y1="22" x2="9" y2="36"/><line x1="33" y1="22" x2="33" y2="36"/><line x1="14" y1="18" x2="28" y2="18"/></svg>,
  },
  {
    id: 'svc-03', no: 'S‑03', label: 'Service 03', title: 'Window Replacement',
    desc: 'Full-frame casement, picture, and safety-glazed units — measured and fit to the opening, not forced into it. Properly flashed and air-sealed so they perform as long as they look good.',
    incl: ['On-site measure', 'Full-frame removal', 'New unit set & flash', 'Insulation & air-seal', 'Interior & exterior trim', 'Caulk & finish'],
    tags: ['Full-frame', 'Casement', 'Picture', 'Egress'],
    imgLabel: 'Windows — new full-frame unit',
    icon: <svg width="40" height="40" viewBox="0 0 42 42" fill="none" stroke="var(--blue)" strokeWidth="1.4"><rect x="7" y="6" width="28" height="30"/><line x1="21" y1="6" x2="21" y2="36"/><line x1="7" y1="21" x2="35" y2="21"/></svg>,
  },
  {
    id: 'svc-04', no: 'S‑04', label: 'Service 04', title: 'Decking',
    desc: 'Exterior decks, stairs, landings, and footings engineered to carry the load and the years. Built from the ground down first — solid footings and framing are what keep a deck feeling new a decade later.',
    incl: ['Footings & posts', 'Ledger & framing', 'Decking boards', 'Stairs & landings', 'Railings & guards', 'Hardware & flashing'],
    tags: ['Deck', 'Stairs', 'Footings', 'Railings'],
    imgLabel: 'Decking — finished deck & stairs',
    icon: <svg width="40" height="40" viewBox="0 0 42 42" fill="none" stroke="var(--blue)" strokeWidth="1.4"><line x1="6" y1="12" x2="36" y2="12"/><line x1="6" y1="18" x2="36" y2="18"/><line x1="6" y1="24" x2="36" y2="24"/><line x1="11" y1="24" x2="11" y2="36"/><line x1="31" y1="24" x2="31" y2="36"/></svg>,
  },
  {
    id: 'svc-05', no: 'S‑05', label: 'Service 05', title: 'New Builds',
    desc: 'Ground-up residential construction — from the footing plan to the final walk-through. One contact accountable for the whole structure, coordinating the trades and standing on site through every phase.',
    incl: ['Footing & foundation plan', 'Framing & sheathing', 'Roof & exterior envelope', 'Rough-in coordination', 'Interior finish', 'Final walk-through'],
    tags: ['Custom', 'Framing', 'Finish', 'Turnkey'],
    imgLabel: 'New build — framing or finished home',
    icon: <svg width="40" height="40" viewBox="0 0 42 42" fill="none" stroke="var(--blue)" strokeWidth="1.4"><polyline points="6,20 21,8 36,20"/><rect x="10" y="20" width="22" height="16"/><rect x="18" y="26" width="7" height="10"/></svg>,
  },
  {
    id: 'svc-06', no: 'S‑06', label: 'Service 06', title: 'Additions',
    desc: 'Bump-outs, second stories, and stucco repair that tie cleanly into the existing structure. The goal is simple: when it\'s done, it should look like the house was always that way.',
    incl: ['Structural tie-in', 'Framing & roofline', 'Stucco & siding', 'Window & door openings', 'Interior finish', 'Match existing'],
    tags: ['Addition', 'Second-Story', 'Stucco', 'Bump-out'],
    imgLabel: 'Addition — bump-out or stucco repair',
    icon: <svg width="40" height="40" viewBox="0 0 42 42" fill="none" stroke="var(--blue)" strokeWidth="1.4"><rect x="5" y="14" width="18" height="22"/><rect x="23" y="14" width="14" height="22" strokeDasharray="3 3"/><line x1="23" y1="14" x2="23" y2="36"/></svg>,
  },
];

export default function Services() {
  return (
    <>
      {/* ===== MASTHEAD ===== */}
      <section className="pj-masthead mast-center gridbg">
        <div className="wrap">
          <div className="pj-mast-top">
            <div>
              <div className="marker reveal"><b>SVC</b> / Services</div>
              <h1 className="pj-title reveal d1">What we build<br />&amp; <em className="em">restore</em>.</h1>
            </div>
            <p className="pj-summary reveal d2">A full-service residential scope — from a single window to a whole new structure. <span className="em">Every job planned, permitted where required, and warrantied.</span></p>
          </div>
          <div className="titlestrip reveal d1">
            <div className="cell"><div className="k">Sheet</div><div className="v accent">SVC</div></div>
            <div className="cell"><div className="k">Trades</div><div className="v">Six</div></div>
            <div className="cell"><div className="k">Service Area</div><div className="v">Twin Cities</div></div>
            <div className="cell"><div className="k">Estimates</div><div className="v">Free</div></div>
            <div className="cell"><div className="k">Languages</div><div className="v">EN · ES</div></div>
            <div className="cell"><div className="k">Status</div><div className="v ok">Booking</div></div>
          </div>
        </div>
      </section>

      {/* ===== SCOPE INDEX ===== */}
      <section className="section" style={{padding:'64px 0 0'}}>
        <div className="wrap">
          <div className="marker reveal">Scope Index / Jump to a trade</div>
          <div className="spec-grid reveal d1" style={{marginTop:'8px'}}>
            {services.map(({ id, no, title, tags, icon }) => (
              <a className="spec" href={`#${id}`} key={id} style={{textDecoration:'none'}}>
                <span className="corner"></span>
                <div className="sno">{no}</div>
                <div className="sicon">{icon}</div>
                <h3 style={{fontSize:'21px'}}>{title}</h3>
                <div className="tags">{tags.slice(0,3).map(t => <span key={t}>{t}</span>)}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRADE ROWS ===== */}
      <section className="section" style={{padding:'40px 0 90px'}}>
        <div className="wrap">
          <div className="trade-list">
            {services.map(({ id, no, label, title, desc, incl, tags, imgLabel }) => (
              <div className="trade reveal" id={id} key={id}>
                <div className="trade-fig plate ticks">
                  <span className="tick tl"></span><span className="tick tr"></span>
                  <span className="tick bl"></span><span className="tick br"></span>
                  <div className="plate-inner">
                    <div className="img-ph" role="img" aria-label={imgLabel}><span>{imgLabel}</span></div>
                  </div>
                  <div className="cap"><span className="t">{title}</span><span className="n">{no}</span></div>
                </div>
                <div className="trade-body">
                  <div className="sno">{label}</div>
                  <h3>{title}</h3>
                  <p className="desc">{desc}</p>
                  <ul className="incl">
                    {incl.map(i => <li key={i}><span className="bx"></span>{i}</li>)}
                  </ul>
                  <div className="tags">{tags.map(t => <span key={t}>{t}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <CtaBand
        heading="Not sure which scope you need? Just ask."
        body="Tell Nate what you're trying to do and he'll tell you straight what it takes — the estimate's free, and you talk to the person doing the work."
      />
    </>
  );
}
