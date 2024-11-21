'use client'

import Banner from 'components/golf/Banner'
import Products from 'components/golf/Products'
import Founder from 'components/golf/Funder'
import About from 'components/golf/About'
import ContactForm from 'components/golf/ContactForm'

export default function GolfMain() {
  return (
    <div className="min-h-screen bg-white">
      <Banner />
      <Products />
      <Founder />
      <About />
      <ContactForm />
    </div>
  )
}
