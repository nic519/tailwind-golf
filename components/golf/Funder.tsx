export default function Founder() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-16">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur opacity-30"></div>
            <img 
              src="/static/images/golf/founder.png" 
              alt="创始人照片" 
              className="relative w-56 h-56 rounded-full object-cover shadow-lg ring-4 ring-white"
            />
          </div>
          
          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Paul Soffe
            </h2>
            <blockquote className="relative">
              <span className="absolute top-0 left-0 text-6xl text-green-400 opacity-20">"</span>
              <p className="text-gray-700 text-xl italic leading-relaxed pl-8 pr-8">
                Why just play when you can indulge?
              </p>
              <span className="absolute bottom-0 right-0 text-6xl text-green-400 opacity-20">"</span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}