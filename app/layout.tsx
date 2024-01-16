import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Thomas | Personal Portfolio',
  description: 'Travier Thomas est un étudiant aspirant à devenir chef de projet en informatique',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Couleur du background du site et couleurs permettant de styliser le background
    <html lang="en">
      <body className={`${inter.className} bg-gray-800 text-gray-950 relative`}>{children}
        <div className="bg-[#164e63] absolute top-[-6rem] right-[11rem] h-[31.25rem] 
        w-[31.25rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#0c4a6e] absolute top-[-1rem] left-[-35rem] h-[31.25rem] 
        w-[50rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left[-28rem]
        xl:left-[-15rem] 2xl:left-[-5rem]"></div>
      </body>
    </html>
  )
}
