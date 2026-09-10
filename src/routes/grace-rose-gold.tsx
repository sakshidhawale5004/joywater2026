import { createFileRoute } from '@tanstack/react-router'
import { SeriesHero } from '@/components/site/SeriesHero'
import { ProductCard } from '@/components/site/ProductCard'
import { graceRoseGoldSeriesProducts } from '@/lib/catalog/graceRoseGoldSeriesProducts'

export const Route = createFileRoute('/grace-rose-gold')({
  component: GraceRoseGoldSeries,
})

function GraceRoseGoldSeries() {
  return (
    <div className="min-h-screen">
      <SeriesHero
        title="Grace Rose Gold Series"
        description="Stylish bathroom accessories in PVD rose gold finish - elegant stainless steel design"
        imageUrl="/JOY WATER BATHROOM ACCESSORIES (1)/246.jpg"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {graceRoseGoldSeriesProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
