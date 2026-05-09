import './App.css'

function App() {
  const products = [
    {
      name: 'Monster Energy Moped Sticker Set — Red & Black',
      price: '€200,00',
      image: '/redbike.png',
      link: '#',
    },
    {
      name: 'Monster Energy Moped Sticker Set — Pink & Purple',
      price: '€200,00',
      image: '/purplebike.png',
      link: '#',
    },
    {
      name: 'Monster Energy Moped Sticker Set — Green & Black',
      price: '€200,00',
      image: '/greenbike.png',
      link: '#',
    },
  ]

  return (
    <div className="app">
      <nav className="navbar">
        <h1>NORTHWRAP</h1>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#catalog">Catalog</a>
        </div>

        <div className="nav-icons">
          <a href="https://instagram.com" target="_blank">
            Instagram
          </a>

          <a href="https://tiktok.com" target="_blank">
            TikTok
          </a>
        </div>
      </nav>

      <section className="hero" id="home">
        <h2>Ride. Design. Stand Out.</h2>
        <p>Browse our latest products</p>

        <a href="#catalog" className="shop-btn">
          Shop all
        </a>
      </section>

      <section className="products" id="catalog">
        <h2>Products</h2>

        <div className="product-grid">
          {products.map((product, index) => (
            <div className="card" key={index}>
              <img src={product.image} alt={product.name} />

              <h3>{product.name}</h3>

              <p>{product.price}</p>

              <a href={product.link} className="buy-btn">
                Buy now
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="contact">
        <div>
          <p>We’re here to help</p>

          <h2>Questions? We're Here To Help</h2>

          <p>
            Have a question about our products or services? We'd love to hear
            from you.
          </p>

          <a href="mailto:northwrap@email.com" className="contact-btn">
            Contact us
          </a>
        </div>

        <img src="/purplebike1.png" alt="NorthWrap" />
      </section>

      <section className="email-section">
        <h2>Join our email list</h2>

        <p>Get exclusive deals and early access to new products.</p>

        <form>
          <input type="email" placeholder="Email address" />

          <button type="submit">→</button>
        </form>
      </section>

      <footer>
        <h2>NORTHWRAP</h2>

        <p>© 2026 North Wrap Designs</p>

        <div className="footer-links">
          <a href="https://instagram.com" target="_blank">
            Instagram
          </a>

          <a href="https://tiktok.com" target="_blank">
            TikTok
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
