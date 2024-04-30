import localFont from 'next/font/local'

export const fontMono = localFont({
  src: './jbmono-regular.woff2',
  variable: '--font-mono',
})

export const fontSans = localFont({
  src: [
    {
      path: './inter.woff2',
      style: 'normal',
    },
    {
      path: './inter-italic.woff2',
      style: 'italic',
    },
  ],
  variable: '--font-sans',
})
