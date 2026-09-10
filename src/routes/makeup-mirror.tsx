import { createFileRoute } from '@tanstack/react-router'
import { SeriesHero } from '@/components/site/SeriesHero'
import { ProductCard } from '@/components/site/ProductCard'
import { makeupMirrorProducts } from '@/lib/catalog/makeupMirrorProducts'

export const Route = createFileRoute('/makeup-mirror')({
  component: MakeupMirrorSeries,
})

function MakeupMirrorSeries() {
  return (
    <div className="min-h-screen">
      <SeriesHero
        title="Makeup & Shaving Mirrors"
        description="3x zoom magnification mirrors in multiple finishes - chrome, gold, black, and rose gold"
        imageUrl="/JOY WATER BATHROOM ACCESSORIES (1)/341.jpg"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {makeupMirrorProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
