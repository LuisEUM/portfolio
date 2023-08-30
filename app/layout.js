import Head from './head'
import '../styles/globals.css'
import { LanguageProvider } from './context/languageContext'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'

import CookiesButton from './components/ui/buttons/cookiesButton'
import TailwindGrid from './components/grid/TailwindGrid'

export default function RootLayout ({ children }) {
  return (
    <html>
      <Head />
      <body className=" text-zinc-100 font-body grid grid-cols-1">
        <LanguageProvider>
          <section className="max-w-full z-50">
            <NavBar />
          </section>
          <section className="max-w-full min-w-[360px] w-full flex flex-col items-center justify-center  overflow-x-hidden ">
            <TailwindGrid fullSize>
              {/* <div className="bg-red-500 col-span-1 col-start-1 col-end-2 h-screen absolute  w-full top-0 z-30"></div> */}
              <div className=" col-span-1 col-start-1 col-end-2 h-screen fixed  w-1/12 pr-4 lg:pr-6 top-0 z-30 border-r box-border border-zinc-500 bg-zinc-950/40 backdrop-blur-lg bg-clip-padding backdrop-filter opacity-75">
                <div className=" w-full h-full z-30"> </div>
              </div>
            </TailwindGrid>
            <div className=" mt-20 md:mt-24 lg:mt-20 md:pt-8"> {children}</div>
          </section>

          <footer className="max-w-full ">
            <Footer />
          </footer>
          <CookiesButton />
        </LanguageProvider>
      </body>
    </html>
  )
}
