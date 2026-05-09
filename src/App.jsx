import React from "react";

const products = [
  {
    name: "Monster Energy Moped Sticker Set — Red & Black",
    price: "€200",
    image: "/redbike1.png",
  },
  {
    name: "Monster Energy Moped Sticker Set — Pink & Purple",
    price: "€200",
    image: "/purplebike.png",
  },
  {
    name: "Monster Energy Moped Sticker Set — Green & Black",
    price: "€200",
    image: "/greenbike1.png",
  },
];

export default function App() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "64px",
          fontWeight: "bold",
          marginBottom: "50px",
        }}
      >
        Products
      </h1>

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
              backgroundColor: "#0d0d0d",
              borderRadius: "24px",
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

            <div style={{ padding: "24px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  lineHeight: "1.2",
                  marginBottom: "20px",
                }}
              >
                {product.name}
              </h2>

              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "24px",
                }}
              >
                {product.price}
              </p>

              <button
                style={{
                  backgroundColor: "#8b5cf6",
                  border: "none",
                  color: "white",
                  padding: "14px 28px",
                  borderRadius: "14px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Buy now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "center",
          marginTop: "120px",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              lineHeight: "1.1",
              marginBottom: "24px",
            }}
          >
            Questions? We're Here To Help
          </h2>

          <p
            style={{
              fontSize: "22px",
              color: "#ccc",
              marginBottom: "30px",
            }}
          >
            Have a question about our products or services? We'd love to hear
            from you.
          </p>

          <a
            href="mailto:northwarpdesigns@gmail.com"
            style={{
              color: "#8b5cf6",
              fontSize: "22px",
              textDecoration: "underline",
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
            borderRadius: "24px",
            objectFit: "cover",
          }}
        />
      </div>

      <div style={{ marginTop: "140px" }}>
        <h2
          style={{
            fontSize: "56px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Join our email list
        </h2>

        <p
          style={{
            fontSize: "22px",
            color: "#ccc",
            marginBottom: "30px",
          }}
        >
          Get exclusive deals and early access to new products.
        </p>

        <div
          style={{
            display: "flex",
            maxWidth: "700px",
          }}
        >
          <input
            type="email"
            placeholder="Email address"
            style={{
              flex: 1,
              padding: "20px",
              borderRadius: "16px 0 0 16px",
              border: "none",
              fontSize: "18px",
            }}
          />

          <button
            style={{
              backgroundColor: "#8b5cf6",
              color: "white",
              border: "none",
              padding: "0 32px",
              borderRadius: "0 16px 16px 0",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
