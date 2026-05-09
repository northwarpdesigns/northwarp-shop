export default function App() {
  const products = [
    {
      name: "Street Flame Wrap",
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
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero */}
      <section className="text-center py-24 px-6 bg-gradient-to-b from-black to-zinc-900">
        <h1 className="text-6xl font-black uppercase mb-6">
          Northwarp Designs
        </h1>

        <p className="text-zinc-400 text-xl max-w-2xl mx-auto mb-10">
          Custom moped wraps, racing graphics, and premium sticker kits.
        </p>

        <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-red-500 text-lg font-black uppercase hover:opacity-90 transition">
          Book a Custom Design
        </button>
      </section>

      {/* Products */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black uppercase text-center mb-16">
            Popular Wrap Kits
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="h-72 bg-gradient-to-br from-purple-700/30 to-red-700/30 flex items-center justify-center text-zinc-500 text-xl font-bold">
                  Product Preview
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-black mb-3 uppercase">
                    {product.name}
                  </h3>

                  <p className="text-zinc-400 mb-6">
                    High-quality vinyl wrap kit with premium finish and racing style.
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

      {/* Contact */}
      <section className="px-6 py-20 bg-zinc-950">
        <div className="max-w-3xl mx-auto">
          <div className="bg-black border border-zinc-800 rounded-3xl p-10 shadow-2xl">
            <h2 className="text-4xl font-black uppercase mb-8 text-center">
              Custom Order Request
            </h2>

            <div className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
              />

              <textarea
                rows="6"
                placeholder="Describe your custom wrap idea..."
                className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
              />

              <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-red-500 text-lg font-black uppercase hover:opacity-90 transition">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
