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

export default async function CMS() {
  const posts: any[] = await getPosts();

  return posts && posts.length > 0 && <Articles isAdmin posts={posts} />;
}
