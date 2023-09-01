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
          <header className="h-20 max-w-full z-50 fixed top-0 left-0 w-full bg-zinc-950/40 backdrop-blur-lg bg-clip-padding backdrop-filter rounded-lg shadow-l ">
            <NavBar />
          </header>
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
