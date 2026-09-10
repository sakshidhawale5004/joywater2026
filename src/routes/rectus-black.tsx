import { createFileRoute } from '@tanstack/react-router'
import { SeriesHero } from '@/components/site/SeriesHero'
import { ProductCard } from '@/components/site/ProductCard'
import { rectusBlackSeriesProducts } from '@/lib/catalog/rectusBlackSeriesProducts'

export const Route = createFileRoute('/rectus-black')({
  component: RectusBlackSeries,
})

function RectusBlackSeries() {
  return (
    <div className="min-h-screen">
      <SeriesHero
        title="Rectus Black Series"
        description="Contemporary bathroom accessories with PVD black finish - premium quality stainless steel construction"
        imageUrl="/JOY WATER BATHROOM ACCESSORIES (1)/299.jpg"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {rectusBlackSeriesProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
