import { createFileRoute } from '@tanstack/react-router'
import { SeriesHero } from '@/components/site/SeriesHero'
import { ProductCard } from '@/components/site/ProductCard'
import { ovilioSeriesProducts } from '@/lib/catalog/ovilioSeriesProducts'

export const Route = createFileRoute('/ovilio-chrome')({
  component: OvilioChrome,
})

function OvilioChrome() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SeriesHero
        title="Ovilio Series - Chrome"
        description="Premium bathroom accessories in elegant Chrome finish with brass construction"
        image="/JOY WATER BATHROOM ACCESSORIES (1)/215.jpg"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ovilioSeriesProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
