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
  padding: 25px 60px;
}

.navbar h1 {
  color: #8b5cf6;
}

.navbar nav {
  display: flex;
  gap: 25px;
}

.navbar a {
  color: white;
  text-decoration: none;
}

.hero {
  text-align: center;
  padding: 120px 20px;
}

.hero h1 {
  font-size: 90px;
  color: #8b5cf6;
}

.hero h2 {
  font-size: 55px;
  margin-top: 20px;
}

.hero p {
  margin-top: 20px;
  font-size: 20px;
  color: #ccc;
}

.shop-btn {
  display: inline-block;
  margin-top: 30px;
  padding: 15px 35px;
  border-radius: 10px;
  background: #8b5cf6;
  color: white;
  text-decoration: none;
}

.products-section {
  padding: 80px 60px;
}

.products-section h2 {
  font-size: 40px;
  margin-bottom: 40px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.product-card {
  background: #111;
  border-radius: 20px;
  overflow: hidden;
  padding-bottom: 20px;
}

.product-card img {
  width: 100%;
  height: 320px;
  object-fit: cover;
}

.product-card h3 {
  padding: 20px;
  font-size: 24px;
}

.product-card p {
  padding: 0 20px;
  color: #ccc;
}

.product-card button {
  margin: 20px;
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  background: #8b5cf6;
  color: white;
  cursor: pointer;
}

.help-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 100px 60px;
  gap: 50px;
}

.help-section img {
  width: 450px;
  border-radius: 20px;
}

.help-section h2 {
  font-size: 50px;
}

.help-section p {
  margin-top: 20px;
  color: #ccc;
  line-height: 1.6;
}

.help-section a {
  display: inline-block;
  margin-top: 30px;
  color: #8b5cf6;
}

.email-section {
  padding: 80px 60px;
}

.email-section h2 {
  font-size: 40px;
}

.email-section p {
  margin-top: 15px;
  color: #ccc;
}

.email-box {
  display: flex;
  margin-top: 30px;
  max-width: 600px;
}

.email-box input {
  flex: 1;
  padding: 18px;
  border: none;
  outline: none;
  border-radius: 10px 0 0 10px;
}

.email-box button {
  padding: 18px 30px;
  border: none;
  background: #8b5cf6;
  color: white;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
}

.footer {
  padding: 60px;
  border-top: 1px solid #222;
}

.footer p {
  margin-top: 15px;
  color: #777;
}

.socials {
  display: flex;
  gap: 20px;
  margin-top: 25px;
}

.socials a {
  color: #8b5cf6;
  text-decoration: none;
}

@media (max-width: 900px) {
  .products-grid {
    grid-template-columns: 1fr;
  }

  .help-section {
    flex-direction: column;
  }

  .hero h1 {
    font-size: 60px;
  }

  .hero h2 {
    font-size: 35px;
  }
}
