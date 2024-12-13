import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI 恋爱契合度预测',
  description: '使用 AI 预测两个人的恋爱契合度',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}