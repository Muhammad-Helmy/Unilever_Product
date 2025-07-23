export default function Footer() {
  return (
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
  );
}
