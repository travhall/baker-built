import Link from 'next/link';

interface Props {
  heading: string;
  body: string;
}

export default function CtaBand({ heading, body }: Props) {
  return (
    <section className="cta-band">
      <div className="proof-tex">
        <div className="wrap">
          <div className="inner">
            <div>
              <div className="marker reveal"><b>05</b> / Request an Estimate</div>
              <h2 className="h-section reveal d1">{heading}</h2>
              <p className="lede reveal d1">{body}</p>
            </div>
            <div className="actions reveal d2">
              <Link className="btn btn-accent" href="/estimate">Get a Free Estimate <span className="arw">→</span></Link>
              <div className="callbox">
                <div className="k">Call / Text</div>
                <div className="v"><a href="tel:+16129643505">(612) 964‑3505</a></div>
                <div className="sub">Mon–Fri · 8AM–5PM · Se habla español</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
