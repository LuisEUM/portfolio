import Script from 'next/script'

export default function Head ({ params }) {
  return (
    <>
      <title>Luis Urdaneta - Portfolio</title>
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <link rel='icon' href='/favicon.ico' />
      <Script src='/js/lottie.js'/>
    </>
  )
}
