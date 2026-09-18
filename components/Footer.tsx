import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="top">
          <div className="brand-f">
            <Image
              src="/bb-logo-ondark.png"
              alt="Baker Built Construction"
              width={480}
              height={480}
            />
            <div className="tag">Take your dream and make it a reality.</div>
          </div>

          <div className="col">
            <h3>Services</h3>
            <Link href="/services#svc-01">Home Remodeling</Link>
            <Link href="/services#svc-02">Roofing</Link>
            <Link href="/services#svc-03">Window Replacement</Link>
            <Link href="/services#svc-04">Decking</Link>
            <Link href="/services#svc-05">New Builds</Link>
            <Link href="/services#svc-06">Additions</Link>
          </div>

          <div className="col">
            <h3>Contact</h3>
            <a href="tel:+16129643505">(612) 964‑3505</a>
            <p>
              2636 Thomas Ave N<br />
              Minneapolis, MN 55411
            </p>
            <p>Mon–Fri · 8AM–5PM</p>
            <Link href="/estimate">Request a Free Estimate →</Link>
          </div>
        </div>

        <div className="bottom">
          <span className="mono">
            © 2026 Baker Built Construction, LLC · Est. 2017 · Lic. MN
          </span>
          <span className="mono">
            Minneapolis, Minnesota · Se habla español
          </span>
        </div>
      </div>
    </footer>
  );
}
