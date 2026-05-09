export default function App() {
  const products = [
    {
      name: "Monster Energy Moped Sticker Set — Red & Black",
      price: "€200",
      image: "/redbike.png",
      link: "https://buy.stripe.com/test",
    },
    {
      name: "Monster Energy Moped Sticker Set — Pink & Purple",
      price: "€200",
      image: "/purplebike.png",
      link: "https://buy.stripe.com/test",
    },
    {
      name: "Monster Energy Moped Sticker Set — Green & Black",
      price: "€200",
      image: "/greenbike1.png",
      link: "https://buy.stripe.com/test",
    },
  ];

  return (
    <div
      style={{
        background: "#000",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "25px 50px",
          borderBottom: "1px solid #222",
        }}
      >
        <h1 style={{ fontSize: "32px", margin: 0 }}>NORTHWRAP</h1>

        <div style={{ display: "flex", gap: "25px" }}>
          <a href="#" style={navLink}>
            Home
          </a>

          <a href="#products" style={navLink}>
            Products
          </a>

          <a
            href="https://instagram.com/northwrapdesigns"
            target="_blank"
            style={navLink}
          >
            Instagram
          </a>

          <a
            href="https://tiktok.com/@northwrapdesigns"
            target="_blank"
            style={navLink}
          >
            TikTok
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "70px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Ride. Design. Stand Out.
        </h1>

        <p
          style={{
            color: "#aaa",
            fontSize: "20px",
            marginBottom: "40px",
          }}
        >
          Premium custom moped wraps and sticker kits.
        </p>

        <a
          href="#products"
          style={{
            background: "#8b5cf6",
            color: "white",
            padding: "16px 32px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Shop Now
        </a>
      </section>

      {/* PRODUCTS */}
      <section
        id="products"
        style={{
          padding: "40px",
        }}
      >
        <h2
          style={{
            fontSize: "60px",
            marginBottom: "40px",
          }}
        >
          Products
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              style={{
                background: "#0d0d0d",
                borderRadius: "25px",
                overflow: "hidden",
                border: "1px solid #222",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "340px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "25px" }}>
                <h3
                  style={{
                    fontSize: "24px",
                    marginBottom: "15px",
                    lineHeight: "1.3",
                  }}
                >
                  {product.name}
                </h3>

                <p
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    marginBottom: "20px",
                  }}
                >
                  {product.price}
                </p>

                <a
                  href={product.link}
                  target="_blank"
                  style={{
                    background: "#8b5cf6",
                    color: "white",
                    padding: "14px 26px",
                    borderRadius: "12px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    display: "inline-block",
                  }}
                >
                  Buy now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          alignItems: "center",
          padding: "100px 40px",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "70px",
              lineHeight: "1.1",
              marginBottom: "30px",
            }}
          >
            Questions? We're Here To Help
          </h2>

          <p
            style={{
              color: "#ccc",
              fontSize: "20px",
              marginBottom: "30px",
            }}
          >
            Have a question about our products or services? We'd love to hear
            from you.
          </p>

          <a
            href="mailto:northwrapdesigns@gmail.com"
            style={{
              color: "#8b5cf6",
              fontSize: "22px",
            }}
          >
            Contact us
          </a>
        </div>

        <img
          src="/redbike1.png"
          alt="Bike"
          style={{
            width: "100%",
            borderRadius: "30px",
          }}
        />
      </section>

      {/* EMAIL LIST */}
      <section
        style={{
          padding: "80px 40px",
        }}
      >
        <h2
          style={{
            fontSize: "60px",
            marginBottom: "15px",
          }}
        >
          Join our email list
        </h2>

        <p
          style={{
            color: "#ccc",
            marginBottom: "30px",
            fontSize: "20px",
          }}
        >
          Get exclusive deals and early access to new products.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks for joining!");
          }}
          style={{
            display: "flex",
            maxWidth: "700px",
          }}
        >
          <input
            type="email"
            placeholder="Email address"
            required
            style={{
              flex: 1,
              padding: "20px",
              border: "none",
              fontSize: "18px",
              borderTopLeftRadius: "15px",
              borderBottomLeftRadius: "15px",
            }}
          />

          <button
            type="submit"
            style={{
              background: "#8b5cf6",
              color: "white",
              border: "none",
              padding: "0 40px",
              fontSize: "24px",
              cursor: "pointer",
              borderTopRightRadius: "15px",
              borderBottomRightRadius: "15px",
            }}
          >
            →
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid #222",
          padding: "40px",
          textAlign: "center",
          color: "#777",
        }}
      >
        © 2026 NORTHWRAP
      </footer>
    </div>
  );
}

const navLink = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
};
