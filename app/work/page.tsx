import type { Metadata } from 'next';
import CtaBand from '@/components/CtaBand';
import WorkCard from '@/components/WorkCard';
import { workCards } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Work — Baker Built Construction',
};

export default function Work() {
  return (
    <>
      {/* ===== MASTHEAD ===== */}
      <section className="pj-masthead mast-center gridbg">
        <div className="wrap">
          <div className="pj-mast-top">
            <div>
              <div className="marker reveal"><b>WRK</b> / Selected Work</div>
              <h1 className="pj-title reveal d1">Projects from<br />the <em className="em">field</em>.</h1>
            </div>
            <p className="pj-summary reveal d2">A working record of recent projects across the Twin Cities. <span className="em">Photography is added as jobs wrap</span> — open any sheet to see the full story.</p>
          </div>
          <div className="titlestrip reveal d1">
            <div className="cell"><div className="k">Sheet</div><div className="v accent">WRK</div></div>
            <div className="cell"><div className="k">On Record</div><div className="v">6 Projects</div></div>
            <div className="cell"><div className="k">Detail Sheets</div><div className="v ok">2 Live</div></div>
            <div className="cell"><div className="k">Area</div><div className="v">Twin Cities</div></div>
            <div className="cell"><div className="k">Scopes</div><div className="v">All Trades</div></div>
            <div className="cell"><div className="k">Status</div><div className="v">Adding More</div></div>
          </div>
        </div>
      </section>

      {/* ===== PROJECT GRID ===== */}
      <section className="section work-index" style={{paddingTop:'64px'}}>
        <div className="wrap">
          <div className="idx-head reveal">
            <div className="marker" style={{marginBottom:0}}>Project Index</div>
            <div className="count"><b>02</b> sheets live · 04 in progress</div>
          </div>
          <div className="work-grid reveal d1" style={{marginTop:'26px'}}>
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
