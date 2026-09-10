import { createFileRoute } from '@tanstack/react-router'
import { SeriesHero } from '@/components/site/SeriesHero'
import { ProductCard } from '@/components/site/ProductCard'
import { khuttiAccessoriesProducts } from '@/lib/catalog/khuttiAccessoriesProducts'

export const Route = createFileRoute('/khutti-accessories')({
  component: KhuttiAccessoriesSeries,
})

function KhuttiAccessoriesSeries() {
  return (
    <div className="min-h-screen">
      <SeriesHero
        title="Khutti Accessories"
        description="Traditional brass khutti hooks and wall-mounted accessories - premium brass construction"
        imageUrl="/JOY WATER BATHROOM ACCESSORIES (1)/333.png"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {khuttiAccessoriesProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
