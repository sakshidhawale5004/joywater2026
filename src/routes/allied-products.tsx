import { createFileRoute } from '@tanstack/react-router'
import { SeriesHero } from '@/components/site/SeriesHero'
import { ProductCard } from '@/components/site/ProductCard'
import { alliedProductsProducts } from '@/lib/catalog/alliedProductsProducts'

export const Route = createFileRoute('/allied-products')({
  component: AlliedProductsSeries,
})

function AlliedProductsSeries() {
  return (
    <div className="min-h-screen">
      <SeriesHero
        title="Allied Products"
        description="Essential bathroom fittings and accessories - fasteners, valves, adapters, and plumbing essentials"
        imageUrl="/JOY WATER BATHROOM ACCESSORIES (1)/401.jpg"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {alliedProductsProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
