import type { Metadata } from "next";
import { cloneElement } from "react";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import ProofRecord from "@/components/ProofRecord";
import WorkCard from "@/components/WorkCard";
import AboutPortrait from "@/components/AboutPortrait";
import { workCards } from "@/lib/projects";
import { getAllServices } from "@/lib/services";

export const metadata: Metadata = {
  openGraph: {
    description:
      "Baker Built Construction is Nate Baker — a Minneapolis general contractor handling remodels, roofing, windows, decks, and new builds. Planned with care, measured twice, and finished like it's his own home.",
  },
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
              <span className="mono">
                20+ Years of Twin Cities Craftsmanship
              </span>
            </div>
            <h1 className="h-display reveal d1">
              Take your dream,
              <br />
              and <em className="em">build it</em> to last.
            </h1>
            <p className="lede reveal d2">
              Baker Built Construction is Nate Baker — a Minneapolis general
              contractor handling remodels, roofing, windows, decks, and new
              builds. Planned with care, measured twice, and finished like
              it&apos;s his own home.
            </p>
            <div className="hero-actions reveal d3">
              <Link className="btn btn-accent" href="/estimate">
                Get a Free Estimate <span className="arw">→</span>
              </Link>
              <Link className="btn btn-ghost" href="/work">
                See the Work
              </Link>
            </div>
            <div className="hero-meta reveal d4">
              <div className="it">
                <div className="v">
                  20<span className="u">+</span>
                </div>
                <div className="k">Years Experience</div>
              </div>
              <div className="it">
                <div className="v">95</div>
                <div className="k">BuildZoom Score</div>
              </div>
              <div className="it">
                <div className="v">
                  No.<span className="u">1</span>
                </div>
                <div className="k">Job too big or small</div>
              </div>
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
                  width={1800}
                  height={1200}
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
              <div className="marker reveal">
                <b>01</b> / Services
              </div>
              <h2 className="h-section reveal">What we build &amp; restore.</h2>
              <p className="lede reveal d1">
                A full-service residential scope — from a single window to a
                whole new structure. Every job planned, permitted where
                required, and warrantied.
              </p>
            </div>
            <Link className="btn btn-ghost reveal d1" href="/services">
              All Services <span className="arw">→</span>
            </Link>
          </div>

          <div className="spec-grid reveal d1">
            {getAllServices().map(({ no, title, teaserDesc, tags, icon }) => (
              <div className="spec" key={no}>
                <span className="corner"></span>
                <div className="sno">{no}</div>
                <div className="sicon">
                  {cloneElement(
                    icon as React.ReactElement<{
                      width: number;
                      height: number;
                    }>,
                    { width: 42, height: 42 },
                  )}
                </div>
                <h3>{title}</h3>
                <p>{teaserDesc}</p>
                <div className="tags">
                  {tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
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
            <div className="marker reveal">
              <b>02</b> / About
            </div>
            <h2 className="h-section reveal">
              Nate Baker{" "}
              <span>is</span>{" "}
              Baker Built.
            </h2>
            <p className="reveal d1">
              For more than <span className="em">twenty years</span> Nate has
              worked Minneapolis homes with his own hands — long before the LLC
              went up in 2017. He still measures the openings, pulls the
              permits, and stands on the roof.
            </p>
            <p className="reveal d1">
              That means one point of contact, one person accountable, and no
              job passed down a chain. From a steep roof replacement to a
              basement remodel, the standard doesn&apos;t change:{" "}
              <span className="em">
                plan it carefully, build it right the first time.
              </span>
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
            <Link className="gateway reveal d2" href="/about">
              More About Baker Built <span className="arw">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WORK ===== */}
      <section className="section" id="work">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="marker reveal">
                <b>03</b> / Selected Work
              </div>
              <h2 className="h-section reveal">Projects from the field.</h2>
              <p className="lede reveal d1">
                A working record of recent projects across the Twin Cities —
                open a project to see the full story.
              </p>
            </div>
            <Link className="btn btn-ghost reveal d1" href="/work">
              All Projects <span className="arw">→</span>
            </Link>
          </div>
          <div className="work-grid reveal d1">
            {workCards.map((card) => (
              <WorkCard key={card.sheet} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROOF ===== */}
      <ProofRecord markerNumber="04" size="lg" />

      {/* ===== CTA BAND ===== */}
      <div id="estimate">
        <CtaBand
          markerNumber="05"
          heading="Tell us about your project. The estimate's free."
          body="A free, no-pressure estimate from the person who'll actually do the work — fill out the work-order request or call direct."
        />
      </div>
    </>
  );
}
