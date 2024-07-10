'use client';

import Cookies from 'js-cookie'

export default function Articles({
  posts,
  isAdmin = false,
}: {
  posts: any[];
  isAdmin?: boolean;
}) {

  const handleDelete = async (id: any) => {
    try {
      console.log(Cookies.get('dcj_acc_token'));
      
      const res = await fetch(`http://localhost:3001/api/blog/${id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          authorization: Cookies.get('dcj_acc_token') || ''
        }
      });
  
      if (!res.ok) {
        throw new Error(`Failed to fetch posts, received status ${res.status}`);
      }
  
      const posts = await res.json();
  
      return posts;
    } catch (error) {
      return [];
    }
  }

  return (
    <section className="section section--posts">
      <header className="section__header">
        <h2 className="section__heading">Thoughts</h2>
        <div className="section__content">
          {posts.map((post: any) => (
            <article>
              {
                isAdmin && <button onClick={() => handleDelete(post._id)}>Delete</button>
              }
              <h3>{post.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
          ))}
        </div>
      </header>
    </section>
  );
}
