'use client'

import { useState } from 'react'
import styles from './BookRating.module.css'

export default function BookRating() {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)

  const handleRating = (value: number) => {
    setRating(value)
    // Hier könnte die Bewertung an einen Server gesendet werden
    console.log('Bewertung:', value)
  }

  return (
    <div className={styles.ratingContainer}>
      <h3 className={styles.ratingTitle}>Buch bewerten</h3>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            className={styles.starButton}
            onClick={() => handleRating(star)}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            aria-label={`${star} Sterne`}
          >
            <span
              className={`${styles.star} ${
                star <= (hoveredRating || rating) ? styles.starFilled : ''
              }`}
            >
              ★
            </span>
          </button>
        ))}
      </div>
      {rating > 0 && (
        <p className={styles.ratingText}>
          Vielen Dank für Ihre Bewertung! ({rating} von 5 Sternen)
        </p>
      )}
    </div>
  )
}

