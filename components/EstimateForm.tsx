'use client';

import { useState } from 'react';

export default function EstimateForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="form-side"
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
    >
      <div className="form-head">
        <div className="ttl">Work Order Request</div>
        <div className="wo"><div className="k">Form</div><div className="v">EST‑01</div></div>
      </div>
      <div className="field row2">
        <div><label>Name</label><input type="text" name="name" placeholder="Your name" required /></div>
        <div><label>Phone</label><input type="tel" name="phone" placeholder="(612) 000‑0000" required /></div>
      </div>
      <div className="field"><label>Email</label><input type="email" name="email" placeholder="you@email.com" /></div>
      <div className="field"><label>Project Address</label><input type="text" name="address" placeholder="Street, city, ZIP" /></div>
      <div className="field">
        <label>Project Type</label>
        <select name="type" required defaultValue="">
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
        <label>Brief Description</label>
        <textarea name="desc" placeholder="What are you looking to build, repair, or replace? Rough timeline if you have one."></textarea>
      </div>
      <button className="btn btn-accent" type="submit" style={{width:'100%',justifyContent:'center'}}>
        Submit Request <span className="arw">→</span>
      </button>
      <div className="form-note">Or call direct: (612) 964‑3505 · Mon–Fri 8AM–5PM</div>
      {submitted && (
        <div style={{marginTop:'18px',padding:'14px 16px',background:'rgba(60,90,115,0.08)',border:'1px solid var(--hair)',fontFamily:'var(--font-mono)',fontSize:'12px',letterSpacing:'0.04em',color:'var(--blue)',display:'flex',alignItems:'center',gap:'10px'}}>
          ✓ REQUEST LOGGED — Nate will reach out within one business day.
        </div>
      )}
    </form>
  );
}
