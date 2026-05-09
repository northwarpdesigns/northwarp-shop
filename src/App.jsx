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
    <div
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "white",
        fontFamily: "Arial",
        padding: "40px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1 style={{ fontSize: "60px", marginBottom: "20px" }}>
          Northwarp Designs
        </h1>

        <p style={{ color: "#aaa", fontSize: "20px" }}>
          Custom moped wraps, racing graphics, and premium sticker kits.
        </p>

        <button
          style={{
            marginTop: "25px",
            padding: "15px 30px",
            border: "none",
            borderRadius: "12px",
            background: "linear-gradient(to right, purple, red)",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Book a Custom Design
        </button>
      </div>

      <h2 style={{ fontSize: "40px", marginBottom: "30px" }}>
        Popular Wrap Kits
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              background: "#1e1e1e",
              borderRadius: "20px",
              padding: "25px",
            }}
          >
            <div
              style={{
                height: "180px",
                borderRadius: "15px",
                background: "linear-gradient(to bottom right, purple, red)",
                marginBottom: "20px",
              }}
            />

            <h3 style={{ fontSize: "28px" }}>{product.name}</h3>

            <p style={{ color: "#aaa" }}>
              Premium vinyl wrap kit with racing inspired styling.
            </p>

            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "30px", fontWeight: "bold" }}>
                {product.price}
              </span>

              <button
                style={{
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "10px",
                  background: "purple",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "80px",
          background: "#1a1a1a",
          padding: "40px",
          borderRadius: "25px",
        }}
      >
        <h2 style={{ fontSize: "40px", marginBottom: "30px" }}>
          Custom Order Request
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <input
            placeholder="Your Name"
            style={{
              padding: "15px",
              borderRadius: "10px",
              border: "none",
            }}
          />

          <input
            placeholder="Your Email"
            style={{
              padding: "15px",
              borderRadius: "10px",
              border: "none",
            }}
          />

          <textarea
            rows="6"
            placeholder="Describe your custom wrap idea..."
            style={{
              padding: "15px",
              borderRadius: "10px",
              border: "none",
            }}
          />

          <button
            style={{
              padding: "15px",
              borderRadius: "12px",
              border: "none",
              background: "linear-gradient(to right, purple, red)",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}
