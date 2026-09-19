"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/estimate", label: "Estimate" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const closeAndRestoreFocus = useCallback(() => {
    setOpen(false);
    hamburgerRef.current?.focus();
  }, []);

  // Close drawer on route change (adjusting state during render, not in an effect)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Drawer keyboard behavior: move focus in on open, Escape closes and returns
  // focus to the hamburger, Tab cycles within the drawer.
  useEffect(() => {
    if (!open) return;
    const drawer = drawerRef.current;
    if (!drawer) return;
    const focusable = () =>
      Array.from(
        drawer.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      );

    focusable()[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeAndRestoreFocus();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, closeAndRestoreFocus]);

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
              src="/logo.svg"
              alt="Baker Built Construction logo"
              width={48}
              height={42}
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
                aria-current={
                  pathname === href || pathname.startsWith(href + "/")
                    ? "page"
                    : undefined
                }
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
              ref={hamburgerRef}
              className="nav-hamburger"
              onClick={() => setOpen((o) => !o)}
              aria-label={
                open ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={open}
            >
              <span className={`hb-icon${open ? " is-open" : ""}`}>
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        ref={drawerRef}
        className={`nav-drawer${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <button
          className="nd-close"
          onClick={closeAndRestoreFocus}
          aria-label="Close navigation menu"
        >
          <span aria-hidden="true">×</span>
        </button>
        <div className="nd-inner">
          <nav className="nd-links">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="nd-link"
                aria-current={
                  pathname === href || pathname.startsWith(href + "/")
                    ? "page"
                    : undefined
                }
                onClick={() => setOpen(false)}
              >
                {label}
                <span className="nd-arw">→</span>
              </Link>
            ))}
          </nav>
          <div className="nd-contact">
            <div className="nd-label mono">Call / Text</div>
            <a className="nd-phone" href="tel:+16129643505">
              (612) 964‑3505
            </a>
            <div className="nd-sub mono">
              Mon–Fri · 8AM–5PM · Se habla español
            </div>
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
