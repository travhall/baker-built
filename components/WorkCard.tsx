import Link from 'next/link';
import Plate from '@/components/Plate';

interface Props {
  name: string;
  scope: string;
  location: string;
  sheet: string;
  slug: string | null;
  label: string;
}

export default function WorkCard({ name, scope, location, sheet, slug, label }: Props) {
  const plate = (
    <Plate>
      <div className="plate-inner">
        <div className="img-ph work-slot" role="img" aria-label={label}><span>{label}</span></div>
      </div>
      <div className="work-block">
        <div className="wb-name">{name}</div>
        <div className="wb-meta">
          <div><div className="tk">Scope</div><div className="tv">{scope}</div></div>
          <div><div className="tk">Location</div><div className="tv">{location}</div></div>
          <div><div className="tk">Sheet</div><div className="tv">{sheet}</div></div>
        </div>
        {slug
          ? <div className="wb-open">View Project Sheet <span className="arw">→</span></div>
          : <div className="wb-open pending"><span className="st">Sheet in progress</span></div>
        }
      </div>
    </Plate>
  );

  return (
    <article className="work-card">
      {slug
        ? <Link className="work-card-link" href={slug} aria-label={`View project sheet: ${name}`}>{plate}</Link>
        : plate
      }
    </article>
  );
}
