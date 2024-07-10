import CMSHeader from "./components/Header";

export default function CMSLayout({ children }: { children: React.ReactNode }) {
 
  return (
    <>
      <CMSHeader />
      <main className="layout">{children}</main>
    </>
  );
}
