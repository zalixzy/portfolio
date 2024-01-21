import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header';
import LanguageSelector from '@/components/langageselector';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Thomas | Portfolio ',
  description: 'Travier Thomas est un étudiant aspirant à devenir chef de projet en informatique',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Couleur du background du site et couleurs permettant de styliser le background
    <html className="!scroll-smooth" lang="en">
      <body className={`${inter.className} bg-sky-100 text-gray-950 relative h-[5000px] pt-28
       sm:pt-36 `}>
        {children}
        <div className="bg-blue-400 absolute top-[-6rem] right-[11rem] h-[31.25rem] 
        w-[31.25rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-gray-400  absolute top-[-1rem] left-[-35rem] h-[31.25rem] 
        w-[50rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left[-28rem]
        xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <div className="bg-gray-400 absolute bottom-[-6rem] right-[11rem] h-[10rem] 
        w-[31.25rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-blue-400  absolute bottom-[-1rem] left-[-35rem] h-[10rem] 
        w-[50rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left[-28rem]
        xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <LanguageSelector/>
        <Header/>
        <Footer/>
        {/* {children} */}
      </body>
    </html>
  )
}
