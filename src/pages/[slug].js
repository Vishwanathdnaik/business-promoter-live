import { getPostData } from '../lib/posts';
import { marked } from 'marked';

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'first-post' } }],
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = getPostData(params.slug);
  return {
    props: {
      post
    }
  };
}

export default function BlogPost({ post }) {
  return (
    <article className="max-w-3xl mx-auto px-6 pt-24 prose">
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500">{post.date}</p>
      <div>{post.content}</div>
    </article>
  );
}
