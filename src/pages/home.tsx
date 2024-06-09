import { FaShoppingCart, FaUser } from "react-icons/fa";

export default function HomePage() {
  return (
    <div>
      <nav>
        <p className="logo">Woody Furnitures</p>
        <div className="navicons">
       
        </div>
      </nav>
      <section className="indexpara">Welcome to Woody Furnitures</section>
      <footer>
        <div className="Footernav">
          <a href="/home">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
        </div>
        <div>&copy; 2024 Woody Furnitures</div>
      </footer>
    </div>
  );
}
