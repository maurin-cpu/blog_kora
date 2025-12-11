'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          Klassiker lesen
        </Link>
        <ul className={styles.navList}>
          <li 
            className={styles.dropdown}
            onMouseEnter={() => setActiveDropdown('buecher')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link href="/buecher">Bücher</Link>
            {activeDropdown === 'buecher' && (
              <ul 
                className={styles.dropdownMenu}
                onMouseEnter={() => setActiveDropdown('buecher')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <li><Link href="/buecher?filter=klassiker-des-monats">Klassiker des Monats</Link></li>
                <li><Link href="/buecher?filter=genres">Genres</Link></li>
                <li><Link href="/buecher?filter=autoren">Autoren</Link></li>
                <li><Link href="/buecher?filter=neue-beitraege">Neue Beiträge</Link></li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

