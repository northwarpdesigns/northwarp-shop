* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: black;
  color: white;
  font-family: Arial, sans-serif;
}

.app {
  width: 100%;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 50px;
  background: black;
}

.nav-links,
.nav-icons,
.footer-links {
  display: flex;
  gap: 20px;
}

a {
  color: white;
  text-decoration: none;
}

.hero {
  text-align: center;
  padding: 120px 20px;
}

.hero h2 {
  font-size: 70px;
  margin-bottom: 20px;
}

.shop-btn,
.buy-btn,
.contact-btn {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 24px;
  border: 1px solid white;
  border-radius: 10px;
}

.products {
  padding: 50px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.card img {
  width: 100%;
  border-radius: 20px;
}

.card h3 {
  margin-top: 15px;
}

.card p {
  margin-top: 10px;
}

.contact {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 50px;
  padding: 80px 50px;
}

.contact img {
  width: 100%;
  border-radius: 20px;
}

.email-section {
  padding: 50px;
}

.email-section form {
  display: flex;
  margin-top: 20px;
}

.email-section input {
  flex: 1;
  padding: 15px;
  border-radius: 10px 0 0 10px;
  border: none;
}

.email-section button {
  padding: 15px 25px;
  border: none;
  background: purple;
  color: white;
  border-radius: 0 10px 10px 0;
}

footer {
  padding: 50px;
}
