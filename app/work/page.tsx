import type { Metadata } from 'next';
import CtaBand from '@/components/CtaBand';
import WorkCard from '@/components/WorkCard';
import { workCards } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Work',
  openGraph: {
    title: 'Work — Baker Built Construction',
    description: 'A working record of recent projects across the Twin Cities. Photography is added as jobs wrap — open any sheet to see the full story.',
  },
};

export default function Work() {
  return (
    <>
      {/* ===== MASTHEAD ===== */}
      <section className="pj-masthead mast-center gridbg">
        <div className="wrap">
          <div className="pj-mast-top">
            <div>
              <div className="marker"><b>WRK</b> / Selected Work</div>
              <h1 className="pj-title">Projects from<br />the <em className="em">field</em>.</h1>
            </div>
            <p className="pj-summary">A working record of recent projects across the Twin Cities. <span className="em">Photography is added as jobs wrap</span> — open any sheet to see the full story.</p>
          </div>
        </div>
      </section>

      {/* ===== PROJECT GRID ===== */}
      <section className="section work-index">
        <div className="wrap">
          <div className="idx-head reveal">
            <div className="marker">Project Index</div>
            <div className="count"><b>02</b> sheets live · 04 in progress</div>
          </div>
          <div className="work-grid reveal d1">
            {workCards.map((card) => (
              <WorkCard key={card.sheet} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <CtaBand
        heading="Your project could be the next sheet."
        body="Tell Nate what you're planning — the estimate's free, and you talk to the person who'll actually be on site."
      />
    </>
  );
}
