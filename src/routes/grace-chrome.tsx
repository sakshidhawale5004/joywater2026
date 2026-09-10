import { createFileRoute } from '@tanstack/react-router'
import { SeriesHero } from '@/components/site/SeriesHero'
import { ProductCard } from '@/components/site/ProductCard'
import { graceChromeSeriesProducts } from '@/lib/catalog/graceChromeSeriesProducts'

export const Route = createFileRoute('/grace-chrome')({
  component: GraceChrome,
})

function GraceChrome() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SeriesHero
        title="Grace Chrome Series"
        description="Premium bathroom accessories in SS Chrome finish with high-quality stainless steel construction"
        image="/JOY WATER BATHROOM ACCESSORIES (1)/226.jpg"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {graceChromeSeriesProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
