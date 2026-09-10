import { createFileRoute } from '@tanstack/react-router'
import { SeriesHero } from '@/components/site/SeriesHero'
import { ProductCard } from '@/components/site/ProductCard'
import { gasketTapeProducts } from '@/lib/catalog/gasketTapeProducts'

export const Route = createFileRoute('/gasket-tape')({
  component: GasketTapeSeries,
})

function GasketTapeSeries() {
  return (
    <div className="min-h-screen">
      <SeriesHero
        title="Gasket & Tape Collection"
        description="WC gaskets and teflon tape for plumbing connections - essential bathroom installation products"
        imageUrl="/JOY WATER BATHROOM ACCESSORIES (1)/423.jpg"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {gasketTapeProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
