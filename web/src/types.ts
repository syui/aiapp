export interface SiteConfig {
  id: string
  name: string
  domain: string
  scheme: string
  appId?: string
  appUrl?: string
  version: string
  category: string
  description: string
  backLink: string
  icon: string
  os: string
  price: string
}

export interface PageMeta {
  title: string
  template?: 'default' | 'app' | 'legal'
}
