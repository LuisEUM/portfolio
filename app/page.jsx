'use client'
import { useContext } from 'react'
import { LanguageContext } from './context/languageContext'

export default function Home () {
  const { text } = useContext(LanguageContext)

  return (
    <>
      <div>
        <h1>Esto es un h1</h1>
        <h2>Esto es un h2</h2>
        <h3>Esto es un h3</h3>
      </div>
    </>
  )
}
