import type { Metadata } from 'next'
import { Inter} from 'next/font/google'
import './globals.css'

const font = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '900']
})

export const metadata: Metadata = {
  title: 'Quiosco de comida',
  description: 'Quiosco de comida'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
return (
    <html lang='es'>
      <body
        className={`${font.className} antialiased bg-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
