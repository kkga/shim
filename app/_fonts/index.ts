import localFont from 'next/font/local'

export const fontMono = localFont({
  src: '@/_fonts/JetbrainsMono-Regular.woff2',
  variable: '--font-mono',
})

export const fontSans = localFont({
  src: [
    {
      path: '@/_fonts/InterVariable.woff2',
      style: 'normal',
    },
    {
      path: '@/_fonts/InterVariable-Italic.woff2',
      style: 'italic',
    },
  ],
  variable: '--font-sans',
})
