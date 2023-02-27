'use client'
import { useContext } from 'react'
import { LanguageContext } from '../context/languageContext'

export default function Portfolio () {
  const { text } = useContext(LanguageContext)

  return (
    <>
      <section>
        <h1></h1>
      </section>
    </>
  )
}
