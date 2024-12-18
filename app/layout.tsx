import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header';
import { ThemeProvider } from '@/providers/theme-provider';
import Footer from '@/components/footer';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Thomas | Portfolio ',
  description: 'Travier Thomas, étudiant Ingénieur biomédical curieux et passionné',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Couleur du background du site et couleurs permettant de styliser le background
    <html className="!scroll-smooth" lang="en">
      <body className={`${inter.className} bg-sky-100 text-gray-950 relative h-full pt-28
       sm:pt-36  `}>
        
        <div className="bg-blue-400 absolute top-[-12rem] right-[11rem] h-[31.25rem] 
        w-[31.25rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        {/* <div className="bg-gray-400  absolute top-[-1rem] left-[-35rem] h-[31.25rem] 
        w-[50rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left[-28rem]
        xl:left-[-15rem] 2xl:left-[-5rem]"></div> */}

        {/* <div className="bg-gray-400 absolute  right-[11rem] h-[10rem] 
        w-[31.25rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem]"></div> */}
        <div className="bg-blue-400  absolute bottom-[-0.5rem] left-[-35rem] h-[10rem] 
        w-[50rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left[-28rem]
        xl:left-[-15rem] 2xl:left-[8rem]"></div>
        {/* <LanguageSelector/> */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Header/>
        {children}
        <Footer/>
        
        <Toaster position="top-right"/>
        <SpeedInsights/>
        </ThemeProvider>
        
        {/* {children} */}
      </body>
    </html>
  )
}
