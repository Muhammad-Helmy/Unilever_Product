export default function HomePage() {
  const categories = [
    {
      name: "Personal Care",
      slug: "personal-care",
      image: "/image/dove_category.png",
    },
    {
      name: "Home Care",
      slug: "home-care",
      image: "/image/rinso_category.png",
    },
    {
      name: "Foods",
      slug: "foods",
      image: "/image/royco_category.png",
    },
    {
      name: "Ice Cream",
      slug: "ice-cream",
      image: "/image/walls_category.png",
    },
    {
      name: "Beverages",
      slug: "beverages",
      image: "/image/sariwangi_category.png",
    },
    {
      name: "Oral & Health Care",
      slug: "oral-health-care",
      image: "/image/pepsodent_category.png",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex items-center gap-2.5 px-6 py-4 border-b border-gray-200">
        <img src="/image/Unilever_logo2.png" alt="U Logo" className="h-8 w-8 object-contain" />
        <img src="/image/Unilever_logo1.png" alt="Unilever Text" className="h-6 object-contain" />
        <span className="bg-blue-900 text-white font-semibold text-3xl rounded px-3 py-1 drop-shadow-[0_3px_0_#1e3a8a]">
          Brand
        </span>
      </nav>

      {/* Content */}
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

      <footer className="bg-gray-100 border-t border-gray-200 mt-10">
  <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
    <div className="text-center sm:text-left">
      <p>&copy; {new Date().getFullYear()} Unilever Brand Showcase. All rights reserved.</p>
    </div>
    <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4">
      <a href="#" className="hover:text-blue-800 transition">Privacy Policy</a>
      <a href="#" className="hover:text-blue-800 transition">Terms of Service</a>
      <a href="#" className="hover:text-blue-800 transition">Contact</a>
    </div>
  </div>
</footer>

    </main>
  );
}
