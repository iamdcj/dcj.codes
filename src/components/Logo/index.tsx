export default function Logo({ isRelative }: { isRelative?: boolean }) {
  return (
    <a
      href="#"
      className="site-logo"
      style={{ position: isRelative ? "relative" : "absolute", top: 'auto', left: 'auto' }}
    >
      <span className="d">D</span> <span className="c">C</span>
      <span className="j">J</span>
    </a>
  );
}
