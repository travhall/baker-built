'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/about',    label: 'About'    },
  { href: '/work',     label: 'Work'     },
  { href: '/estimate', label: 'Estimate' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close drawer on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <span className="mono">Residential General Contractor</span>
          <span className="mono">
            <span className="sep">/</span>Minneapolis, MN
            <span className="sep">/</span>Est. 2017
            <span className="sep">/</span>Se habla español
          </span>
        </div>
      </div>

      <nav className="nav nav-centered">
        <div className="wrap">
          <Link className="brand" href="/">
            <Image
              src="/bb-logo-transparent.png"
              alt="Baker Built Construction logo"
              width={92}
              height={46}
              style={{ height: '46px', width: 'auto' }}
              priority
            />
            <span className="bk">
              <span className="n1">Baker Built</span>
              <span className="n2">Construction · LLC</span>
            </span>
          </Link>

          <div className="nav-links">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href || pathname.startsWith(href + '/') ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="nav-cta">
            <a className="nav-phone" href="tel:+16129643505">
              <span className="lbl mono">Call</span>
              <b>(612) 964‑3505</b>
            </a>
            <button
              className="nav-hamburger"
              onClick={() => setOpen(o => !o)}
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={open}
            >
              <span className={`hb-icon${open ? ' is-open' : ''}`}>
                <span /><span /><span />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav-drawer${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <div className="nd-inner">
          <nav className="nd-links">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="nd-link"
                aria-current={pathname === href || pathname.startsWith(href + '/') ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
                <span className="nd-arw">→</span>
              </Link>
            ))}
          </nav>
          <div className="nd-contact">
            <div className="nd-label mono">Call / Text</div>
            <a className="nd-phone" href="tel:+16129643505">(612) 964‑3505</a>
            <div className="nd-sub mono">Mon–Fri · 8AM–5PM · Se habla español</div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="nav-backdrop"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
