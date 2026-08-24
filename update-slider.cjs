const fs = require('fs');

let indexCode = fs.readFileSync('src/routes/index.tsx', 'utf8');

// 1. Update the filter list
indexCode = indexCode.replace(
  /"wall-hung-wc-13"/,
  `"wall-hung-wc-13",
                    "wall-hung-wc-4",
                    "sanitaryware-basins-71",
                    "premium-basin-mixer-5"`
);

// 2. Change the basis
indexCode = indexCode.replace(
  /sm:basis-1\/2 md:basis-1\/3 lg:basis-1\/6/,
  `sm:basis-1/2 lg:basis-1/2`
);

// 3. Add arrows back to Carousel
indexCode = indexCode.replace(
  /(<\/CarouselContent>)\s*(<\/Carousel>)/,
  `$1\n              <CarouselPrevious className="hidden md:flex -left-12" />\n              <CarouselNext className="hidden md:flex -right-12" />\n            $2`
);

fs.writeFileSync('src/routes/index.tsx', indexCode);
console.log("Updated index.tsx");
