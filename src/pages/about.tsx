import { FaShoppingCart, FaUser } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div>
      <nav>
        <p className="logo">Woody Furnitures</p>
        <div className="navicons">
      
        </div>
      </nav>
      <section>
        <div className="Aboutuspara">
          <p>
            Welcome to Woody Furnitures! We’re passionate about crafting
            exquisite wooden furniture that transforms spaces into cozy havens.
            Our journey began 3 years ago when Alfred Bulivou decided to blend
            craftsmanship with innovation.Driven by a love for natural materials
            and timeless designs, we embarked on a mission to create pieces that
            resonate with both aesthetics and functionality.
          </p>

          <p>
            At Woody Furnitures, we believe that every home deserves a touch of
            elegance. Our skilled artisans meticulously handcraft each piece,
            ensuring that it not only looks stunning but also stands the test of
            time. Whether it’s a rustic farmhouse dining table, a sleek
            Scandinavian-inspired chair, or a custom-made bed frame, our
            commitment to quality shines through in every detail.
          </p>

          <p>
            Our core values revolve around sustainability and authenticity. We
            source our wood from responsibly managed forests, minimizing our
            environmental impact. Each grain tells a story, and we celebrate
            imperfections that make every piece unique. When you choose Woody
            Funritures, you’re not just buying furniture; you’re investing in a
            legacy that will be cherished for generations.
          </p>

          <p>
            {" "}
            Thank you for joining us on this creative journey. Explore our
            collection, and let’s bring your vision to life—one beautifully
            crafted piece at a time.
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2254.4439528832045!2d178.45187491439185!3d-18.140512672717676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sfj!4v1717576332854!5m2!1sen!2sfj"
          height="450"
          loading="lazy"
        ></iframe>
      </section>
      <footer>
        <div className="Footernav">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
        </div>
        <div>&copy; 2024 Woody Furnitures</div>
      </footer>
    </div>
  );
}
