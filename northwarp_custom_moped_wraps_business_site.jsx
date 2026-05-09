export default function NorthWarpSite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-black to-zinc-900">
        <img
          src="/mnt/data/NorthWarp logo (lock) (1).png"
          alt="NorthWrap Logo"
          className="w-72 md:w-96 mb-8 drop-shadow-2xl"
        />

        <h1 className="text-5xl md:text-7xl font-black tracking-widest bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent uppercase">
          NorthWrap
        </h1>

        <p className="mt-6 text-xl md:text-2xl tracking-[0.3em] uppercase text-zinc-300">
          Ride. Design. Stand Out.
        </p>

        <p className="max-w-2xl mt-8 text-zinc-400 text-lg leading-relaxed">
          Premium custom moped sticker sets designed to turn your ride into something unique.
          Bold graphics, custom styles, and clean finishes built for riders who want to stand out.
        </p>

        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          <a
            href="https://www.instagram.com/northwarpdesigns/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition text-lg font-bold shadow-lg"
          >
            Instagram
          </a>

          <a
            href="https://www.tiktok.com/@northwarp"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl bg-white text-black hover:bg-zinc-200 transition text-lg font-bold shadow-lg"
          >
            TikTok
          </a>

          <button className="px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 transition text-lg font-bold shadow-lg shadow-purple-900/40">
            Shop Designs
          </button>

          <button className="px-8 py-4 rounded-2xl border border-zinc-700 hover:border-purple-500 hover:text-purple-400 transition text-lg font-bold">
            Custom Orders
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-black uppercase mb-6 text-purple-400">
            About NorthWrap
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed mb-6">
            NorthWrap creates high-quality custom sticker kits and wraps for mopeds and street builds.
            Whether you want aggressive racing graphics, clean minimal designs, or fully custom art,
            every set is designed to make your ride different from everyone else on the road.
          </p>

          <p className="text-zinc-500 leading-relaxed">
            Built for riders who care about style, detail, and originality.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 shadow-2xl">
          <h3 className="text-3xl font-bold mb-6 text-red-400 uppercase">
            What We Offer
          </h3>

          <ul className="space-y-4 text-zinc-300 text-lg">
            <li>🔥 Custom Moped Sticker Sets</li>
            <li>🎨 Personalized Graphic Designs</li>
            <li>⚡ Race-Inspired Styling</li>
            <li>🛵 Full Wrap Concepts</li>
            <li>📦 Ready-To-Ship Kits</li>
          </ul>
        </div>
      </section>

      {/* Store Section */}
      <section className="px-6 py-20 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-black uppercase mb-4 text-white">
            NorthWrap Store
          </h2>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-14">
            Shop premium custom moped sticker kits designed for riders who want a clean, aggressive, standout look.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Street Phantom Kit",
                price: "$59",
                image: "/mnt/data/ChatGPT Image May 8, 2026, 09_53_59 PM (1).jpg",
              },
              {
                name: "Midnight Racing Kit",
                price: "$79",
                image: "/mnt/data/ChatGPT Image May 9, 2026, 01_59_35 PM.jpg",
              },
              {
                name: "Custom Design Package",
                price: "$120",
                image: "/mnt/data/ChatGPT Image May 8, 2026, 09_09_40 PM (1).jpg",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-black border border-zinc-800 rounded-3xl overflow-hidden hover:border-purple-500 transition shadow-2xl"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 w-full object-cover"
                />

                <div className="p-8 text-left">
                  <h3 className="text-2xl font-black mb-2 text-white uppercase">
                    {product.name}
                  </h3>

                  <p className="text-zinc-400 mb-6">
                    High-quality sticker kit with durable vinyl and premium finish.
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-purple-400">
                      {product.price}
                    </span>

                    <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-red-500 font-bold hover:opacity-90 transition">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-6 py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-black uppercase mb-12 text-white">
            Featured Designs
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "/mnt/data/ChatGPT Image May 8, 2026, 09_45_35 PM (1).jpg",
              "/mnt/data/ChatGPT Image May 8, 2026, 09_48_57 PM.jpg",
              "/mnt/data/ChatGPT Image May 9, 2026, 02_02_44 PM (1).jpg",
              "/mnt/data/ChatGPT Image May 8, 2026, 09_09_40 PM (1).jpg",
            ].map((image, index) => (
              <div
                key={index}
                className="rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 hover:scale-105 transition duration-300"
              >
                <img
                  src={image}
                  alt="NorthWrap Design"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order System */}
      <section className="px-6 py-24 bg-black border-t border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-black uppercase text-white mb-4">
              Custom Order Booking
            </h2>

            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Want your own fully custom moped wrap? Submit your build details below and NorthWrap will contact you with pricing and design options.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 space-y-6 shadow-2xl">
              <h3 className="text-3xl font-black text-purple-400 uppercase mb-2">
                Build Information
              </h3>

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 rounded-xl bg-black border border-zinc-700 focus:outline-none focus:border-purple-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-xl bg-black border border-zinc-700 focus:outline-none focus:border-purple-500"
              />

              <input
                type="text"
                placeholder="Moped / Bike Model"
                className="w-full p-4 rounded-xl bg-black border border-zinc-700 focus:outline-none focus:border-purple-500"
              />

              <select className="w-full p-4 rounded-xl bg-black border border-zinc-700 focus:outline-none focus:border-purple-500 text-zinc-400">
                <option>Choose Design Style</option>
                <option>Race Inspired</option>
                <option>Clean Minimal</option>
                <option>Monster Style</option>
                <option>Custom Artwork</option>
              </select>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl flex flex-col">
              <h3 className="text-3xl font-black text-red-400 uppercase mb-6">
                Design Notes
              </h3>

              <textarea
                placeholder="Describe your idea, colors, logos, themes, or inspiration..."
                rows="10"
                className="w-full p-4 rounded-xl bg-black border border-zinc-700 focus:outline-none focus:border-red-500 flex-grow"
              />

              <button className="mt-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-red-500 text-lg font-black uppercase hover:opacity-90 transition shadow-lg">
                Submit Custom Order
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
                price: "$59",
              },
              {
                name: "Midnight Racing Kit",
                price: "$79",
              },
              {
                name: "Custom Design Package",
                price: "$120",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-black border border-zinc-800 rounded-3xl overflow-hidden hover:border-purple-500 transition shadow-2xl"
              >
                <div className="h-72 bg-gradient-to-br from-purple-700/30 to-red-700/30 flex items-center justify-center text-zinc-500 text-xl font-bold">
                  Product Preview
                </div>

                <div className="p-8 text-left">
                  <h3 className="text-2xl font-black mb-2 text-white uppercase">
                    {product.name}
                  </h3>

                  <p className="text-zinc-400 mb-6">
                    High-quality sticker kit with durable vinyl and premium finish.
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-purple-400">
                      {product.price}
                    </span>

                    <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-red-500 font-bold hover:opacity-90 transition">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-6 py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-black uppercase mb-12 text-white">
            Featured Designs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 hover:scale-105 transition duration-300"
              >
                <div className="h-72 bg-gradient-to-br from-purple-700/40 to-red-700/40 flex items-center justify-center text-zinc-500 text-xl font-bold">
                  Design Preview
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-black uppercase mb-6 text-purple-400">
          Contact NorthWrap
        </h2>

        <p className="text-zinc-400 text-lg mb-10">
          Ready for a custom build or sticker set? Reach out and bring your design idea to life.
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-black border border-zinc-700 focus:outline-none focus:border-purple-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-black border border-zinc-700 focus:outline-none focus:border-purple-500"
          />

          <textarea
            placeholder="Tell us about your design idea..."
            rows="5"
            className="w-full p-4 rounded-xl bg-black border border-zinc-700 focus:outline-none focus:border-purple-500"
          />

          <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-red-500 text-lg font-bold hover:opacity-90 transition">
            Send Message
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500">
        <p>© 2026 NorthWrap — Ride. Design. Stand Out.</p>
      </footer>
    </div>
  );
}
