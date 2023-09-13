import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '써니 프레쉬',
  description: 'nextjs를 이용한 써니 프레쉬',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ekon">
      <body className={inter.className}>
            <div className="navBar">
                <Link href="/">홈</Link> {/* 새로고침없이 링크 이동하기 */}
                <Link href="/list">List</Link>
            </div>
            {children}
        </body>
    </html>
  )
}
