import { createFileRoute } from '@tanstack/react-router'
import { SeriesHero } from '@/components/site/SeriesHero'
import { ProductCard } from '@/components/site/ProductCard'
import { oysterSeriesProducts } from '@/lib/catalog/oysterSeriesProducts'

export const Route = createFileRoute('/oyster-chrome')({
  component: OysterChrome,
})

function OysterChrome() {
  const chromeProducts = oysterSeriesProducts.filter(p => p.category === 'oyster-chrome')

  return (
    <div className="min-h-screen bg-gray-50">
      <SeriesHero
        title="Oyster Series - Chrome"
        description="Premium bathroom accessories in elegant Chrome finish"
        image="/JOY WATER BATHROOM ACCESSORIES (1)/184.jpg"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {chromeProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
