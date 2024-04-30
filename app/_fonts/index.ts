import localFont from 'next/font/local'

export const fontMono = localFont({
  src: './JetbrainsMono-Regular.woff2',
  variable: '--font-mono',
})

export const fontSans = localFont({
  src: [
    {
      path: './InterVariable.woff2',
      style: 'normal',
    },
    {
      path: './InterVariable-Italic.woff2',
      style: 'italic',
    },
  ],
  variable: '--font-sans',
})
