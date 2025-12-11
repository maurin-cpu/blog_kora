import Link from 'next/link'
import Image from 'next/image'
import { getPosts } from '@/lib/posts'
import styles from './page.module.css'

export default async function Home() {
  const posts = await getPosts()

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          <svg className={styles.bookIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 19.5C4 18.837 4.263 18.201 4.732 17.732C5.201 17.263 5.837 17 6.5 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.5 2H20V20H6.5C5.837 20 5.201 19.737 4.732 19.268C4.263 18.799 4 18.163 4 17.5V4.5C4 3.837 4.263 3.201 4.732 2.732C5.201 2.263 5.837 2 6.5 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Klassiker lesen
        </h1>
        <p className={styles.heroSubtitle}>
          Leseeindrücke mit wissenschaftlichem Fundament
        </p>
        <p className={styles.heroDescription}>
          Ein Blog über klassische Literatur, der wissenschaftliche Analyse mit 
          persönlicher Leidenschaft verbindet. Entdecken Sie zeitlose Werke neu.
        </p>
      </section>

      {/* Image Section */}
      <section className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=600&fit=crop&q=80"
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
        <h2 className={styles.sectionTitle}>Aktuelle Beiträge</h2>
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

