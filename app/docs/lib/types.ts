export interface ComponentMetadata {
  name: string
  description: string
  category: string
  srcFilename: string
  docUrl?: string
  aria?: string
  composes?: string[]
  status?: "stable" | "alpha" | "beta" | "deprecated"
}

export interface GuideMetadata {
  title: string
  description: string
}
