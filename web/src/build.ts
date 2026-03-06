import { readFileSync, writeFileSync, mkdirSync, readdirSync, copyFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { marked } from 'marked'
import matter from 'gray-matter'
import type { SiteConfig, PageMeta } from './types.js'
import { appLayout, legalLayout, oauthCallback, clientMetadata } from './templates/index.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const sitesDir = join(__dirname, 'sites')
const contentDir = join(__dirname, 'content/pages')
const assetsDir = join(__dirname, 'assets')
const distDir = join(__dirname, '..', 'dist')

// Load all site configs
function loadSites(): SiteConfig[] {
  const files = readdirSync(sitesDir).filter(f => f.endsWith('.json'))
  return files.map(f => {
    const content = readFileSync(join(sitesDir, f), 'utf-8')
    return JSON.parse(content) as SiteConfig
  })
}

// Load all markdown pages
function loadPages(): Array<{ meta: PageMeta & { path: string }, content: string }> {
  const files = readdirSync(contentDir).filter(f => f.endsWith('.md'))
  return files.map(f => {
    const raw = readFileSync(join(contentDir, f), 'utf-8')
    const { data, content } = matter(raw)
    return {
      meta: data as PageMeta & { path: string },
      content: marked(content) as string
    }
  })
}

// Ensure directory exists
function ensureDir(filePath: string): void {
  mkdirSync(dirname(filePath), { recursive: true })
}

// Copy assets for a site
function copyAssets(site: SiteConfig): void {
  const siteAssetsDir = join(assetsDir, site.id)
  const commonAssetsDir = join(assetsDir, 'common')
  const outDir = join(distDir, site.id, 'static')

  ensureDir(join(outDir, '_'))

  // Copy common assets first
  if (existsSync(commonAssetsDir)) {
    const files = readdirSync(commonAssetsDir)
    for (const file of files) {
      copyFileSync(join(commonAssetsDir, file), join(outDir, file))
      console.log(`  -> static/${file} (common)`)
    }
  }

  // Copy site-specific assets (overrides common)
  if (existsSync(siteAssetsDir)) {
    const files = readdirSync(siteAssetsDir)
    for (const file of files) {
      copyFileSync(join(siteAssetsDir, file), join(outDir, file))
      console.log(`  -> static/${file}`)
    }
  }
}

// Build site
function buildSite(site: SiteConfig, pages: ReturnType<typeof loadPages>): void {
  const siteDir = join(distDir, site.id)

  console.log(`Building ${site.name} (${site.domain})...`)

  // Build pages from markdown
  for (const page of pages) {
    const outPath = join(siteDir, page.meta.path)
    ensureDir(outPath)

    let html: string
    if (page.meta.template === 'app') {
      html = appLayout(site, page.content)
    } else {
      html = legalLayout(site, page.meta.title, page.content)
    }

    writeFileSync(outPath, html)
    console.log(`  -> ${page.meta.path}`)
  }

  // Build OAuth callback
  const callbackPath = join(siteDir, 'oauth/callback/index.html')
  ensureDir(callbackPath)
  writeFileSync(callbackPath, oauthCallback(site))
  console.log(`  -> oauth/callback/index.html`)

  // Build client metadata
  const metadataPath = join(siteDir, '.well-known/client-metadata.json')
  ensureDir(metadataPath)
  writeFileSync(metadataPath, clientMetadata(site))
  console.log(`  -> .well-known/client-metadata.json`)

  // Generate apple-app-site-association for Universal Links (if appId is set)
  if (site.appId) {
    const aasa = {
      applinks: {
        apps: [],
        details: [{
          appID: site.appId,
          paths: ['/oauth/callback', '/oauth/callback/']
        }]
      }
    }
    const aasaPath = join(siteDir, '.well-known/apple-app-site-association')
    writeFileSync(aasaPath, JSON.stringify(aasa, null, 2))
    console.log(`  -> .well-known/apple-app-site-association`)
  }

  // Copy assets
  copyAssets(site)
}

// Main
function main(): void {
  console.log('App Pages Builder\n')

  const sites = loadSites()
  const pages = loadPages()

  console.log(`Found ${sites.length} sites, ${pages.length} pages\n`)

  for (const site of sites) {
    buildSite(site, pages)
    console.log('')
  }

  console.log('Done!')
}

main()
