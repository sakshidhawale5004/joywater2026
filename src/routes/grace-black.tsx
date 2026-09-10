import { createFileRoute } from '@tanstack/react-router'
import { SeriesHero } from '@/components/site/SeriesHero'
import { ProductCard } from '@/components/site/ProductCard'
import { graceBlackSeriesProducts } from '@/lib/catalog/graceBlackSeriesProducts'

export const Route = createFileRoute('/grace-black')({
  component: GraceBlackSeries,
})

function GraceBlackSeries() {
  return (
    <div className="min-h-screen">
      <SeriesHero
        title="Grace Black Series"
        description="Modern bathroom accessories with PVD black finish - sophisticated stainless steel craftsmanship"
        imageUrl="/JOY WATER BATHROOM ACCESSORIES (1)/256.jpg"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {graceBlackSeriesProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
