'use client'
import { useContext } from 'react'
import { LanguageContext } from './languageContext'

export default function useLanguageContext () {
  const langContext = useContext(LanguageContext)
  if (!langContext) {
    throw new Error('Language context should be used whitim LanguageProvider')
  }
  return langContext
}
