export default function Articles({ posts }) {
  return (
    <section className="section section--approach">
      <header className="section__header">
        <h2 className="section__heading">About</h2>
        <div className="section__subtitle">
          {posts.map((post: any) => (
            <article>
              <h3>{post.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
          ))}
        </div>
      </header>
    </section>
  );
}
