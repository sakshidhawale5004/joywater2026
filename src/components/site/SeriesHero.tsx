interface SeriesHeroProps {
  seriesName: string;
  subtitle: string;
  description: string;
  tagline: string;
  productCount: number;
  features: string[];
  imageUrl: string;
  accentColor?: string;
}

export function SeriesHero({
  seriesName,
  subtitle,
  description,
  tagline,
  productCount,
  features,
  imageUrl,
  accentColor = "gold"
}: SeriesHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={imageUrl} 
          alt={seriesName} 
          className="w-full h-full object-cover opacity-15 mix-blend-overlay" 
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative max-w-7xl mx-auto px-8 z-10">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6 font-semibold animate-fade-in">
            Premium Collection
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight animate-fade-in-up">
            {seriesName}
          </h1>
          <div className="w-24 h-1 bg-gold mb-8 animate-slide-in" />
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6 leading-relaxed animate-fade-in-up delay-200">
            <span className="font-semibold text-gold">{productCount}</span> {description}
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-12 leading-relaxed animate-fade-in-up delay-300">
            {tagline}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-primary-foreground/20 animate-fade-in-up delay-400">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col group hover:transform hover:translate-y-[-4px] transition-transform duration-300">
                <span className="text-gold text-3xl font-serif mb-2 group-hover:scale-110 transition-transform duration-300">✓</span>
                <span className="text-sm uppercase tracking-wider text-primary-foreground/80 group-hover:text-primary-foreground transition-colors duration-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>
          
          {subtitle && (
            <div className="mt-10 inline-block">
              <span className="text-sm uppercase tracking-[0.2em] text-gold/80 bg-gold/10 px-6 py-3 rounded-full border border-gold/20">
                {subtitle}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
