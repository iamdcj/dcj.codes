import Hero from "@/components/Hero";
import Logo from "@/components/Logo";
import Introduction from "@/components/Introduction";
import Footer from "@/components/Footer";
import Articles from "@/components/Articles";

async function getPosts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`);

    if (!res.ok) {
      throw new Error(`Failed to fetch posts, received status ${res.status}`);
    }

    const posts = await res.json();

    return posts;
  } catch (error) {
    return [];
  }
}

export default async function Home() {
  const posts: any[] = await getPosts();

  return (
    <div className="site-wrapper">
      <header className="grid site-header">
        <h1 className="visually--hidden">
          David Christian Jones, User Interface Engineer.
        </h1>
        <Logo />
      </header>
      <main className="site-main" role="main">
        <div className="layout layout--home">
          <Hero />
          <div className="inner-wrapper">
            <div className="inner-action"></div>
            <Introduction />
            {posts && posts.length > 0 && <Articles posts={posts} />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
