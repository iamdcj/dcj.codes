import Link from "next/link";

export default function Logo({
  isRelative,
  root = "/",
}: {
  isRelative?: boolean;
  root?: string;
}) {
  return (
    <Link
      href={root}
      className="site-logo"
      style={{
        position: isRelative ? "relative" : "absolute",
        top: "auto",
        left: "auto",
      }}
    >
      <span className="d">D</span> <span className="c">C</span>
      <span className="j">J</span>
    </Link>
  );
}