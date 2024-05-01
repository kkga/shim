import { Highlighter, getHighlighter } from 'shiki/bundle-web.mjs'
import { createCssVariablesTheme } from 'shiki/theme-css-variables'

const myTheme = createCssVariablesTheme({
  name: 'css-variables',
  variablePrefix: '--shiki-',
  variableDefaults: {},
  fontStyle: true,
})

let highlighter: Highlighter
export const codeToHtml = async ({ code, language }) => {
  if (!highlighter) {
    highlighter = await getHighlighter({
      langs: ['tsx', 'sh'],
      themes: [
        'dark-plus',
        {
          name: 'css-variables',
          bg: 'transparent',
          fg: 'var(--color-neutral-11)',
          settings: [
            {
              scope: ['comment'],
              settings: { foreground: 'var(--color-neutral-9)' },
            },
            {
              scope: ['keyword'],
              settings: { foreground: 'var(--color-neutral-10)' },
            },
            {
              scope: ['string', 'constant'],
              settings: { foreground: 'var(--color-neutral-11)' },
            },
          ],
        },
      ],
    })
  }

  return highlighter.codeToHtml(code, {
    lang: language || 'tsx',
    structure: 'inline',
    theme: 'dark-plus',
    colorReplacements: {
      '#6a9955': 'var(--color-success-9)',
      '#ce9178': 'var(--color-neutral-11)',
      '#c586c0': 'var(--color-neutral-11)',
      '#d4d4d4': 'var(--color-neutral-11)',
      '#9cdcfe': 'var(--color-neutral-12)',
      '#4ec9b0': 'var(--color-accent-11)',
      '#569cd6': 'var(--color-neutral-11)',
      '#b5cea8': 'var(--color-neutral-12)',
      '#4fc1ff': 'var(--color-neutral-12)',
      '#dcdcaa': 'var(--color-neutral-12)',
      '#808080': 'var(--color-neutral-9)',
    },
  })
}
