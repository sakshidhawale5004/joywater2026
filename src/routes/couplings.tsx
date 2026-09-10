import { createFileRoute } from '@tanstack/react-router'
import { SeriesHero } from '@/components/site/SeriesHero'
import { ProductCard } from '@/components/site/ProductCard'
import { couplingsProducts } from '@/lib/catalog/couplingsProducts'

export const Route = createFileRoute('/couplings')({
  component: CouplingsSeries,
})

function CouplingsSeries() {
  return (
    <div className="min-h-screen">
      <SeriesHero
        title="Couplings Collection"
        description="Waste couplings for basins and urinals - full brass construction with chrome finish"
        imageUrl="/JOY WATER BATHROOM ACCESSORIES (1)/419.jpg"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {couplingsProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
