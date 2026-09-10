import { createFileRoute } from '@tanstack/react-router'
import { SeriesHero } from '@/components/site/SeriesHero'
import { ProductCard } from '@/components/site/ProductCard'
import { graceGoldSeriesProducts } from '@/lib/catalog/graceGoldSeriesProducts'

export const Route = createFileRoute('/grace-gold')({
  component: GraceGoldSeries,
})

function GraceGoldSeries() {
  return (
    <div className="min-h-screen">
      <SeriesHero
        title="Grace Gold Series"
        description="Luxury bathroom accessories with PVD gold finish - premium quality stainless steel construction"
        imageUrl="/JOY WATER BATHROOM ACCESSORIES (1)/236.jpg"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {graceGoldSeriesProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
