import { createFileRoute } from '@tanstack/react-router'
import { SeriesHero } from '@/components/site/SeriesHero'
import { ProductCard } from '@/components/site/ProductCard'
import { foldingRackSeriesProducts } from '@/lib/catalog/foldingRackSeriesProducts'

export const Route = createFileRoute('/folding-rack')({
  component: FoldingRackSeries,
})

function FoldingRackSeries() {
  return (
    <div className="min-h-screen">
      <SeriesHero
        title="Folding Rack & Handicap Bars"
        description="Functional towel racks, grab bars and accessibility accessories - premium stainless steel construction"
        imageUrl="/JOY WATER BATHROOM ACCESSORIES (1)/316.jpg"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {foldingRackSeriesProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
