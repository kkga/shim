import { highlight } from 'sugar-high'

export const codeToHtml = ({ code, lang }) => highlight(code)

// const highlighterPromise = getHighlighter({
//   langs: ['tsx', 'sh'],
//   themes: [
//     'dark-plus',
//     'light-plus',
//     {
//       name: 'css-variables',
//       bg: 'transparent',
//       fg: 'var(--color-neutral-11)',
//       settings: [
//         {
//           scope: ['comment'],
//           settings: { foreground: 'var(--color-neutral-9)' },
//         },
//         {
//           scope: ['keyword'],
//           settings: { foreground: 'var(--color-neutral-10)' },
//         },
//         {
//           scope: ['string', 'constant'],
//           settings: { foreground: 'var(--color-neutral-11)' },
//         },
//       ],
//     },
//   ],
// })

// export const codeToHtml = async ({
//   code,
//   lang,
// }: {
//   code: string
//   lang?: string
// }) => {
//   const highlighter = await highlighterPromise

//   return highlighter.codeToHtml(code, {
//     lang: lang || 'tsx',
//     structure: 'inline',
//     theme: 'dark-plus',
//     colorReplacements: {
//       '#6a9955': 'var(--color-success-9)',
//       '#ce9178': 'var(--color-neutral-11)',
//       '#c586c0': 'var(--color-neutral-11)',
//       '#d4d4d4': 'var(--color-neutral-11)',
//       '#9cdcfe': 'var(--color-neutral-12)',
//       '#4ec9b0': 'var(--color-accent-11)',
//       '#569cd6': 'var(--color-neutral-11)',
//       '#b5cea8': 'var(--color-neutral-12)',
//       '#4fc1ff': 'var(--color-neutral-12)',
//       '#dcdcaa': 'var(--color-neutral-12)',
//       '#808080': 'var(--color-neutral-9)',
//     },
//   })
// }
