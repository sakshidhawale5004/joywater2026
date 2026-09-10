import { createFileRoute } from '@tanstack/react-router'
import { SeriesHero } from '@/components/site/SeriesHero'
import { ProductCard } from '@/components/site/ProductCard'
import { trapperSeriesProducts } from '@/lib/catalog/trapperSeriesProducts'

export const Route = createFileRoute('/trapper')({
  component: TrapperSeries,
})

function TrapperSeries() {
  return (
    <div className="min-h-screen">
      <SeriesHero
        title="Trapper & Drain Collection"
        description="Premium SS 304 floor drains, gratings, and nahani traps - durable stainless steel construction"
        imageUrl="/trappers/trapper-1.jpg"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {trapperSeriesProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
