import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import styles from './page.module.css'

export default async function Buecher() {
  const posts = await getPosts()

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Bücher</h1>
        <p className={styles.subtitle}>Klassische Werke, die ich gelesen und besprochen habe</p>
      </header>

      <main className={styles.main}>
        <div className={styles.postsList}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className={styles.postCard}>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <div className={styles.postMeta}>
                  <span className={styles.postDate}>
                    {new Date(post.date).toLocaleDateString('de-DE', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

