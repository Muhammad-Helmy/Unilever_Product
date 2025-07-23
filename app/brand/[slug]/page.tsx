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
    <Header/>
    <main className="min-h-screen bg-white px-6 py-10">
      {/* Brand Logo + Nama */}
      <div className="text-center mb-10">
        <img
          src={brand.image}
          alt={brand.name}
          className="h-16 mx-auto object-contain mb-4"
        />
        <h1 className="text-3xl font-bold text-gray-800">{brand.name}</h1>
      </div>

      {/* Produk Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {brandProducts.map((product, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
          >
            {/* Gambar 1:1 */}
            <div className="w-full aspect-square bg-gray-50 flex items-center justify-center p-4">
              <img
                src={product.image}
                alt={product.name}
                className="object-contain max-h-full max-w-full"
              />
            </div>

            {/* Nama Produk */}
            <div className="p-3">
              <p className="text-sm text-gray-800 text-center font-medium line-clamp-2 h-10">
                {product.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>

    <Footer/>
    </>
  );
}
