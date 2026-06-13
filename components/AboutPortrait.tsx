import Image from 'next/image';
import Plate from '@/components/Plate';

export default function AboutPortrait() {
  return (
    <div className="about-portrait reveal">
      <Plate>
        <div className="plate-inner">
          <Image
            className="about-slot"
            src="/about-nate.webp"
            alt="Nate Baker, founder of Baker Built, on a job site"
            width={480}
            height={600}
          />
        </div>
        <div className="titleblock">
          <div><div className="tk">Subject</div><div className="tv">Nate Baker</div></div>
          <div><div className="tk">Role</div><div className="tv">Owner · Operator</div></div>
          <div><div className="tk">Sheet</div><div className="tv">FIG‑00</div></div>
        </div>
      </Plate>
    </div>
  );
}
