import Head from './head'
import '../styles/globals.css'
import { LanguageProvider } from './context/languageContext'
import NavBar from './components/navbar/NavBar'
// import Script from 'next/script'
import CookiesSoundButton from './components/ui/buttons/cookiesButton'

export default function RootLayout ({ children }) {
  return (
    <html>
      <Head />
      <body className=' text-zinc-100 font-body grid grid-cols-1'>
      <LanguageProvider>
          <section className='max-w-full z-50'>
            <NavBar />
          </section>
          <section className='bg-[#0D0D0D] '>
            {children}
          </section>
          <section className='max-w-full '>
            {/* <Footer /> */}
          </section>
        </LanguageProvider>
      {/* <Script src='/js/scripts.js' /> */}
      <CookiesSoundButton/>

      </body>
    </html>
  )
}
