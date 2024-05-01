export interface ComponentMetadata {
  name: string
  description: string
  category: string
  srcFilename: string
  docUrl?: string
  aria?: string
  composes?: string[]
}

export interface GuideMetadata {
  title: string
  description: string
}
