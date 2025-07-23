import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { brands } from "@/data/brands";

interface Params {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: Params) {
  const category = categories.find((cat) => cat.slug === params.slug);

  if (!category) {
    return notFound();
  }

  const brandList = brands.filter((brand) => brand.category === params.slug);

  return (
  <main className="min-h-screen bg-white px-6 py-10">
    {/* Judul & Deskripsi */}
    <div className="text-center max-w-screen-md mx-auto mb-8">
    <h1 className="text-3xl font-bold text-gray-800 mb-2">{category.name}</h1>
    <p className="text-gray-600">{category.description}</p>
  </div>

    {/* Grid Logo Brand 1:1 */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {brandList.map((brand) => (
        <a
          key={brand.slug}
          href={`/brand/${brand.slug}`}
          className="aspect-square bg-white rounded-2xl overflow-hidden shadow flex items-center justify-center p-4 hover:shadow-lg transition-all"
        >
          <img
            src={brand.image}
            alt={brand.name}
            className="max-h-full max-w-full object-contain"
          />
        </a>
      ))}
    </div>
  </main>
);

}
