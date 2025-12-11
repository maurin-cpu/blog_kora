'use client'

import { useState } from 'react'
import styles from './SearchBar.module.css'

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Suchfunktionalität wird später implementiert
    console.log('Suche nach:', searchQuery)
  }

  return (
    <form onSubmit={handleSearch} className={styles.searchForm}>
      <input
        type="text"
        placeholder="Suche nach Autoren, Titeln oder Themen..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>
        🔍
      </button>
    </form>
  )
}

