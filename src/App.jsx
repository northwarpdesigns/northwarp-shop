import {
  ShoppingBag,
  Search,
  User,
  Instagram,
  Mail,
} from "lucide-react";

export default function App() {
  const products = [
    {
      name: "Monster Energy Moped Sticker Set — Red & Black",
      price: "€200,00",
      image: "/redbike.png",
      hoverImage: "/redbike1.png",
    },
    {
      name: "Monster Energy Moped Sticker Set — Pink & Purple",
      price: "€200,00",
      image: "/purplebike.png",
      hoverImage: "/purplebike1.png",
    },
    {
      name: "Monster Energy Moped Sticker Set — Green & Black",
      price: "€200,00",
      image: "/greenbike.png",
      hoverImage: "/greenbike1.png",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* TOP BAR */}
      <div className="text-center text-sm py-3 border-b border-zinc-800">
        Welcome to our store
      </div>

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-6">
        <h1 className="text-4xl font-black bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
          NORTHWRAP
        </h1>

        <div className="flex gap-8 font-medium">
          <a href="#">Home</a>
          <a href="#products">Catalog</a>
        </div>

        <div className="flex gap-5">
          <Search />
          <User />
          <ShoppingBag />
        </div>
      </nav>

      {/* HERO */}
      <section className="relative px-10 py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/purplebike1.png')",
          }}
        />

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-7xl font-black mb-6">
            NORTHWRAP
          </h1>

          <h2 className="text-4xl font-bold mb-4">
            Ride. Design. Stand Out.
          </h2>

          <p className="text-zinc-300 text-xl mb-10">
            Browse our latest products
          </p>

          <a
            href="#products"
            className="px-8 py-4 rounded-full border border-purple-500 hover:bg-purple-600 transition"
          >
            Shop all
          </a>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="px-10 py-20">
        <h2 className="text-5xl font-bold mb-14">
          Products
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-800 hover:border-purple-500 transition"
            >
              <div className="group relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[420px] object-cover group-hover:hidden"
                />

                <img
                  src={product.hoverImage}
                  alt={product.name}
                  className="w-full h-[420px] object-cover hidden group-hover:block"
                />

                <div className="absolute top-4 right-4 bg-black/70 px-4 py-2 rounded-full text-sm">
                  In stock
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  {product.name}
                </h3>

                <p className="text-3xl mt-4 font-bold text-purple-400">
                  {product.price}
                </p>

                <a
                  href="https://www.instagram.com/northwrapdesigns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-6"
                >
                  <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-red-500 font-bold hover:scale-105 transition">
                    Buy now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HELP SECTION */}
      <section className="px-10 pb-20">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-12">
            <p className="uppercase text-purple-400 mb-4 tracking-widest">
              We're here to help
            </p>

            <h2 className="text-5xl font-bold mb-6">
              Questions? We're Here To Help
            </h2>

            <p className="text-zinc-400 text-lg mb-10">
              Have a question about our products or services?
              We'd love to hear from you.
            </p>

            <a
              href="mailto:northwrapdesigns@gmail.com"
              className="px-8 py-4 rounded-full border border-purple-500 hover:bg-purple-600 transition"
            >
              Contact us
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden">
            <img
              src="/purplebike1.png"
              alt="NorthWrap"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* EMAIL */}
      <section className="px-10 pb-20">
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div>
            <h2 className="text-5xl font-bold mb-4">
              Join our email list
            </h2>

            <p className="text-zinc-400 text-lg">
              Get exclusive deals and early access to new products.
            </p>
          </div>

          <form
            action="https://formsubmit.co/northwrapdesigns@gmail.com"
            method="POST"
            className="flex w-full md:w-[500px]"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Email address"
              className="flex-1 bg-black border border-zinc-700 rounded-l-full px-6 py-4 outline-none"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-red-500 px-8 rounded-r-full"
            >
              →
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-10 py-10 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-4xl font-black bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
            NORTHWRAP
          </h2>

          <p className="text-zinc-500 mt-4">
            © 2026 North Wrap Designs
          </p>
        </div>

        <div className="flex gap-8">
          <a
            href="https://www.instagram.com/northwrapdesigns"
            target="_blank"
          >
            <Instagram size={34} />
          </a>

          <a
            href="https://www.tiktok.com"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M9.5 0h2.09a3.5 3.5 0 0 0 3.41 3.09v2.02a5.5 5.5 0 0 1-3.5-1.26v5.4A4.65 4.65 0 1 1 6.85 4.6v2.1a2.55 2.55 0 1 0 2.65 2.55z" />
            </svg>
          </a>

          <a href="mailto:northwrapdesigns@gmail.com">
            <Mail size={34} />
          </a>
        </div>
      </footer>
    </div>
  );
}
