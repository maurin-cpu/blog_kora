import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPosts, getPostBySlug } from '@/lib/posts'
import ShareButtons from '@/components/ShareButtons'
import BookRating from '@/components/BookRating'
import Comments from '@/components/Comments'
import styles from './page.module.css'

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>
          ← Zurück zur Übersicht
        </Link>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>
          <span className={styles.author}>Von {post.author}</span>
          <span className={styles.date}>
            {new Date(post.date).toLocaleDateString('de-DE', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>
      </header>

      <main className={styles.main}>
        <article className={styles.article}>
          <div 
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <ShareButtons title={post.title} url={`/blog/${post.slug}`} />
        <BookRating />
        <Comments />
      </main>

      <footer className={styles.footer}>
        <Link href="/" className={styles.homeLink}>
          Zur Startseite
        </Link>
      </footer>
    </div>
  )
}

