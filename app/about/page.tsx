import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import AboutPortrait from "@/components/AboutPortrait";
import ProofRecord from "@/components/ProofRecord";

export const metadata: Metadata = {
  title: "About",
  openGraph: {
    title: "About — Baker Built Construction",
    description:
      "One contact. One person accountable. No job passed down a chain — from the first measurement to the final walk-through.",
  },
};

export default function About() {
  return (
    <>
      {/* ===== MASTHEAD ===== */}
      <section className="pj-masthead mast-center gridbg">
        <div className="wrap">
          <div className="pj-mast-top">
            <div>
              <div className="marker">
                <b>ABT</b> / About
              </div>
              <h1 className="pj-title">
                Nate Baker <em className="em">is</em>
                <br />
                Baker Built.
              </h1>
            </div>
            <p className="pj-summary">
              One contact. One person accountable.{" "}
              <span className="em">No job passed down a chain</span> — from the
              first measurement to the final walk-through.
            </p>
          </div>
        </div>
      </section>

      {/* ===== STORY ===== */}
      <section className="section about" style={{ borderTop: 0 }}>
        <div className="wrap">
          <AboutPortrait />
          <div className="copy">
            <div className="marker reveal">The Person Behind the Work</div>
            <h2 className="h-section reveal" style={{ marginBottom: "22px" }}>
              Twenty years on Minneapolis homes.
            </h2>
            <p className="reveal d1">
              For more than <span className="em">twenty years</span> Nate has
              worked Twin Cities homes with his own hands — long before the LLC
              went up in 2017. He still measures the openings, pulls the
              permits, and stands on the roof.
            </p>
            <p className="reveal d1">
              That means one point of contact, one person accountable, and no
              job handed off down a chain. From a steep roof replacement to a
              basement remodel, the standard doesn&apos;t change:{" "}
              <span className="em">
                plan it carefully, build it right the first time.
              </span>
            </p>
            <p className="reveal d1">
              No job is too large or too small. The same care goes into a single
              replacement window as into a ground-up build — because in this
              neighborhood, the next job usually comes from the last one being
              done right.
            </p>
            <div className="creds reveal d2">
              <span className="cred">
                <span className="bd"></span>BuildZoom Score 95
              </span>
              <span className="cred blue">
                <span className="bd"></span>Licensed LLC
              </span>
              <span className="cred">
                <span className="bd"></span>Free Estimates
              </span>
              <span className="cred blue">
                <span className="bd"></span>Work Warrantied
              </span>
              <span className="cred">
                <span className="bd"></span>Se habla español
              </span>
            </div>
            <div className="sig reveal d2">
              &ldquo;No job too large or too small.&rdquo;
              <span className="sub">— Nate Baker, Minneapolis MN</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="marker reveal">How We Work / The Standard</div>
          <h2
            className="h-section reveal"
            style={{ marginBottom: "30px", maxWidth: "20ch" }}
          >
            Three things that don&apos;t change, job to job.
          </h2>
          <div className="standards reveal d1">
            <div className="std">
              <div className="n">01</div>
              <h3>Plan it first</h3>
              <p>
                Every stage is thought through and walked with you before the
                work starts — so there are no surprises and no change orders
                that weren&apos;t talked about first.
              </p>
            </div>
            <div className="std">
              <div className="n">02</div>
              <h3>Build it to last</h3>
              <p>
                What&apos;s behind the wall matters as much as the finish. We
                fix what we find, build to spec, and use materials chosen to
                hold up to Minnesota seasons.
              </p>
            </div>
            <div className="std">
              <div className="n">03</div>
              <h3>Stand behind it</h3>
              <p>
                One person is accountable from first measure to final
                walk-through, against a written punch list — and the work is
                warrantied when it&apos;s done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE RECORD ===== */}
      <ProofRecord padding="96px 0" />

      {/* ===== CTA BAND ===== */}
      <CtaBand
        heading="Work with the person doing the work."
        body="Tell us about your project — the estimate's free, and you'll always know exactly who's accountable for it."
      />
    </>
  );
}
