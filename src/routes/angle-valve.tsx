import { createFileRoute } from '@tanstack/react-router'
import { SeriesHero } from '@/components/site/SeriesHero'
import { ProductCard } from '@/components/site/ProductCard'
import { angleValveProducts } from '@/lib/catalog/angleValveProducts'

export const Route = createFileRoute('/angle-valve')({
  component: AngleValveSeries,
})

function AngleValveSeries() {
  return (
    <div className="min-h-screen">
      <SeriesHero
        title="Angle Valve Collection"
        description="Premium brass angle valves in multiple designs - chrome finish with superior quality"
        imageUrl="/JOY WATER BATHROOM ACCESSORIES (1)/394.jpg"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {angleValveProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
