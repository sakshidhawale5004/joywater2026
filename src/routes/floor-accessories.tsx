import { createFileRoute } from '@tanstack/react-router'
import { SeriesHero } from '@/components/site/SeriesHero'
import { ProductCard } from '@/components/site/ProductCard'
import { floorAccessoriesProducts } from '@/lib/catalog/floorAccessoriesProducts'

export const Route = createFileRoute('/floor-accessories')({
  component: FloorAccessoriesSeries,
})

function FloorAccessoriesSeries() {
  return (
    <div className="min-h-screen">
      <SeriesHero
        title="Floor Accessories"
        description="Premium floor-mounted bathroom accessories - liquid dispensers, tumbler holders, and soap holders"
        imageUrl="/JOY WATER BATHROOM ACCESSORIES (1)/342.jpg"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {floorAccessoriesProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
