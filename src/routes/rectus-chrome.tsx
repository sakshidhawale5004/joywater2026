import { createFileRoute } from '@tanstack/react-router'
import { SeriesHero } from '@/components/site/SeriesHero'
import { ProductCard } from '@/components/site/ProductCard'
import { rectusSeriesProducts } from '@/lib/catalog/rectusSeriesProducts'

export const Route = createFileRoute('/rectus-chrome')({
  component: RectusSeries,
})

function RectusSeries() {
  return (
    <div className="min-h-screen">
      <SeriesHero
        title="Rectus Chrome Series"
        description="Contemporary bathroom accessories in chrome finish - durable stainless steel construction"
        imageUrl="/JOY WATER BATHROOM ACCESSORIES (1)/265.png"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {rectusSeriesProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
