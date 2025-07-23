import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {
  const categories = [
    {
      name: "Personal Care",
      slug: "personal-care",
      image: "/image/personalcare.png",
    },
    {
      name: "Home Care",
      slug: "home-care",
      image: "/image/homecare.png",
    },
    {
      name: "Foods",
      slug: "foods",
      image: "/image/foods.png",
    },
    {
      name: "Ice Cream",
      slug: "ice-cream",
      image: "/image/icecream.png",
    },
    {
      name: "Beverages",
      slug: "beverages",
      image: "/image/beverages.png",
    },
    {
      name: "Oral & Health Care",
      slug: "oral-health-care",
      image: "/image/oral.png",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((cat) => (
            <a
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all group"
            >
              <div className="w-full h-48 bg-gray-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-lg font-semibold text-gray-800 group-hover:text-blue-800">
                  {cat.name} &rarr;
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
