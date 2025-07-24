import { notFound } from "next/navigation";
import { brands } from "@/data/brands";
import { products } from "@/data/product";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = {
  params: {
    slug: string;
  };
};

export default function BrandPage({ params }: Props) {
  const brand = brands.find((b) => b.slug === params.slug);
  if (!brand) return notFound();

  const brandProducts = products.filter((p) => p.brand === params.slug);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white px-4 py-8 sm:px-6 sm:py-10">
        {/* Brand Header */}
        <div className="text-center mb-10">
          <img
            src={brand.image}
            alt={brand.name}
            className="h-16 mx-auto object-contain mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-800">{brand.name}</h1>
        </div>

        {/* Produk List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {brandProducts.map((product, idx) => (
            <div
              key={idx}
              className="bg-white border-0 md:border-0 md:rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              {/* MOBILE: Flex Row */}
              <div className=" sm:hidden flex items-center gap-4 p-3">
                <div className="w-32 h-32 flex-shrink-0 bg-gray-50 flex items-center justify-center p-2 rounded">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain max-h-full max-w-full"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-gray-400 uppercase mb-1">
                    {product.category}
                  </p>
                  <p className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2">
                    {product.name}
                  </p>
                </div>
              </div>

              {/* DESKTOP / TABLET: Grid style */}
              <div className="hidden sm:block">
                {/* Gambar */}
                <div className="w-full aspect-square bg-gray-50 flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain max-h-full max-w-full"
                  />
                </div>
                {/* Info */}
                <div className="px-3 pt-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {product.category}
                </div>
                <div className="px-3 pb-5 pt-1">
                  <p className="text-sm font-semibold text-gray-800 text-start leading-snug line-clamp-2 h-10">
                    {product.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
