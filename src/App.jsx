import {
  Search,
  User,
  ShoppingBag,
  Instagram,
  Mail,
} from "lucide-react";

export default function App() {
  const products = [
    {
      name: "Monster Energy Moped Sticker Set — Red & Black",
      price: "€200,00",
      image:
        "https://i.imgur.com/8V9mK3x.jpeg",
      buy:
        "https://buy.stripe.com/test_00g000000000000000",
    },
    {
      name: "Monster Energy Moped Sticker Set — Pink & Purple",
      price: "€200,00",
      image:
        "https://i.imgur.com/5D8fVhK.jpeg",
      buy:
        "https://buy.stripe.com/test_00g000000000000000",
    },
    {
      name: "Monster Energy Moped Sticker Set — Green & Black",
      price: "€200,00",
      image:
        "https://i.imgur.com/G6sYx9l.jpeg",
      buy:
        "https://buy.stripe.com/test_00g000000000000000",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* TOP BAR */}
      <div className="text-center text-sm py-3 border-b border-zinc-800">
        Welcome to our store
      </div>

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-zinc-900">
        <h1 className="text-4xl font-black bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
          NORTHWRAP
        </h1>

        <div className="flex gap-8 text-zinc-300 font-semibold">
          <a href="#" className="hover:text-white transition">
            Home
          </a>

          <a href="#products" className="hover:text-white transition">
            Catalog
          </a>
        </div>

        <div className="flex gap-5 text-zinc-300">
          <Search className="cursor-pointer hover:text-white" />
          <User className="cursor-pointer hover:text-white" />

          <a href="#products">
            <ShoppingBag className="cursor-pointer hover:text-white" />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at top left, #7c3aed 0%, transparent 40%), radial-gradient(circle at bottom right, #ef4444 0%, transparent 40%)",
          }}
        />

        <div className="relative z-10 text-center px-6 py-32">
          <h1 className="text-8xl md:text-9xl font-black uppercase tracking-tight bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
            NORTHWRAP
          </h1>

          <h2 className="mt-10 text-5xl md:text-6xl font-black uppercase">
            Ride. Design. Stand Out.
          </h2>

          <p className="mt-10 text-4xl font-bold">
            Browse our latest products
          </p>

          <a
            href="#products"
            className="inline-block mt-10 px-10 py-4 rounded-2xl border border-zinc-700 hover:border-purple-500 hover:bg-zinc-900 transition text-lg font-bold"
          >
            Shop all
          </a>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-16">Products</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-zinc-950 rounded-[30px] overflow-hidden border border-zinc-800 hover:border-purple-500 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[500px] object-cover"
                  />

                  <div className="absolute top-5 right-5 bg-black/80 px-4 py-2 rounded-full text-sm font-bold">
                    In stock
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold leading-snug">
                    {product.name}
                  </h3>

                  <p className="mt-5 text-4xl font-black text-purple-400">
                    {product.price}
                  </p>

                  <a
                    href={product.buy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-8 text-center py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-red-500 font-bold text-lg hover:opacity-90 transition"
                  >
                    Buy now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HELP SECTION */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="border border-zinc-800 rounded-[35px] p-14 bg-zinc-950">
            <p className="text-purple-400 uppercase tracking-widest font-bold">
              We’re here to help
            </p>

            <h2 className="text-6xl font-black leading-tight mt-6">
              Questions? We're Here To Help
            </h2>

            <p className="mt-8 text-zinc-400 text-lg leading-relaxed">
              Have a question about our products or services?
              We'd love to hear from you.
            </p>

            <a
              href="mailto:northwrapdesigns@gmail.com"
              className="inline-block mt-10 px-8 py-4 rounded-2xl border border-purple-500 hover:bg-purple-500/10 transition font-bold"
            >
              Contact us
            </a>
          </div>

          <div className="rounded-[35px] overflow-hidden border border-zinc-800">
            <img
              src="https://i.imgur.com/L9h6m9W.jpeg"
              alt="Northwrap"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* EMAIL LIST */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto border border-zinc-800 rounded-[35px] p-12 bg-zinc-950 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="text-5xl font-black">
              Join our email list
            </h2>

            <p className="mt-4 text-zinc-400 text-lg">
              Get exclusive deals and early access to new products.
            </p>
          </div>

          <form
            action="https://formsubmit.co/northwrapdesigns@gmail.com"
            method="POST"
            className="flex w-full md:w-auto"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Email address"
              className="bg-black border border-zinc-700 rounded-l-full px-8 py-5 w-[320px] outline-none"
            />

            <button
              type="submit"
              className="px-8 rounded-r-full bg-gradient-to-r from-purple-600 to-red-500 font-bold"
            >
              →
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 pb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-zinc-900 pt-10">
          <div>
            <h2 className="text-4xl font-black bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
              NORTHWRAP
            </h2>

            <p className="text-zinc-500 mt-4">
              © 2026 North Wrap Designs
            </p>
          </div>

          <div className="flex gap-6 text-zinc-400">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Instagram size={32} />
            </a>

            <a
              href="https://tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition text-3xl font-bold"
            >
              TikTok
            </a>

            <a
              href="mailto:northwrapdesigns@gmail.com"
              className="hover:text-white transition"
            >
              <Mail size={32} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
