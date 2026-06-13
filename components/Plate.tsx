interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Plate({ children, className }: Props) {
  return (
    <div className={`plate ticks${className ? ` ${className}` : ''}`}>
      <span className="tick tl"></span><span className="tick tr"></span>
      <span className="tick bl"></span><span className="tick br"></span>
      {children}
    </div>
  );
}
