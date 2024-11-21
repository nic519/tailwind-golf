'use client'

import Banner from 'components/golf/Banner'
import Products from 'components/golf/Products'
import Founder from 'components/golf/Funder'
import About from 'components/golf/About'
import ContactForm from 'components/golf/ContactForm'
import Navbar from 'components/golf/Navbar'

export default function GolfMain() {
  return (
    <main className="min-h-screen font-sans">
      <Navbar />
      <Banner />

      {/* 产品展示区域 */}
      <section id="products" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-6xl font-light">
          <Products />
        </div>
      </section>

      {/* 创始人介绍 - 全宽度设计 */}
      <section id="founder" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl font-normal">
          <Founder />
        </div>
      </section>

      {/* 关于我们 - 较窄的内容区域 */}
      <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl font-light tracking-wide">
          <About />
        </div>
      </section>

      {/* 联系表单 - 居中紧凑设计 */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl font-normal">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
