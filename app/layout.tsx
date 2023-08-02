import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eldon W',
  description: 'Eldon Williams\'s personal website',
  authors: {name: 'Eldon Williams', url: 'https://eldon.zone/'},
  robots: "index, follow",
  themeColor: "#000000",
	formatDetection: {
		telephone: false,
	},
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
