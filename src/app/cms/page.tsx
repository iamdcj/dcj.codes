import Link from "next/link";

export default function Home() {
  return (
    <section>
      Current Posts <Link href="/cms/new">Create New Post +</Link>
      {
        // map over current posts
      }
    </section>
  );
}
