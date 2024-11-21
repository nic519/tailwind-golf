import productsData from '@/data/golf/data.json'

export default function Products() {
  const { products } = productsData;
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our range of fine cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-md shadow-sm overflow-hidden 
                transform transition duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-128 object-cover transition duration-300 hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 