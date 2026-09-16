'use client';

import { useEffect, useRef, useState, type SubmitEvent } from 'react';

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default function EstimateForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ((status === 'success' || status === 'error') && statusRef.current) {
      statusRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      statusRef.current.focus();
    }
  }, [status]);

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form) as any) as Record<string, string>;
    data.subject = `New Estimate Request — ${data.type} — ${data.name}`;

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(data),
      });
      if (!res.ok) throw new Error(`Netlify Forms responded ${res.status}`);
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form
      className="form-side"
      name="estimate"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="estimate" />
      <input type="hidden" name="subject" value="New Estimate Request" />
      <p style={{ display: 'none' }}>
        <label>
          Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
        </label>
      </p>

      <div className="form-head">
        <div className="ttl">Work Order Request</div>
        <div className="wo"><div className="k">Form</div><div className="v">EST‑01</div></div>
      </div>
      <div className="field row2">
        <div><label htmlFor="est-name">Name</label><input id="est-name" type="text" name="name" placeholder="Your name" required /></div>
        <div><label htmlFor="est-phone">Phone</label><input id="est-phone" type="tel" name="phone" placeholder="(612) 000‑0000" required /></div>
      </div>
      <div className="field"><label htmlFor="est-email">Email</label><input id="est-email" type="email" name="email" placeholder="you@email.com" /></div>
      <div className="field"><label htmlFor="est-address">Project Address</label><input id="est-address" type="text" name="address" placeholder="Street, city, ZIP" /></div>
      <div className="field">
        <label htmlFor="est-type">Project Type</label>
        <select id="est-type" name="type" required defaultValue="">
          <option value="" disabled>Select a scope…</option>
          <option>Home Remodeling</option>
          <option>Roofing</option>
          <option>Window Replacement</option>
          <option>Decking</option>
          <option>New Build</option>
          <option>Addition</option>
          <option>Other / Not sure yet</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="est-desc">Brief Description</label>
        <textarea id="est-desc" name="desc" placeholder="What are you looking to build, repair, or replace? Rough timeline if you have one."></textarea>
      </div>
      <button
        className="btn btn-accent"
        type="submit"
        disabled={status === 'submitting'}
        style={{ width: '100%', justifyContent: 'center' }}
      >
        {status === 'submitting' ? 'Sending…' : 'Submit Request'} <span className="arw">→</span>
      </button>
      <div className="form-note">Or call direct: (612) 964‑3505 · Mon–Fri 8AM–5PM</div>
      {status === 'success' && (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="status"
          aria-live="polite"
          style={{marginTop:'18px',padding:'20px 22px',background:'rgba(60,90,115,0.08)',border:'1px solid var(--hair)',fontFamily:'var(--font-mono)',fontSize:'14px',letterSpacing:'0.04em',color:'var(--blue)',display:'flex',alignItems:'center',gap:'10px'}}
        >
          ✓ REQUEST LOGGED — Nate will reach out within one business day.
        </div>
      )}
      {status === 'error' && (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="status"
          aria-live="polite"
          style={{marginTop:'18px',padding:'20px 22px',background:'rgba(236,59,48,0.08)',border:'1px solid var(--hair)',fontFamily:'var(--font-mono)',fontSize:'14px',letterSpacing:'0.04em',color:'var(--red-deep)',display:'flex',alignItems:'center',gap:'10px'}}
        >
          ✕ Something went wrong. Please call (612) 964‑3505 directly.
        </div>
      )}
    </form>
  );
}
