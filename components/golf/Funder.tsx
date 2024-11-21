export default function Founder() {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
            <img 
              src="/static/images/golf/founder.png" 
              alt="创始人照片" 
              className="w-48 h-48 rounded-full object-cover"
            />
            <div>
              <h2 className="text-3xl font-bold mb-4">Paul Soffe</h2>
              <p className="text-gray-600 leading-relaxed">
              Why just play when you can indulge?
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }