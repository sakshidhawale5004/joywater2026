import { createFileRoute } from '@tanstack/react-router'
import { SeriesHero } from '@/components/site/SeriesHero'
import { ProductCard } from '@/components/site/ProductCard'
import { shelfSeriesProducts } from '@/lib/catalog/shelfSeriesProducts'

export const Route = createFileRoute('/shelf')({
  component: ShelfSeries,
})

function ShelfSeries() {
  return (
    <div className="min-h-screen">
      <SeriesHero
        title="Glass Shelves Collection"
        description="Premium glass shelves in multiple sizes and finishes - chrome, gold, rose gold, and matte black"
        imageUrl="/JOY WATER BATHROOM ACCESSORIES (1)/324.jpg"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {shelfSeriesProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
