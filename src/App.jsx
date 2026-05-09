import './App.css'

function App() {
  const products = [
    {
      name: "Monster Energy Moped Sticker Set — Red & Black",
      price: "€200,00",
      image: "/redbike.png",
    },
    {
      name: "Monster Energy Moped Sticker Set — Pink & Purple",
      price: "€200,00",
      image: "/purplebike.png",
    },
    {
      name: "Monster Energy Moped Sticker Set — Green & Black",
      price: "€200,00",
      image: "/greenbike.png",
    },
  ]

  return (
    <div className="app">
      <header className="navbar">
        <h1>NORTHWRAP</h1>

        <nav>
          <a href="#">Home</a>
          <a href="#products">Catalog</a>
        </nav>
      </header>

      <section className="hero">
        <h1>NORTHWRAP</h1>
        <h2>Ride. Design. Stand Out.</h2>
        <p>Browse our latest products</p>

        <a href="#products" className="shop-btn">
          Shop all
        </a>
      </section>

      <section id="products" className="products-section">
        <h2>Products</h2>

        <div className="products-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.name} />

              <h3>{product.name}</h3>

              <p>{product.price}</p>

              <button
                onClick={() =>
                  alert("Checkout coming soon!")
                }
              >
                Buy now
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="help-section">
        <div>
          <h2>Questions? We're Here To Help</h2>

          <p>
            Have a question about our products or services?
            We'd love to hear from you.
          </p>

          <a href="mailto:northwrapdesigns@gmail.com">
            Contact us
          </a>
        </div>

        <img src="/redbike1.png" alt="Bike" />
      </section>

      <section className="email-section">
        <h2>Join our email list</h2>

        <p>
          Get exclusive deals and early access to new products.
        </p>

        <div className="email-box">
          <input type="email" placeholder="Email address" />

          <button>→</button>
        </div>
      </section>

      <footer className="footer">
        <h2>NORTHWRAP</h2>

        <p>© 2026 North Wrap Designs</p>

        <div className="socials">
          <a
            href="https://instagram.com"
            target="_blank"
          >
            Instagram
          </a>

          <a
            href="https://tiktok.com"
            target="_blank"
          >
            TikTok
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
