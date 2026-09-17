interface Props {
  markerNumber?: string;   // "04" on Home (rendered as <b>04</b> / The Record); omit on About
  size?: 'lg' | 'sm';      // 'lg' (104px 0) on Home, 'sm' (96px 0) on About
}

export default function ProofRecord({ markerNumber, size = 'lg' }: Props) {
  return (
    <section className="proof">
      <div className="proof-tex">
        <div className={`section ${size === 'sm' ? 'proof-sm' : 'proof-lg'}`}>
          <div className="wrap">
            <div className="marker reveal">{markerNumber ? <><b>{markerNumber}</b> / The Record</> : 'The Record'}</div>
            <h2 className="h-section reveal">Earned the right way — one solid job at a time.</h2>
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
                <div className="qm">Awaiting · Plate Reserved</div>
                <p>Your review goes here. We&apos;re collecting them as each Twin Cities project wraps.</p>
                <div className="by">— Reserved for a recent client</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
