import { createFileRoute } from '@tanstack/react-router'
import { SeriesHero } from '@/components/site/SeriesHero'
import { ProductCard } from '@/components/site/ProductCard'
import { toiletBrushHolderProducts } from '@/lib/catalog/toiletBrushHolderProducts'

export const Route = createFileRoute('/toilet-brush-holder')({
  component: ToiletBrushHolderSeries,
})

function ToiletBrushHolderSeries() {
  return (
    <div className="min-h-screen">
      <SeriesHero
        title="Toilet Brush Holder"
        description="Elegant toilet brush holders in square and round designs - premium stainless steel construction"
        imageUrl="/JOY WATER BATHROOM ACCESSORIES (1)/320.jpg"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {toiletBrushHolderProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
