import { Inter } from 'next/font/google'
import '../globals.css'
import Sidebar from '../ui/dashboard/sidebar/sidebar'
import Navbar from '../ui/dashboard/navbar/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lama Dev Next.js Admin Dashboard',
  description: 'Next.js Tutorial',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">      
      <body className={inter.className}>
        <div>
          <div>
            <Sidebar />
          </div>
          <div>
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
