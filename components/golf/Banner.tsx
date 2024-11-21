'use client'

export default function Banner() {
  return (
    <div className="h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: 'url("/static/images/golf/banner1.jpg")' }}>
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Banner Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="px-8 md:px-16 lg:px-24 w-full">
          <div className="max-w-4xl">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
          For the love of 
            </h3>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
              Golf
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl">
              Experience the perfect blend of tradition and innovation in every swing
            </p>
         
          </div>
        </div>
      </div>
    </div>
  )
}