import { createFileRoute } from '@tanstack/react-router'
import { SeriesHero } from '@/components/site/SeriesHero'
import { ProductCard } from '@/components/site/ProductCard'
import { oysterSeriesProducts } from '@/lib/catalog/oysterSeriesProducts'

export const Route = createFileRoute('/oyster-black')({
  component: OysterBlack,
})

function OysterBlack() {
  const blackProducts = oysterSeriesProducts.filter(p => p.category === 'oyster-black')

  return (
    <div className="min-h-screen bg-gray-50">
      <SeriesHero
        title="Oyster Series - Matte Black"
        description="Premium bathroom accessories in sophisticated Matte Black finish"
        image="/JOY WATER BATHROOM ACCESSORIES (1)/205.jpg"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {blackProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
