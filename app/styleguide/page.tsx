import CtaBand from "@/components/CtaBand";
import ProofRecord from "@/components/ProofRecord";
import AboutPortrait from "@/components/AboutPortrait";
import WorkCard from "@/components/WorkCard";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects, workCards } from "@/lib/projects";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Style Guide",
  robots: { index: false, follow: false },
};

/* ---- small helpers used only on this page ---- */
const p = projects[0];

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="mono" style={{ marginBottom: "12px" }}>
      {children}
    </div>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "var(--ink-3)",
        borderBottom: "1px solid var(--hair)",
        paddingBottom: "10px",
        marginBottom: "32px",
        marginTop: "80px",
      }}
    >
      {label}
    </div>
  );
}

function Swatch({
  name,
  token,
  hex,
  dark,
}: {
  name: string;
  token: string;
  hex: string;
  dark?: boolean;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div
        style={{
          width: "100%",
          aspectRatio: "1",
          background: `var(${token})`,
          border: "1px solid var(--hair)",
        }}
      />
      <div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            fontWeight: 600,
            color: "var(--ink)",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--ink-3)",
            marginTop: "3px",
          }}
        >
          {token}
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--ink-3)",
          }}
        >
          {hex}
        </div>
      </div>
    </div>
  );
}

export default function StyleGuide() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      {/* ===== PAGE HEADER ===== */}
      <section className="pj-masthead mast-center gridbg">
        <div className="wrap">
          <div className="pj-mast-top">
            <div>
              <div className="marker">
                <b>SG</b> / Style Guide
              </div>
              <h1 className="pj-title">
                Design <em className="em">System</em> Reference.
              </h1>
            </div>
            <p className="pj-summary">
              Tokens, type scale, primitives, shared components and page sections used
              across the Baker Built site. <span className="em">Blueprint × Craftsmanship</span>{" "}
              direction — warm paper palette, Zilla Slab display, IBM Plex Sans
              body.
            </p>
          </div>
          <div className="titlestrip">
            <div className="cell">
              <div className="k">Sheet</div>
              <div className="v accent">SG‑01</div>
            </div>
            <div className="cell">
              <div className="k">Fonts</div>
              <div className="v">3 Families</div>
            </div>
            <div className="cell">
              <div className="k">Colors</div>
              <div className="v">12 Tokens</div>
            </div>
            <div className="cell">
              <div className="k">Sections</div>
              <div className="v">30 Patterns</div>
            </div>
            <div className="cell">
              <div className="k">CSS</div>
              <div className="v">globals.css</div>
            </div>
            <div className="cell">
              <div className="k">Status</div>
              <div className="v ok">Live</div>
            </div>
          </div>
        </div>
      </section>

      <>
      <div className="wrap">
        <h2 className="h-section" style={{ marginTop: "128px" }}>Foundations</h2>
        <p className="lede">Color, type, spacing and motion — the tokens everything else is built from.</p>
      </div>
      <div className="wrap">
        <SectionLabel label="01 / Color Tokens" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "24px",
            marginBottom: "32px",
          }}
        >
          <Swatch name="Paper" token="--paper" hex="#F4EFE3" />
          <Swatch name="Paper 2" token="--paper-2" hex="#ECE4D4" />
          <Swatch name="Paper Card" token="--paper-card" hex="#F8F4EA" />
          <Swatch name="Ink" token="--ink" hex="#2B2823" dark />
          <Swatch name="Ink 2" token="--ink-2" hex="#565047" dark />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "24px",
          }}
        >
          <Swatch name="Ink 3" token="--ink-3" hex="#8A8275" />
          <Swatch name="Red (Accent)" token="--red" hex="#EC3B30" dark />
          <Swatch name="Red Deep" token="--red-deep" hex="#C62A21" dark />
          <Swatch name="Blue" token="--blue" hex="#3C5A73" dark />
          <Swatch name="Blue Soft" token="--blue-soft" hex="#6E8499" dark />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "24px",
            marginTop: "24px",
          }}
        >
          <Swatch name="Accent on Dark" token="--accent-on-dark" hex="#F16C64" dark />
          <Swatch name="Brick" token="--brick" hex="#A8593F" dark />
          <Swatch name="Accent Deep" token="--accent-deep" hex="= Red Deep" dark />
          <Swatch name="Accent Darker" token="--accent-darker" hex="Deep + 10% black" dark />
          <Swatch name="Focus" token="--focus" hex="= Accent" dark />
        </div>
        <div className="mono" style={{ marginTop: "24px", lineHeight: 1.8, maxWidth: "860px" }}>
          Text contrast on paper: --ink, --ink-2 and --red-deep pass 4.5:1.
          --ink-3 and --red are non-text only (borders, strokes, ticks). On
          --ink backgrounds use --paper for text and --accent-on-dark for
          accent text; --red-deep fails there. --focus flips to
          --accent-on-dark inside dark sections.
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "16px",
            marginTop: "24px",
          }}
        >
          <div
            style={{
              padding: "16px 20px",
              border: "1px solid var(--hair)",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--ink-2)",
              background: "var(--paper-card)",
            }}
          >
            <b
              style={{
                color: "var(--ink)",
                display: "block",
                marginBottom: "6px",
              }}
            >
              --hair
            </b>
            rgba(43, 40, 35, 0.16) — divider lines on light backgrounds
          </div>
          <div
            style={{
              padding: "16px 20px",
              background: "var(--ink)",
              border: "1px solid rgba(244,239,227,0.16)",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "rgba(244,239,227,0.6)",
            }}
          >
            <b
              style={{
                color: "var(--paper)",
                display: "block",
                marginBottom: "6px",
              }}
            >
              --grid-line / --grid-major
            </b>
            Blueprint grid lines — applied via .gridbg pseudo-element
          </div>
        </div>

      </div>
      <div className="wrap">
        <SectionLabel label="02 / Typography" />

        <div style={{ marginBottom: "40px" }}>
          <div className="mono" style={{ marginBottom: "12px" }}>
            Display — Zilla Slab 600, .h-display
          </div>
          <h1 className="h-display">
            Take your dream,
            <br />
            and{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
              build it
            </em>{" "}
            to last.
          </h1>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <div className="mono" style={{ marginBottom: "12px" }}>
            Section — Zilla Slab 600, .h-section
          </div>
          <h2 className="h-section">What we build &amp; restore.</h2>
        </div>

        <div
          style={{
            marginBottom: "40px",
            borderTop: "1px solid var(--hair)",
            paddingTop: "32px",
          }}
        >
          <div className="mono" style={{ marginBottom: "12px" }}>
            Project Title — .pj-title
          </div>
          <h1 className="pj-title">
            Full Kitchen &amp;
            <br />
            <em className="em">Main-Floor</em> Remodel
          </h1>
        </div>

        <div
          style={{
            marginBottom: "40px",
            borderTop: "1px solid var(--hair)",
            paddingTop: "32px",
          }}
        >
          <div className="mono" style={{ marginBottom: "12px" }}>
            Lede — IBM Plex Sans, .lede
          </div>
          <p className="lede">
            A full-service residential scope — from a single window to a whole
            new structure. Every job planned, permitted where required, and
            warrantied.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "32px",
            borderTop: "1px solid var(--hair)",
            paddingTop: "32px",
          }}
        >
          <div>
            <div className="mono" style={{ marginBottom: "12px" }}>
              Body — IBM Plex Sans 17px
            </div>
            <p
              style={{
                margin: 0,
                fontSize: "17px",
                lineHeight: 1.6,
                color: "var(--ink-2)",
              }}
            >
              Nate has worked Minneapolis homes with his own hands — long before
              the LLC went up in 2017. He still measures the openings, pulls the
              permits, and stands on the roof.
            </p>
          </div>
          <div>
            <div className="mono" style={{ marginBottom: "12px" }}>
              Mono — IBM Plex Mono, .mono
            </div>
            <span
              className="mono"
              style={{ display: "block", marginBottom: "10px" }}
            >
              Label / Annotation
            </span>
            <span
              className="mono mono-red"
              style={{ display: "block", marginBottom: "10px" }}
            >
              Accent Label
            </span>
            <span className="mono mono-blue" style={{ display: "block" }}>
              Blueprint Label
            </span>
          </div>
          <div>
            <div className="mono" style={{ marginBottom: "12px" }}>
              Signature — Zilla Slab italic, .sig
            </div>
            <div className="sig" style={{ marginTop: 0 }}>
              &ldquo;No job too large or too small.&rdquo;
              <span className="sub">— Nate Baker, Minneapolis MN</span>
            </div>
          </div>
        </div>

      </div>
      <div className="wrap">
        <SectionLabel label="03 / Spacing &amp; Motion" />
        <Note>
          Spacing scale — --space-N tokens on a 4px grid. Off-grid values in
          the CSS are intentional one-off tuning and are not part of the scale.
        </Note>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "48px" }}>
          {[4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 76, 80, 84, 88, 92, 96, 100, 104].map((n) => (
            <div key={n} style={{ display: "grid", gridTemplateColumns: "140px 1fr", alignItems: "center", gap: "16px" }}>
              <span className="mono">--space-{n}</span>
              <div style={{ height: "10px", width: `${n}px`, background: "var(--blue)" }} />
            </div>
          ))}
        </div>
        <Note>Motion tokens — one duration per intent, so hover states feel related</Note>
        <div style={{ border: "1px solid var(--hair)", background: "var(--paper-card)" }}>
          {[
            ["--transition-fast", "0.2s ease", "Color, transform and shadow on hover — buttons, links, fields"],
            ["--transition-base", "0.25s ease", "Card lifts, nav underline, plate border"],
            ["--transition-slow", "0.7s cubic-bezier(0.22, 0.61, 0.36, 1)", "Scroll reveal only"],
            ["Drawer slide", "0.3s cubic-bezier(0.4, 0, 0.2, 1)", "Nav drawer panel — deliberately outside the token set"],
          ].map(([token, value, use]) => (
            <div key={token} style={{ display: "grid", gridTemplateColumns: "180px 300px 1fr", gap: "16px", padding: "12px 20px", borderBottom: "1px solid var(--hair)" }}>
              <span className="mono" style={{ color: "var(--ink)" }}>{token}</span>
              <span className="mono">{value}</span>
              <span style={{ color: "var(--ink-2)", fontSize: "15px" }}>{use}</span>
            </div>
          ))}
        </div>
        <div className="mono" style={{ marginTop: "12px" }}>
          prefers-reduced-motion removes the reveal, drawer slide and hover lifts.
        </div>

      </div>
      <div className="wrap">
        <h2 className="h-section" style={{ marginTop: "128px" }}>Primitives</h2>
        <p className="lede">Small parts reused inside larger sections.</p>
      </div>
      <div className="wrap">
        <SectionLabel label="04 / Markers &amp; Labels" />
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <div className="marker">
              <b>01</b> / Services
            </div>
          </div>
          <div>
            <div className="marker">The Person Behind the Work</div>
          </div>
          <div
            style={{
              background: "var(--ink)",
              padding: "24px",
              display: "inline-block",
            }}
          >
            <div className="marker" style={{ color: "rgba(244,239,227,0.6)" }}>
              <b>04</b> / The Record
            </div>
          </div>
        </div>

      </div>
      <div className="wrap">
        <SectionLabel label="05 / Buttons" />
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          <a className="btn" href="#">
            Default Button <span className="arw">→</span>
          </a>
          <a className="btn btn-ghost" href="#">
            Ghost Button <span className="arw">→</span>
          </a>
          <a className="btn btn-accent" href="#">
            Accent Button <span className="arw">→</span>
          </a>
          <a className="gateway" href="#">
            Gateway Link <span className="arw">→</span>
          </a>
        </div>
        <div
          className="swatch-dark"
          style={{
            marginTop: "16px",
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            background: "var(--ink)",
            padding: "24px",
          }}
        >
          <a className="btn btn-accent" href="#">
            Get a Free Estimate <span className="arw">→</span>
          </a>
          <a
            className="btn btn-ghost"
            style={{
              color: "var(--paper)",
              borderColor: "rgba(244,239,227,0.65)",
              background: "transparent",
            }}
            href="#"
          >
            See the Work
          </a>
        </div>

      </div>
      <div className="wrap">
        <SectionLabel label="06 / Credential Badges" />
        <div className="mono" style={{ marginBottom: "12px" }}>
          Trust signals — .cred — red diamond (default) or blue diamond
          (.cred.blue)
        </div>
        <div className="creds">
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

      </div>
      <div className="wrap">
        <SectionLabel label="07 / Tags" />
        <Note>
          Scope / trade labels — .tags &gt; span. One shared rule; the trade
          row adds top margin and phase tags sit on a card background.
        </Note>
        <div className="tags">
          {["Kitchen", "Bath", "Basement", "Tear-off", "Architectural Shingle", "Full-frame", "Egress", "Footings", "Custom Build", "Stucco", "Flush Beam", "Ice-and-Water"].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
      <div className="wrap">
        <SectionLabel label="08 / Plate &amp; Ticks" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
          }}
        >
          <div>
            <div className="mono" style={{ marginBottom: "12px" }}>
              Standard plate with crosshair ticks + titleblock
            </div>
            <div className="plate ticks" style={{ maxWidth: "420px" }}>
              <span className="tick tl"></span>
              <span className="tick tr"></span>
              <span className="tick bl"></span>
              <span className="tick br"></span>
              <div className="plate-inner">
                <div className="img-ph" style={{ aspectRatio: "4/3" }}>
                  <span>Photo placeholder · 4:3</span>
                </div>
              </div>
              <div className="titleblock">
                <div>
                  <div className="tk">Subject</div>
                  <div className="tv">Nate Baker</div>
                </div>
                <div>
                  <div className="tk">Role</div>
                  <div className="tv">Owner · Operator</div>
                </div>
                <div>
                  <div className="tk">Sheet</div>
                  <div className="tv">FIG‑00</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mono" style={{ marginBottom: "12px" }}>
              Image placeholder (.img-ph) — various aspect ratios
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <div className="img-ph" style={{ aspectRatio: "16/9" }}>
                <span>Hero shot · 16:9 (.pj-fig-slot)</span>
              </div>
              <div className="img-ph" style={{ aspectRatio: "4/3" }}>
                <span>Work card · 4:3 (.work-slot)</span>
              </div>
              <div className="img-ph" style={{ aspectRatio: "3/2" }}>
                <span>Gallery · 3:2 (.gal-cell)</span>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="wrap">
        <SectionLabel label="09 / Title Strip" />
        <div className="mono" style={{ marginBottom: "12px" }}>
          Architectural data row — .titlestrip (6 cells, collapses to 3 then 2
          on smaller screens)
        </div>
        <div className="titlestrip">
          <div className="cell">
            <div className="k">Project No.</div>
            <div className="v accent">PRJ‑01</div>
          </div>
          <div className="cell">
            <div className="k">Scope</div>
            <div className="v">Whole-Home Interior</div>
          </div>
          <div className="cell">
            <div className="k">Location</div>
            <div className="v">North Minneapolis</div>
          </div>
          <div className="cell">
            <div className="k">Duration</div>
            <div className="v">≈ 9 Weeks</div>
          </div>
          <div className="cell">
            <div className="k">Crew</div>
            <div className="v">Nate + Trades</div>
          </div>
          <div className="cell">
            <div className="k">Status</div>
            <div className="v ok">Complete</div>
          </div>
        </div>

      </div>
      <div className="wrap">
        <SectionLabel label="10 / Forms &amp; Status" />
        <Note>
          Work order form — .form-side, .field, inputs, select, textarea. Focus
          uses the --focus outline; every field has a label wired with htmlFor.
        </Note>
        <div style={{ maxWidth: "560px", border: "1px solid var(--hair)", background: "var(--paper-card)" }}>
          <div className="form-side">
            <div className="form-head">
              <div className="ttl">Work Order Request</div>
              <div className="wo"><div className="k">Form</div><div className="v">EST‑01</div></div>
            </div>
            <div className="field row2">
              <div>
                <label htmlFor="sg-name">Name</label>
                <input id="sg-name" type="text" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="sg-phone">Phone</label>
                <input id="sg-phone" type="tel" placeholder="(612) 000‑0000" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="sg-type">Project Type</label>
              <select id="sg-type" defaultValue="">
                <option value="" disabled>Select a scope…</option>
                <option>Home Remodeling</option>
                <option>Roofing</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="sg-desc">Brief Description</label>
              <textarea id="sg-desc" placeholder="What are you looking to build, repair, or replace? Rough timeline if you have one."></textarea>
            </div>
            <button className="btn btn-accent btn-block" type="button">
              Submit Request <span className="arw">→</span>
            </button>
            <div className="form-note">Or call direct: (612) 964‑3505 · Mon–Fri 8AM–5PM</div>
          </div>
        </div>
        <div className="mono" style={{ margin: "24px 0 12px" }}>
          Status banners — .status-banner--success / --error, announced with role=&quot;status&quot;
        </div>
        <div style={{ maxWidth: "560px", display: "flex", flexDirection: "column", gap: "12px" }}>
          <div className="status-banner status-banner--success" role="status">
            ✓ REQUEST LOGGED — Nate will reach out within one business day.
          </div>
          <div className="status-banner status-banner--error" role="status">
            ✕ Something went wrong. Please call (612) 964‑3505 directly.
          </div>
        </div>

      </div>
      <div className="wrap">
        <SectionLabel label="11 / Focus Marks" />
        <div className="mono" style={{ marginBottom: "12px" }}>
          Keyboard focus — drafting crop marks on buttons, cards, brand and
          drawer controls; 2px --focus outline on text links and fields. Tab
          through this section to see it. --focus flips to --accent-on-dark
          inside dark sections.
        </div>
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <a className="btn" href="#">
            Button <span className="arw">→</span>
          </a>
          <a href="#">Text link</a>
          <div className="field" style={{ minWidth: "220px" }}>
            <input type="text" aria-label="Sample field" placeholder="Field" />
          </div>
        </div>
        <div
          className="swatch-dark"
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            alignItems: "center",
            background: "var(--ink)",
            padding: "24px",
          }}
        >
          <a className="btn btn-accent" href="#">
            Button on dark <span className="arw">→</span>
          </a>
          <a href="#">
            Text link on dark
          </a>
        </div>

      </div>
      <div className="wrap">
        <SectionLabel label="12 / Blueprint Grid Background" />
        <div className="mono" style={{ marginBottom: "12px" }}>
          Applied via .gridbg — 30px cell minor grid, 150px major grid,
          blueprint blue lines, faded at edges
        </div>
        <div
          className="gridbg"
          style={{
            border: "1px solid var(--hair)",
            minHeight: "140px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            <div
              className="marker"
              style={{ justifyContent: "center", marginBottom: "8px" }}
            >
              Grid Background
            </div>
            <p style={{ margin: 0, color: "var(--ink-2)", fontSize: "15px" }}>
              Content sits on top via{" "}
              <code
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  background: "var(--paper-2)",
                  padding: "2px 6px",
                }}
              >
                z-index: 1
              </code>
            </p>
          </div>
        </div>

      </div>
      <div className="wrap">
        <SectionLabel label="13 / Reveal Animation" />
        <div
          style={{
            border: "1px solid var(--hair)",
            background: "var(--paper-card)",
            padding: "32px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
            }}
          >
            <div>
              <div className="mono" style={{ marginBottom: "16px" }}>
                How it works
              </div>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "var(--ink-2)",
                  margin: "0 0 16px",
                }}
              >
                Elements with{" "}
                <code
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    background: "var(--paper-2)",
                    padding: "2px 6px",
                  }}
                >
                  .reveal
                </code>{" "}
                start at{" "}
                <code
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    background: "var(--paper-2)",
                    padding: "2px 6px",
                  }}
                >
                  opacity: 0; translateY(22px)
                </code>
                . An IntersectionObserver in{" "}
                <code
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    background: "var(--paper-2)",
                    padding: "2px 6px",
                  }}
                >
                  RevealObserver.tsx
                </code>{" "}
                adds{" "}
                <code
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    background: "var(--paper-2)",
                    padding: "2px 6px",
                  }}
                >
                  .in
                </code>{" "}
                when 12% of the element enters the viewport.
              </p>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "var(--ink-2)",
                  margin: 0,
                }}
              >
                Stagger delays:{" "}
                <code
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    background: "var(--paper-2)",
                    padding: "2px 6px",
                  }}
                >
                  .d1
                </code>{" "}
                70ms,{" "}
                <code
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    background: "var(--paper-2)",
                    padding: "2px 6px",
                  }}
                >
                  .d2
                </code>{" "}
                140ms,{" "}
                <code
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    background: "var(--paper-2)",
                    padding: "2px 6px",
                  }}
                >
                  .d3
                </code>{" "}
                210ms,{" "}
                <code
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    background: "var(--paper-2)",
                    padding: "2px 6px",
                  }}
                >
                  .d4
                </code>{" "}
                280ms. Disabled by{" "}
                <code
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    background: "var(--paper-2)",
                    padding: "2px 6px",
                  }}
                >
                  prefers-reduced-motion
                </code>
                .
              </p>
            </div>
            <div>
              <div className="mono" style={{ marginBottom: "16px" }}>
                Usage example
              </div>
              <pre
                style={{
                  margin: 0,
                  fontFamily: "var(--font-mono)",
                  fontSize: "11.5px",
                  lineHeight: 1.7,
                  color: "var(--ink-2)",
                  background: "var(--paper-2)",
                  padding: "16px 20px",
                  overflowX: "auto",
                }}
              >{`<div className="marker reveal">
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

      </div>
      <div className="wrap">
        <h2 className="h-section" style={{ marginTop: "128px" }}>Site Chrome</h2>
        <p className="lede">The shell every page shares.</p>
      </div>
      <div className="wrap">
        <SectionLabel label="14 / Site Chrome" />
        <Note>
          Shared shell rendered by layout.tsx on every page — the live copies
          are the header and footer of this page.
        </Note>
        <div style={{ border: "1px solid var(--hair)", background: "var(--paper-card)" }}>
          {[
            ["Skip link", ".skip-link", "First tab stop on every page; jumps to #main. Shown below in its focused state."],
            ["Topbar", ".topbar", "Mono strip above the nav — trade, city, established year, language."],
            ["Nav", ".nav.nav-centered", "Sticky, 78px. Brand left, links center, phone + hamburger right. Links collapse below 760px."],
            ["Drawer", ".nav-drawer", "Mobile menu. Dialog with close button, focus trap and Escape. Hidden from tab order and screen readers while closed."],
            ["Footer", ".footer", "Dark ink. Logo + tagline, services and contact columns, legal row."],
          ].map(([name, cls, desc]) => (
            <div key={name} style={{ display: "grid", gridTemplateColumns: "140px 220px 1fr", gap: "16px", padding: "14px 20px", borderBottom: "1px solid var(--hair)" }}>
              <span className="mono" style={{ color: "var(--ink)" }}>{name}</span>
              <span className="mono">{cls}</span>
              <span style={{ color: "var(--ink-2)", fontSize: "15px" }}>{desc}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "24px", minHeight: "56px" }}>
          <a className="skip-link" href="#main" style={{ position: "static", transform: "none", display: "inline-block" }}>
            Skip to main content
          </a>
        </div>

      </div>
      <div className="wrap">
        <h2 className="h-section" style={{ marginTop: "128px" }}>Page Sections</h2>
        <p className="lede">Full-width sections. Where a shared component exists it is rendered here directly, so this page cannot drift from the site.</p>
      </div>
      <div className="wrap">
        <SectionLabel label="15 / Hero" />
        <Note>.hero.hero-feature — home page only. Display heading, lede, two buttons, meta row and a photo plate over the blueprint grid.</Note>
      </div>
      <section className="hero hero-feature gridbg">
        <div className="wrap">
          <div className="hero-copy">
            <div className="hero-eyebrow">
              <span className="dot"></span>
              <span className="mono">20+ Years of Twin Cities Craftsmanship</span>
            </div>
            <h1 className="h-display">
              Take your dream,
              <br />
              and <em className="em">build it</em> to last.
            </h1>
            <p className="lede">
              Baker Built Construction is Nate Baker — a Minneapolis general
              contractor handling remodels, roofing, windows, decks, and new
              builds. Planned with care, measured twice, and finished like
              it&apos;s his own home.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-accent" href="/estimate">
                Get a Free Estimate <span className="arw">→</span>
              </Link>
              <Link className="btn btn-ghost" href="/work">See the Work</Link>
            </div>
            <div className="hero-meta">
              <div className="it"><div className="v">20<span className="u">+</span></div><div className="k">Years Experience</div></div>
              <div className="it"><div className="v">95</div><div className="k">BuildZoom Score</div></div>
              <div className="it"><div className="v">No <span className="u">1</span></div><div className="k">Job too big or small</div></div>
            </div>
          </div>
          <div className="hero-plate">
            <div className="plate">
              <div className="plate-inner">
                <Image className="hero-slot" src="/hero-cabin.jpg" alt="Custom home built by Baker Built Construction" width={1200} height={800} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <SectionLabel label="16 / Section Header" />
        <Note>
          .section-head — marker, h2.h-section and lede on the left, optional
          ghost button on the right. Opens every home-page section.
        </Note>
        <div className="section-head" style={{ border: "1px dashed var(--hair)", padding: "32px" }}>
          <div>
            <div className="marker"><b>03</b> / Selected Work</div>
            <h2 className="h-section">Projects from the field.</h2>
            <p className="lede">
              A working record of recent projects across the Twin Cities — open
              a project to see the full story.
            </p>
          </div>
          <Link className="btn btn-ghost" href="/work">
            All Projects <span className="arw">→</span>
          </Link>
        </div>

      </div>
      <div className="wrap">
        <SectionLabel label="17 / Spec Grid (Services)" />
        <Note>
          .spec-grid / .spec — driven by lib/services.tsx. Hover shows the
          blueprint corner tick. The Services page index uses the same card
          without the description.
        </Note>
        <div className="spec-grid">
          {services.slice(0, 3).map(({ no, title, teaserDesc, tags, icon }) => (
            <div className="spec" key={no}>
              <span className="corner"></span>
              <div className="sno">{no}</div>
              <div className="sicon">{icon}</div>
              <h3>{title}</h3>
              <p>{teaserDesc}</p>
              <div className="tags">{tags.map((t) => (<span key={t}>{t}</span>))}</div>
            </div>
          ))}
        </div>

      </div>
      <div className="wrap">
        <SectionLabel label="18 / Trade Row" />
        <Note>.trade — Services page. Plate with caption, description, included list and tags. Driven by lib/services.tsx.</Note>
      </div>
      <section className="section svc-trades">
        <div className="wrap">
          <div className="trade-list">
            <div className="trade" id="sg-trade">
              <div className="trade-fig plate ticks">
                <span className="tick tl"></span><span className="tick tr"></span>
                <span className="tick bl"></span><span className="tick br"></span>
                <div className="plate-inner">
                  <div className="img-ph" role="img" aria-label={services[1].imgLabel}><span>{services[1].imgLabel}</span></div>
                </div>
                <div className="cap"><span className="t">{services[1].title}</span><span className="n">{services[1].no}</span></div>
              </div>
              <div className="trade-body">
                <div className="sno">{services[1].label}</div>
                <h3>{services[1].title}</h3>
                <p className="desc">{services[1].fullDesc}</p>
                <ul className="incl">
                  {services[1].incl.map((i) => (<li key={i}><span className="bx"></span>{i}</li>))}
                </ul>
                <div className="tags">{services[1].tags.map((t) => (<span key={t}>{t}</span>))}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <SectionLabel label="19 / Work Cards" />
        <Note>
          WorkCard — lib/projects.tsx workCards. The whole card is one link;
          hover and keyboard focus share the same state (lifted plate, ink
          bar, accent sheet number). Cards without a sheet show
          &ldquo;Sheet in progress&rdquo;. The featured flag picks the three
          shown on the home page; /work shows all.
        </Note>
        <div className="work-grid">
          {[...workCards.filter((c) => c.slug).slice(0, 2), ...workCards.filter((c) => !c.slug).slice(0, 1)].map((card) => (
            <WorkCard key={card.sheet} {...card} />
          ))}
        </div>

      </div>
      <div className="wrap">
        <SectionLabel label="20 / Proof Record" />
        <Note>ProofRecord — dark ink section with stat row and quote cards. size=&quot;lg&quot; on Home, size=&quot;sm&quot; on About; markerNumber only where the numbered sequence applies.</Note>
      </div>
      <ProofRecord markerNumber="04" size="lg" />

      <div className="wrap">
        <SectionLabel label="21 / About" />
        <Note>AboutPortrait + .about-story copy column, then .standards — three numbered principles.</Note>
      </div>
      <section className="section about about-story">
        <div className="wrap">
          <AboutPortrait />
          <div className="copy">
            <div className="marker">The Person Behind the Work</div>
            <h2 className="h-section">Twenty years on Minneapolis homes.</h2>
            <p>
              For more than <span className="em">twenty years</span> Nate has
              worked Twin Cities homes with his own hands — long before the LLC
              went up in 2017. He still measures the openings, pulls the
              permits, and stands on the roof.
            </p>
            <div className="creds">
              <span className="cred"><span className="bd"></span>BuildZoom Score 95</span>
              <span className="cred blue"><span className="bd"></span>Licensed LLC</span>
              <span className="cred"><span className="bd"></span>Free Estimates</span>
            </div>
            <div className="sig">
              &ldquo;No job too large or too small.&rdquo;
              <span className="sub">— Nate Baker, Minneapolis MN</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section how-we-work">
        <div className="wrap">
          <div className="marker">How We Work / The Standard</div>
          <h2 className="h-section">Three things that don&apos;t change, job to job.</h2>
          <div className="standards">
            <div className="std">
              <div className="n">01</div>
              <h3>Plan it first</h3>
              <p>Every stage is thought through and walked with you before the work starts — so there are no surprises and no change orders that weren&apos;t talked about first.</p>
            </div>
            <div className="std">
              <div className="n">02</div>
              <h3>Build it to last</h3>
              <p>What&apos;s behind the wall matters as much as the finish. We fix what we find, build to spec, and use materials chosen to hold up to Minnesota seasons.</p>
            </div>
            <div className="std">
              <div className="n">03</div>
              <h3>Stand behind it</h3>
              <p>One person is accountable from first measure to final walk-through, against a written punch list — and the work is warrantied when it&apos;s done.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <SectionLabel label="22 / CTA Band" />
        <Note>CtaBand — closes every page. Top: with markerNumber (Home). Bottom: interior-page form with no number.</Note>
      </div>
      <CtaBand
        markerNumber="05"
        heading="Tell us about your project. The estimate's free."
        body="A free, no-pressure estimate from the person who'll actually do the work — fill out the work-order request or call direct."
      />
      <div style={{ height: "24px" }} />
      <CtaBand
        heading="Not sure which scope you need? Just ask."
        body="Tell Nate what you're trying to do and he'll tell you straight what it takes — the estimate's free, and you talk to the person doing the work."
      />

      <div className="wrap">
        <SectionLabel label="23 / Estimate Layout" />
        <Note>.estimate-card — form column beside .info-side blocks, then the three-step .next-steps. The live form is EstimateForm.</Note>
      </div>
      <section className="section contact">
        <div className="wrap">
          <div className="estimate-card">
            <div className="form-side">
              <div className="form-head">
                <div className="ttl">Work Order Request</div>
                <div className="wo"><div className="k">Form</div><div className="v">EST‑01</div></div>
              </div>
              <div className="field">
                <label htmlFor="sg-est-name">Name</label>
                <input id="sg-est-name" type="text" placeholder="Your name" />
              </div>
              <button className="btn btn-accent btn-block" type="button">
                Submit Request <span className="arw">→</span>
              </button>
            </div>
            <div className="info-side">
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
                <div className="k">Languages</div>
                <div className="v">English · Español</div>
                <div className="sub">Se habla español</div>
              </div>
            </div>
          </div>
          <div className="next-steps-block">
            <div className="marker">What Happens Next / The Process</div>
            <div className="next-steps">
              <div className="step"><div className="n">01</div><h4>We talk it through</h4><p>Nate calls back within a business day to understand the scope, the site, and what you&apos;re hoping for.</p></div>
              <div className="step"><div className="n">02</div><h4>On-site walk</h4><p>A visit to measure, look at the real conditions, and flag anything that affects the plan or the price.</p></div>
              <div className="step"><div className="n">03</div><h4>Clear estimate</h4><p>A written estimate with the scope spelled out — no vague line items, no pressure, no charge.</p></div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <h2 className="h-section" style={{ marginTop: "128px" }}>Project Sheet</h2>
        <p className="lede">Building blocks of the /work/[slug] detail page. Content comes from lib/projects.tsx.</p>
      </div>
      <div className="wrap">
        <SectionLabel label="24 / Breadcrumb / Sheet Bar" />
        <div className="mono" style={{ marginBottom: "12px" }}>
          Used on project detail pages — .crumb — sheet number anchored right
        </div>
        <div className="crumb" style={{ position: "static" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "50px",
              gap: "18px",
            }}
          >
            <div className="path">
              <Link href="/work">
                <span className="arw">←</span> Selected Work
              </Link>
              <span className="sep">/</span>
              <span className="here">
                Full Kitchen &amp; Main-Floor Remodel
              </span>
            </div>
            <div className="sheetno">Sheet PRJ‑01</div>
          </div>
        </div>

      </div>
      <div className="wrap">
        <SectionLabel label="25 / Figure" />
        <Note>.pj-figure — 16:9 hero plate with figure caption.</Note>
      </div>
      <section className="pj-figure">
        <div className="wrap">
          <div className="plate ticks">
            <span className="tick tl"></span><span className="tick tr"></span>
            <span className="tick bl"></span><span className="tick br"></span>
            <div className="plate-inner">
              <div className="img-ph pj-fig-slot" role="img" aria-label="Hero shot placeholder, 16:9">
                <span>Drop the hero shot — 16:9</span>
              </div>
            </div>
            <div className="pj-fig-cap">
              <div className="lbl"><b>Fig. 01</b> &nbsp;— &nbsp;{p.figCaption}</div>
              <div className="fig">Photo · N. Baker</div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <SectionLabel label="26 / Brief &amp; Scope" />
        <Note>.pj-brief — label aside, brief copy, and the checked .scope-list.</Note>
      </div>
      <section className="section pj-brief">
        <div className="wrap">
          <aside className="pj-aside"><div className="lbl">The Brief</div></aside>
          <div className="body">
            <p>{p.brief[0]}</p>
            <div className="scope-list">
              <div className="scope-head">Scope of Work — what was included</div>
              <ul>
                {p.scopeItems.slice(0, 4).map((item) => (
                  <li key={item} className="done"><span className="bx"></span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <SectionLabel label="27 / Build Sequence" />
        <Note>.phase-list — numbered phases with duration, tags and a photo slot. Two of six shown.</Note>
      </div>
      <section className="section pj-build gridbg">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="marker">Build Sequence / How it came together</div>
              <h2 className="h-section">{p.buildHeadline}</h2>
            </div>
          </div>
          <div className="phase-list">
            {p.phases.slice(0, 2).map((phase) => (
              <div className="phase" key={phase.number}>
                <div className="ph-no"><span className="n">{phase.number}</span><span className="marktick"></span></div>
                <div className="ph-body">
                  <h3>{phase.title}</h3>
                  <div className="ph-dur">
                    {phase.duration.split(" · ").map((part, i) => i === 0 ? <span key={i}>{part} · </span> : <b key={i}>{part}</b>)}
                  </div>
                  <p>{phase.body}</p>
                  <div className="tags">{phase.tags.map((t) => (<span key={t}>{t}</span>))}</div>
                </div>
                <div className="ph-shot">
                  <div className="img-ph" role="img" aria-label={phase.shotLabel}><span>{phase.shotLabel}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap">
        <SectionLabel label="28 / Gallery" />
        <Note>.gal-grid — before/after pair, then a three-up of detail shots. Badge variants: before, after, default.</Note>
      </div>
      <section className="section pj-gallery">
        <div className="wrap">
          <div className="gal-head">
            <div>
              <div className="marker">Before / After</div>
              <h2 className="h-section">The change, side by side.</h2>
            </div>
          </div>
          <div className="gal-grid">
            {p.beforeAfter.map((cell) => (
              <div className="gal-cell plate ticks" key={cell.caption}>
                <span className="tick tl"></span><span className="tick tr"></span>
                <span className="tick bl"></span><span className="tick br"></span>
                <div className="plate-inner"><div className="img-ph" role="img" aria-label={cell.label}><span>{cell.label}</span></div></div>
                <div className="cap"><span className="t">{cell.caption}</span><span className={`badge ${cell.badgeVariant ?? ""}`}>{cell.badge}</span></div>
              </div>
            ))}
          </div>
          <div className="gal-grid thirds">
            {p.details.map((cell) => (
              <div className="gal-cell plate ticks" key={cell.caption}>
                <span className="tick tl"></span><span className="tick tr"></span>
                <span className="tick bl"></span><span className="tick br"></span>
                <div className="plate-inner"><div className="img-ph" role="img" aria-label={cell.label}><span>{cell.label}</span></div></div>
                <div className="cap"><span className="t">{cell.caption}</span><span className="badge">{cell.badge}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap">
        <SectionLabel label="29 / Outcome" />
        <Note>.pj-outcome — optional pull quote plus a results row. No live project sets outcomeQuote yet, so the quote here is a sample.</Note>
      </div>
      <section className="pj-outcome">
        <div className="proof-tex">
          <div className="section">
            <div className="wrap">
              <div>
                <div className="marker">The Outcome</div>
                <p className="pull">&ldquo;Sample pull quote — shown only when a project sets outcomeQuote.&rdquo;</p>
                <div className="by">— Sample client, North Minneapolis</div>
              </div>
              <div className="result">
                <div className="r">
                  {p.results.map((stat) => (
                    <div key={stat.k}>
                      <div className="v">{stat.v}{stat.u && <span className="u">{stat.u}</span>}</div>
                      <div className="k">{stat.k}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <SectionLabel label="30 / Project Navigation Cards" />
        <div className="mono" style={{ marginBottom: "12px" }}>
          End-of-project nav — .pj-next — &ldquo;next project&rdquo; + CTA card
          pair
        </div>
        <div className="pj-next">
          <div className="wrap" style={{ padding: 0 }}>
            <Link className="navcard" href="/work/roof-tearoff">
              <div className="k">
                Next Project <span className="arw">→</span>
              </div>
              <div className="t">Asphalt Roof Tear-Off</div>
            </Link>
            <Link className="navcard cta" href="/estimate">
              <div className="k">
                Start Yours <span className="arw">→</span>
              </div>
              <div className="t">Get a Free Estimate</div>
              <div className="sub">
                Tell us about your project — the estimate&apos;s free, and you
                talk to the person doing the work.
              </div>
            </Link>
          </div>
        </div>

      </div>
      <div style={{ height: "120px" }} />
      </>
    </div>
  );
}
