import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
<<<<<<< HEAD
=======
import { ModalProvider } from '@/providers/modal-provider'
>>>>>>> fbab57d (store modal created)

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
<<<<<<< HEAD
      <body className={inter.className}>{children}</body>
=======
      <body className={inter.className}>
        <ModalProvider />
        {children}
      </body>
>>>>>>> fbab57d (store modal created)
    </html>
    </ClerkProvider>
  )
}
