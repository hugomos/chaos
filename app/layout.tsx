import { SidebarMenu } from '@/src/components/SidebarMenu'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-inter' })

export const metadata = {
  title: 'Chaos.finance - Welcome to Chaos',
  description: 'Chaos is a comprehensive financial management application that helps you keep track of your income, expenses, and investments in one place. With Chaos, you can easily create and manage budgets, track your spending, and monitor your investments to achieve your financial goals.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} text-zinc-50 bg-zinc-950 antialiased`}>
        <div className="h-screen">
          <div className="flex h-full">
            <SidebarMenu />
            <main className="flex-1">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
