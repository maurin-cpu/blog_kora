'use client'

import { useState } from 'react'
import styles from './Comments.module.css'

interface Comment {
  id: number
  author: string
  content: string
  date: string
}

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([
    // Beispiel-Kommentare
  ])
  const [newComment, setNewComment] = useState({ author: '', content: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.author && newComment.content) {
      const comment: Comment = {
        id: comments.length + 1,
        author: newComment.author,
        content: newComment.content,
        date: new Date().toLocaleDateString('de-DE'),
      }
      setComments([...comments, comment])
      setNewComment({ author: '', content: '' })
    }
  }

  return (
    <div className={styles.commentsContainer}>
      <h3 className={styles.commentsTitle}>Kommentare</h3>
      
      {comments.length === 0 ? (
        <p className={styles.noComments}>Noch keine Kommentare. Seien Sie der Erste!</p>
      ) : (
        <div className={styles.commentsList}>
          {comments.map((comment) => (
            <div key={comment.id} className={styles.comment}>
              <div className={styles.commentHeader}>
                <strong className={styles.commentAuthor}>{comment.author}</strong>
                <span className={styles.commentDate}>{comment.date}</span>
              </div>
              <p className={styles.commentContent}>{comment.content}</p>
            </div>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.commentForm}>
        <h4 className={styles.formTitle}>Kommentar verfassen</h4>
        <input
          type="text"
          placeholder="Ihr Name"
          value={newComment.author}
          onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
          className={styles.formInput}
          required
        />
        <textarea
          placeholder="Ihr Kommentar..."
          value={newComment.content}
          onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
          className={styles.formTextarea}
          rows={4}
          required
        />
        <button type="submit" className={styles.formButton}>
          Kommentar absenden
        </button>
      </form>
    </div>
  )
}

