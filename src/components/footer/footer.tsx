import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer:React.FC = () => {
  const{t}=useTranslation()

  return (
    <footer className="border-t mt-12 bg-[#d7d9e080]">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
            <p className="text-[#555868]">{t('homepage.footer')}</p>
        </div>
    </footer>
  )
}

export default Footer