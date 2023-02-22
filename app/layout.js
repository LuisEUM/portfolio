import Head from './head'
import '../styles/globals.css'
import { LanguageProvider } from './context/languageContext'
import NavBar from './components/navbar/NavBar'

export default function RootLayout ({ children }) {
  return (
    <html>
      <Head />
      <body className=' text-white font-body grid grid-cols-1'
        style={{
          transitionDuration: '600ms',
          transitionProperty: 'all',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
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
      </body>
    </html>
  )
}
