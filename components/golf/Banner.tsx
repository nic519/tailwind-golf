export default function Banner() {
    return (
      <div className="relative h-[400px] bg-gradient-to-r from-green-600 to-green-800">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="flex items-center space-x-8">
            <img 
              src="/static/images/golf/golf-logo.png" 
              alt="Golf Logo" 
              className="w-24 h-24 object-contain"
            />
            <h1 className="text-4xl font-bold text-white">高尔夫俱乐部</h1>
          </div>
        </div>
      </div>
    )
  }