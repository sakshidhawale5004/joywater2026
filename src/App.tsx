import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { SiteLayout } from '@/components/site/Layout';
import { ScrollToTop } from '@/components/ScrollToTop';

// Lazy load route components
const Index = lazy(() => import('./routes/index'));
const About = lazy(() => import('./routes/about'));
const Products = lazy(() => import('./routes/products'));
const Contact = lazy(() => import('./routes/contact'));
const Cart = lazy(() => import('./routes/cart'));
const Checkout = lazy(() => import('./routes/checkout'));
const Care = lazy(() => import('./routes/care'));
const Warranty = lazy(() => import('./routes/warranty'));
const BathroomAccessories = lazy(() => import('./routes/bathroom-accessories'));

// Category pages
const CategorySlug = lazy(() => import('./routes/category.$slug'));
const ProductSlug = lazy(() => import('./routes/product.$slug'));
const ShowersInFinish = lazy(() => import('./routes/showers-in-finish.$slug'));
const DiversInFinish = lazy(() => import('./routes/diverters-mixers-in-finish.$slug'));

// Series pages
const PyramidSeries = lazy(() => import('./routes/pyramid-series'));
const FortuneSeries = lazy(() => import('./routes/fortune-series'));
const SignatureSeries = lazy(() => import('./routes/signature-series'));
const SolitaireSeries = lazy(() => import('./routes/solitaire-series'));
const UnitySeries = lazy(() => import('./routes/unity-series'));
const SupremeChrome = lazy(() => import('./routes/supreme-chrome'));
const SupremeGold = lazy(() => import('./routes/supreme-gold'));
const SupremeRoseGold = lazy(() => import('./routes/supreme-rose-gold'));
const SwatchChrome = lazy(() => import('./routes/swatch-chrome'));
const SwatchGold = lazy(() => import('./routes/swatch-gold'));
const SwatchRoseGold = lazy(() => import('./routes/swatch-rose-gold'));
const SwatchSeries = lazy(() => import('./routes/swatch-series'));
const SigmaGold = lazy(() => import('./routes/sigma-gold'));
const SigmaRoseGold = lazy(() => import('./routes/sigma-rose-gold'));
const SigmaSeries = lazy(() => import('./routes/sigma-series'));
const OysterChrome = lazy(() => import('./routes/oyster-chrome'));
const OysterRoseGold = lazy(() => import('./routes/oyster-rose-gold'));
const OysterBlack = lazy(() => import('./routes/oyster-black'));
const OysterSeries = lazy(() => import('./routes/oyster-series'));
const OvilioChrome = lazy(() => import('./routes/ovilio-chrome'));
const GraceChrome = lazy(() => import('./routes/grace-chrome'));
const GraceGold = lazy(() => import('./routes/grace-gold'));
const GraceRoseGold = lazy(() => import('./routes/grace-rose-gold'));
const GraceBlack = lazy(() => import('./routes/grace-black'));
const RectusChrome = lazy(() => import('./routes/rectus-chrome'));
const RectusGold = lazy(() => import('./routes/rectus-gold'));
const RectusRoseGold = lazy(() => import('./routes/rectus-rose-gold'));
const RectusBlack = lazy(() => import('./routes/rectus-black'));
const FoldingRack = lazy(() => import('./routes/folding-rack'));
const ToiletBrushHolder = lazy(() => import('./routes/toilet-brush-holder'));
const Shelf = lazy(() => import('./routes/shelf'));
const KhuttiAccessories = lazy(() => import('./routes/khutti-accessories'));
const MakeupMirror = lazy(() => import('./routes/makeup-mirror'));
const Trapper = lazy(() => import('./routes/trapper'));
const FloorAccessories = lazy(() => import('./routes/floor-accessories'));
const AlliedProducts = lazy(() => import('./routes/allied-products'));
const Couplings = lazy(() => import('./routes/couplings'));
const GasketTape = lazy(() => import('./routes/gasket-tape'));
const ShowerArm = lazy(() => import('./routes/shower-arm'));
const AngleValve = lazy(() => import('./routes/angle-valve'));

// Loading component
const Loading = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

// Not Found component
const NotFound = () => (
  <SiteLayout>
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  </SiteLayout>
);

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/care" element={<Care />} />
        <Route path="/warranty" element={<Warranty />} />
        <Route path="/bathroom-accessories" element={<BathroomAccessories />} />
        
        {/* Dynamic routes */}
        <Route path="/category/:slug" element={<CategorySlug />} />
        <Route path="/product/:slug" element={<ProductSlug />} />
        <Route path="/showers-in-finish/:slug" element={<ShowersInFinish />} />
        <Route path="/diverters-mixers-in-finish/:slug" element={<DiversInFinish />} />
        
        {/* Series routes */}
        <Route path="/pyramid-series" element={<PyramidSeries />} />
        <Route path="/fortune-series" element={<FortuneSeries />} />
        <Route path="/signature-series" element={<SignatureSeries />} />
        <Route path="/solitaire-series" element={<SolitaireSeries />} />
        <Route path="/unity-series" element={<UnitySeries />} />
        <Route path="/supreme-chrome" element={<SupremeChrome />} />
        <Route path="/supreme-gold" element={<SupremeGold />} />
        <Route path="/supreme-rose-gold" element={<SupremeRoseGold />} />
        <Route path="/swatch-chrome" element={<SwatchChrome />} />
        <Route path="/swatch-gold" element={<SwatchGold />} />
        <Route path="/swatch-rose-gold" element={<SwatchRoseGold />} />
        <Route path="/swatch-series" element={<SwatchSeries />} />
        <Route path="/sigma-gold" element={<SigmaGold />} />
        <Route path="/sigma-rose-gold" element={<SigmaRoseGold />} />
        <Route path="/sigma-series" element={<SigmaSeries />} />
        <Route path="/oyster-chrome" element={<OysterChrome />} />
        <Route path="/oyster-rose-gold" element={<OysterRoseGold />} />
        <Route path="/oyster-black" element={<OysterBlack />} />
        <Route path="/oyster-series" element={<OysterSeries />} />
        <Route path="/ovilio-chrome" element={<OvilioChrome />} />
        <Route path="/grace-chrome" element={<GraceChrome />} />
        <Route path="/grace-gold" element={<GraceGold />} />
        <Route path="/grace-rose-gold" element={<GraceRoseGold />} />
        <Route path="/grace-black" element={<GraceBlack />} />
        <Route path="/rectus-chrome" element={<RectusChrome />} />
        <Route path="/rectus-gold" element={<RectusGold />} />
        <Route path="/rectus-rose-gold" element={<RectusRoseGold />} />
        <Route path="/rectus-black" element={<RectusBlack />} />
        <Route path="/folding-rack" element={<FoldingRack />} />
        <Route path="/toilet-brush-holder" element={<ToiletBrushHolder />} />
        <Route path="/shelf" element={<Shelf />} />
        <Route path="/khutti-accessories" element={<KhuttiAccessories />} />
        <Route path="/makeup-mirror" element={<MakeupMirror />} />
        <Route path="/trapper" element={<Trapper />} />
        <Route path="/floor-accessories" element={<FloorAccessories />} />
        <Route path="/allied-products" element={<AlliedProducts />} />
        <Route path="/couplings" element={<Couplings />} />
        <Route path="/gasket-tape" element={<GasketTape />} />
        <Route path="/shower-arm" element={<ShowerArm />} />
        <Route path="/angle-valve" element={<AngleValve />} />
        
        {/* 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
    </>
  );
}

export default App;
