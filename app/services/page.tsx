import type { Metadata } from 'next';
import CtaBand from '@/components/CtaBand';
import { getAllServices } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Services',
  openGraph: {
    title: 'Services — Baker Built Construction',
    description: 'A full-service residential scope — from a single window to a whole new structure. Every job planned, permitted where required, and warrantied.',
  },
};

const services = getAllServices();

export default function Services() {
  return (
    <>
      {/* ===== MASTHEAD ===== */}
      <section className="pj-masthead mast-center gridbg">
        <div className="wrap">
          <div className="pj-mast-top">
            <div>
              <div className="marker"><b>SVC</b> / Services</div>
              <h1 className="pj-title">What we build<br />&amp; <em className="em">restore</em>.</h1>
            </div>
            <p className="pj-summary">A full-service residential scope — from a single window to a whole new structure. <span className="em">Every job planned, permitted where required, and warrantied.</span></p>
          </div>
        </div>
      </section>

      {/* ===== SCOPE INDEX ===== */}
      <section className="section svc-index">
        <div className="wrap">
          <div className="marker reveal">Scope Index / Jump to a trade</div>
          <div className="spec-grid reveal d1">
            {services.map(({ id, no, title, tags, icon }) => (
              <a className="spec" href={`#${id}`} key={id}>
                <span className="corner"></span>
                <div className="sno">{no}</div>
                <div className="sicon">{icon}</div>
                <h3>{title}</h3>
                <div className="tags">{tags.slice(0,3).map(t => <span key={t}>{t}</span>)}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRADE ROWS ===== */}
      <section className="section svc-trades">
        <div className="wrap">
          <div className="trade-list">
            {services.map(({ id, no, label, title, fullDesc, incl, tags, imgLabel }) => (
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
                  <p className="desc">{fullDesc}</p>
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
