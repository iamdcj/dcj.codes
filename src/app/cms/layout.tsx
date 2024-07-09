import Logo from "@/components/Logo";
import Link from "next/link";

export default function CMSLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Logo isRelative root="/cms" />
        <Link href="/">Home</Link>
      </header>
      <main className="layout">{children}</main>
    </>
  );
}
