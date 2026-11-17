import ProductCard from './ProductCard'

export default function ProductGrid({ products = [], onEnquire, emptyMessage = 'No products found.' }) {
  if (!products || products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-[#DDE7D8] bg-[#EDE8DA]/20 p-12 text-center">
        <p className="text-base font-medium text-[#555B50]">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id || product.slug} product={product} onEnquire={onEnquire} />
      ))}
    </div>
  )
}
