'use client'

import styles from './ShareButtons.module.css'

interface ShareButtonsProps {
  title: string
  url: string
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : url
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(shareUrl)

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    instagram: '#', // Instagram hat keine direkte Share-URL
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
  }

  const handleShare = (platform: string, link: string) => {
    if (platform === 'whatsapp' || platform === 'pinterest') {
      window.open(link, '_blank', 'width=600,height=400')
    } else {
      window.open(link, '_blank', 'width=600,height=400')
    }
  }

  return (
    <div className={styles.shareButtons}>
      <span className={styles.shareLabel}>Teilen:</span>
      <div className={styles.buttons}>
        <button
          onClick={() => handleShare('facebook', shareLinks.facebook)}
          className={styles.shareButton}
          aria-label="Auf Facebook teilen"
        >
          Facebook
        </button>
        <button
          onClick={() => handleShare('twitter', shareLinks.twitter)}
          className={styles.shareButton}
          aria-label="Auf Twitter teilen"
        >
          Twitter
        </button>
        <button
          onClick={() => handleShare('whatsapp', shareLinks.whatsapp)}
          className={styles.shareButton}
          aria-label="Auf WhatsApp teilen"
        >
          WhatsApp
        </button>
        <button
          onClick={() => handleShare('pinterest', shareLinks.pinterest)}
          className={styles.shareButton}
          aria-label="Auf Pinterest teilen"
        >
          Pinterest
        </button>
      </div>
    </div>
  )
}

