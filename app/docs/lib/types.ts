export interface ComponentMetadata {
  name: string
  description: string
  category: string
  docUrl?: string
  ariaUrl?: string
  composes?: string[]
  status?: "stable" | "alpha" | "beta" | "deprecated" | "unlisted"
}

export interface GuideMetadata {
  title: string
  description: string
  order?: number
}
