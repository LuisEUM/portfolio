import Head from './head'
import '../styles/globals.css'
import { LanguageProvider } from './context/languageContext'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'

import CookiesButton from './components/ui/buttons/cookiesButton'

export default function RootLayout ({ children }) {
  return (
    <html>
      <Head />
      <body className=' text-zinc-100 font-body grid grid-cols-1'>
      <LanguageProvider>
          <section className='max-w-full z-50'>
            <NavBar />
          </section>
          <section className='max-w-full mt-20 pt-8 w-[100vw] flex flex-col items-center justify-center relative'>
            {children}
          </section>
          <footer className='max-w-full '>
            <Footer />
          </footer>
          <CookiesButton/>
        </LanguageProvider>
      </body>
    </html>
  )
}
