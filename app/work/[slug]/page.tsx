import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getAllProjects } from '@/lib/projects';

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: `${project.title} — Baker Built Construction` };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      {/* ===== BREADCRUMB ===== */}
      <div className="crumb">
        <div className="wrap">
          <div className="path">
            <Link href="/work"><span className="arw">←</span> Selected Work</Link>
            <span className="sep seg-hide">/</span>
            <span className="here seg-hide">{project.title}</span>
          </div>
          <div className="sheetno">Sheet {project.sheetNo}</div>
        </div>
      </div>

      {/* ===== MASTHEAD ===== */}
      <section className="pj-masthead gridbg">
        <div className="wrap">
          <div className="pj-mast-top">
            <div>
              <div className="marker reveal"><b>{project.sheetNo}</b> / Project Record</div>
              <h1 className="pj-title reveal d1" dangerouslySetInnerHTML={{ __html: project.titleHtml }} />
            </div>
            <p className="pj-summary reveal d2" dangerouslySetInnerHTML={{ __html: project.summaryHtml }} />
          </div>
          <div className="titlestrip reveal d1">
            <div className="cell"><div className="k">Project No.</div><div className="v accent">{project.sheetNo}</div></div>
            <div className="cell"><div className="k">Scope</div><div className="v">{project.scope}</div></div>
            <div className="cell"><div className="k">Location</div><div className="v">{project.location}</div></div>
            <div className="cell"><div className="k">Duration</div><div className="v">{project.duration}</div></div>
            <div className="cell"><div className="k">Crew</div><div className="v">{project.crew}</div></div>
            <div className="cell"><div className="k">Status</div><div className="v ok">{project.status}</div></div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED FIGURE ===== */}
      <section className="pj-figure">
        <div className="wrap">
          <div className="plate ticks reveal">
            <span className="tick tl"></span><span className="tick tr"></span>
            <span className="tick bl"></span><span className="tick br"></span>
            <div className="plate-inner">
              <div className="img-ph pj-fig-slot" role="img" aria-label={`Hero shot — ${project.title} · 16:9`}>
                <span>Drop the hero shot — {project.title.toLowerCase()} · 16:9</span>
              </div>
            </div>
            <div className="pj-fig-cap">
              <div className="lbl"><b>Fig. 01</b> &nbsp;— &nbsp;{project.figCaption}</div>
              <div className="fig">Photo · N. Baker</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BRIEF + SCOPE ===== */}
      <section className="section pj-brief">
        <div className="wrap">
          <aside className="pj-aside reveal">
            <div className="lbl">The Brief</div>
            <div className="note">Replace placeholder copy with the real story once the job notes are written up.</div>
          </aside>
          <div className="body">
            {project.brief.map((para, i) => (
              <p key={i} className="reveal">{para}</p>
            ))}
            <div className="scope-list reveal d2">
              <div className="scope-head">Scope of Work — what was included</div>
              <ul>
                {project.scopeItems.map((item, i) => (
                  <li key={i} className="done"><span className="bx"></span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BUILD SEQUENCE ===== */}
      <section className="section pj-build gridbg">
        <div className="wrap">
          <div className="section-head" style={{marginBottom:'30px'}}>
            <div>
              <div className="marker reveal">Build Sequence / How it came together</div>
              <h2 className="h-section reveal">{project.buildHeadline}</h2>
            </div>
          </div>
          <div className="phase-list">
            {project.phases.map((phase) => (
              <div className="phase reveal" key={phase.number}>
                <div className="ph-no">
                  <span className="n">{phase.number}</span>
                  <span className="marktick"></span>
                </div>
                <div className="ph-body">
                  <h3>{phase.title}</h3>
                  <div className="ph-dur">
                    {phase.duration.split(' · ').map((part, i) => (
                      i === 0 ? <span key={i}>{part} · </span> : <b key={i}>{part}</b>
                    ))}
                  </div>
                  <p>{phase.body}</p>
                  <div className="tags">{phase.tags.map(t => <span key={t}>{t}</span>)}</div>
                </div>
                <div className="ph-shot">
                  <div className="img-ph" role="img" aria-label={phase.shotLabel}><span>{phase.shotLabel}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="section pj-gallery">
        <div className="wrap">
          <div className="gal-head">
            <div>
              <div className="marker reveal">Before / After</div>
              <h2 className="h-section reveal">The change, side by side.</h2>
            </div>
          </div>
          <div className="gal-grid reveal d1">
            {project.beforeAfter.map((cell) => (
              <div className="gal-cell plate ticks" key={cell.caption}>
                <span className="tick tl"></span><span className="tick tr"></span>
                <span className="tick bl"></span><span className="tick br"></span>
                <div className="plate-inner">
                  <div className="img-ph" role="img" aria-label={cell.label}><span>{cell.label}</span></div>
                </div>
                <div className="cap">
                  <span className="t">{cell.caption}</span>
                  <span className={`badge ${cell.badgeVariant ?? ''}`}>{cell.badge}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="gal-grid thirds reveal d1" style={{marginTop:'24px'}}>
            {project.details.map((cell) => (
              <div className="gal-cell plate ticks" key={cell.caption}>
                <span className="tick tl"></span><span className="tick tr"></span>
                <span className="tick bl"></span><span className="tick br"></span>
                <div className="plate-inner">
                  <div className="img-ph" role="img" aria-label={cell.label}><span>{cell.label}</span></div>
                </div>
                <div className="cap">
                  <span className="t">{cell.caption}</span>
                  <span className="badge">{cell.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUTCOME ===== */}
      <section className="pj-outcome">
        <div className="proof-tex">
          <div className="section" style={{padding:'96px 0'}}>
            <div className="wrap">
              <div>
                <div className="marker reveal">The Outcome</div>
                <p className="pull reveal d1">{project.outcomeQuote}</p>
                <div className="by reveal d1">{project.outcomeBy}</div>
              </div>
              <div className="result reveal d2">
                <div className="r">
                  {project.results.map((stat) => (
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

      {/* ===== NEXT / CTA ===== */}
      <section className="section pj-next">
        <div className="wrap">
          <Link className="navcard reveal" href={`/work/${project.nextSlug}`}>
            <div className="k">Next Project <span className="arw">→</span></div>
            <div className="t">{project.nextTitle}</div>
          </Link>
          <Link className="navcard cta reveal d1" href="/estimate">
            <div className="k">Start Yours <span className="arw">→</span></div>
            <div className="t">Get a Free Estimate</div>
            <div className="sub">Tell Nate about your project — the estimate&apos;s free, and you talk to the person doing the work.</div>
          </Link>
        </div>
      </section>
    </>
  );
}
