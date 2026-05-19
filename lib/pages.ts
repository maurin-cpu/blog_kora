import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface HomePage {
  heroTitle: string
  heroSubtitle: string
  heroDescription: string
  heroImage: string
  postsSectionTitle: string
}

const HOME_DEFAULTS: HomePage = {
  heroTitle: 'Klassiker lesen',
  heroSubtitle: 'Leseeindrücke mit wissenschaftlichem Fundament',
  heroDescription:
    'Ein Blog über klassische Literatur, der wissenschaftliche Analyse mit persönlicher Leidenschaft verbindet. Entdecken Sie zeitlose Werke neu.',
  heroImage:
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=600&fit=crop&q=80',
  postsSectionTitle: 'Aktuelle Beiträge',
}

export async function getHomePage(): Promise<HomePage> {
  const file = path.join(process.cwd(), 'content', 'pages', 'home.md')
  if (!fs.existsSync(file)) return HOME_DEFAULTS

  const { data } = matter(fs.readFileSync(file, 'utf8'))
  return {
    heroTitle: String(data.heroTitle ?? HOME_DEFAULTS.heroTitle),
    heroSubtitle: String(data.heroSubtitle ?? HOME_DEFAULTS.heroSubtitle),
    heroDescription: String(data.heroDescription ?? HOME_DEFAULTS.heroDescription),
    heroImage: String(data.heroImage ?? HOME_DEFAULTS.heroImage),
    postsSectionTitle: String(data.postsSectionTitle ?? HOME_DEFAULTS.postsSectionTitle),
  }
}
