import Link from 'next/link'
import Image from 'next/image'
import { getPosts } from '@/lib/posts'
import { getHomePage } from '@/lib/pages'
import styles from './page.module.css'

export default async function Home() {
  const [posts, page] = await Promise.all([getPosts(), getHomePage()])

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          <svg className={styles.bookIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 19.5C4 18.837 4.263 18.201 4.732 17.732C5.201 17.263 5.837 17 6.5 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.5 2H20V20H6.5C5.837 20 5.201 19.737 4.732 19.268C4.263 18.799 4 18.163 4 17.5V4.5C4 3.837 4.263 3.201 4.732 2.732C5.201 2.263 5.837 2 6.5 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {page.heroTitle}
        </h1>
        <p className={styles.heroSubtitle}>
          {page.heroSubtitle}
        </p>
        <p className={styles.heroDescription}>
          {page.heroDescription}
        </p>
      </section>

      {/* Image Section */}
      <section className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <Image
            src={page.heroImage}
            alt="Klassische Literatur und berühmte Autoren"
            width={1200}
            height={600}
            className={styles.authorsImage}
            priority
            unoptimized
          />
        </div>
      </section>

      {/* Aktuelle Beiträge Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{page.postsSectionTitle}</h2>
        <div className={styles.postsGrid}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className={styles.postCard}>
                <div className={styles.postImage}>
                  <div className={styles.imagePlaceholder}>
                    {post.title.charAt(0)}
                  </div>
                </div>
                <div className={styles.postContent}>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <div className={styles.postMeta}>
                    <span className={styles.postDate}>
                      {new Date(post.date).toLocaleDateString('de-DE', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <span className={styles.postAuthor}>{post.author}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

    </div>
  )
}

