import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Klassiker lesen</h3>
            <p className={styles.footerText}>
              Leseeindrücke mit wissenschaftlichem Fundament
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerHeading}>Links</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/kontakt">Kontakt</Link></li>
              <li><Link href="/impressum">Impressum</Link></li>
              <li><Link href="/datenschutz">Datenschutz</Link></li>
              <li>
                <a
                  href="https://app.pagescms.org/maurin-cpu/blog_kora/main"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CMS-Login
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerHeading}>Newsletter</h4>
            <p className={styles.footerText}>
              Bleiben Sie auf dem Laufenden mit neuen Beiträgen
            </p>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className={styles.newsletterInput}
              />
              <button type="submit" className={styles.newsletterButton}>
                Abonnieren
              </button>
            </form>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerHeading}>Folgen Sie mir</h4>
            <div className={styles.socialIcons}>
              <a href="#" aria-label="Instagram" className={styles.socialIcon}>
                Instagram
              </a>
              <a href="#" aria-label="Facebook" className={styles.socialIcon}>
                Facebook
              </a>
              <a href="#" aria-label="Twitter" className={styles.socialIcon}>
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Klassiker lesen. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}

