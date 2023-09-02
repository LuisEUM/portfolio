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
      <body className=" text-zinc-100 font-body grid grid-cols-1">
        <LanguageProvider>
          <NavBar />
          <section className="max-w-full min-w-[360px] w-full flex flex-col items-center justify-center  overflow-x-hidden ">
            {children}
          </section>

          <footer className="max-w-full bg-[rgb(19,19,21)]">
            <Footer />
          </footer>
          <CookiesButton />
        </LanguageProvider>
      </body>
    </html>
  )
}
