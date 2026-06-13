import type { Metadata } from 'next';
import Link from 'next/link';
import EstimateForm from '@/components/EstimateForm';

export const metadata: Metadata = {
  title: 'Request an Estimate — Baker Built Construction',
};

export default function Estimate() {
  return (
    <>
      {/* ===== MASTHEAD ===== */}
      <section className="pj-masthead mast-center gridbg">
        <div className="wrap">
          <div className="pj-mast-top">
            <div>
              <div className="marker reveal"><b>EST</b> / Request an Estimate</div>
              <h1 className="pj-title reveal d1">Tell Nate about<br />the project. The <em className="em">estimate&apos;s free</em>.</h1>
            </div>
            <p className="pj-summary reveal d2">Fill out the work-order request below or call direct. <span className="em">You&apos;ll hear back within one business day</span> — from the person who&apos;ll actually do the work.</p>
          </div>
          <div className="titlestrip reveal d1">
            <div className="cell"><div className="k">Form</div><div className="v accent">EST‑01</div></div>
            <div className="cell"><div className="k">Cost</div><div className="v">No Charge</div></div>
            <div className="cell"><div className="k">Response</div><div className="v ok">1 Business Day</div></div>
            <div className="cell"><div className="k">Hours</div><div className="v">Mon–Fri 8–5</div></div>
            <div className="cell"><div className="k">Area</div><div className="v">Twin Cities</div></div>
            <div className="cell"><div className="k">Languages</div><div className="v">EN · ES</div></div>
          </div>
        </div>
      </section>

      {/* ===== ESTIMATE CARD ===== */}
      <section className="section contact" id="work-order" style={{paddingTop:'64px'}}>
        <div className="wrap">
          <div className="estimate-card reveal d1">
            <EstimateForm />

            <div className="info-side reveal d1">
              <div className="info-block">
                <div className="k">Call / Text</div>
                <div className="v lg"><a href="tel:+16129643505">(612) 964‑3505</a></div>
              </div>
              <div className="info-block">
                <div className="k">Hours</div>
                <div className="v">Mon – Fri · 8AM – 5PM</div>
                <div className="sub">Closed Saturday &amp; Sunday</div>
              </div>
              <div className="info-block">
                <div className="k">Shop</div>
                <div className="v">2636 Thomas Ave N<br />Minneapolis, MN 55411</div>
                <div className="sub">Serving the Twin Cities metro &amp; surrounding suburbs</div>
              </div>
              <div className="info-block">
                <div className="k">Languages</div>
                <div className="v">English · Español</div>
                <div className="sub">Se habla español</div>
              </div>
            </div>
          </div>

          {/* WHAT HAPPENS NEXT */}
          <div style={{marginTop:'54px'}}>
            <div className="marker reveal">What Happens Next / The Process</div>
            <div className="next-steps reveal d1">
              <div className="step">
                <div className="n">01</div>
                <h4>We talk it through</h4>
                <p>Nate calls back within a business day to understand the scope, the site, and what you&apos;re hoping for.</p>
              </div>
              <div className="step">
                <div className="n">02</div>
                <h4>On-site walk</h4>
                <p>A visit to measure, look at the real conditions, and flag anything that affects the plan or the price.</p>
              </div>
              <div className="step">
                <div className="n">03</div>
                <h4>Clear estimate</h4>
                <p>A written estimate with the scope spelled out — no vague line items, no pressure, no charge.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
