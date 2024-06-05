import chair from "../Images/Chair.jpg";
import bed from "../Images/Bed.jfif";
import cupboard from "../Images/Cupboard.jpg";
import bookshelf from "../Images/Bookshelf.jpg";
import table from "../Images/Table.jfif";
import stool from "../Images/stool2.0.jpg";
import { Dispatch, useState } from "react";

export default function ProductPage() {
  const [chairprice, changechairprice] = useState(60);
  const [chairqty, changechairqty] = useState(1);
  const [tableprice, changetableprice] = useState(120);
  const [tableqty, changetableqty] = useState(1);
  const [bedprice, changebedprice] = useState(400);
  const [bedqty, changebedqty] = useState(1);
  const [cupboardprice, changecupboardprice] = useState(150);
  const [cupboardqty, changecupboardqty] = useState(1);
  const [stoolprice, changestoolprice] = useState(250);
  const [stoolqty, changestoolqty] = useState(1);
  const [bookshelfprice, changebookshelfprice] = useState(80);
  const [bookshelfqty, changebookshelfqty] = useState(1);

  function changeqtyandprice(
    price: number,
    qty: number,
    changeprice: Dispatch<React.SetStateAction<number>>,
    changeqty: Dispatch<React.SetStateAction<number>>,
    method: "plus" | "minus"
  ) {
    if(method === "plus") {
      changeqty((prevQuantity) => prevQuantity + 1)
      changeprice(prv => prv * qty);
    }
    else{
      changeqty(qty - 1)
      changeprice(prv => prv * (qty - 1))
    }
  }

  return (
    <div>
      <nav>
        <p className="logo">Woody Furnitures</p>
        <div className="navicons">
          <span title="Shopping Cart" className="material-symbols-outlined">
            shopping_cart
          </span>
          <span title="Account" className="material-symbols-outlined">
            {" "}
            person{" "}
          </span>
        </div>
      </nav>
      <section className="Productsection">
        <div className="productcard">
          <img src={chair} alt="" />
          <div className="Details">
            <div className="Productname">Wooden Chair</div>
            <div className="Productdescription">
              "Crafted from durable wood, our chair blends elegance with
              sturdiness for timeless comfort and style in any setting."
            </div>
            <div className="Productcardfooter">
              <button id="chairbutton">Add to cart</button>
              <h2 id="chairprice">{chairprice}</h2>
            </div>
            <div className="quantity">
              <button onClick={() => changeqtyandprice(60,chairqty,changechairprice,changechairqty,"minus")} id="chairminus">-</button>
              <span id="chairquantity">{chairqty}</span>
              <button
                onClick={() => changeqtyandprice(60,chairqty,changechairprice,changechairqty,"plus")}
                id="chairplus"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="productcard">
          <img src={bookshelf} alt="" />
          <div className="Details">
            <div className="Productname">Wooden Bookshelf</div>
            <div className="Productdescription">
              "Organize in style with our wooden bookshelf, combining
              functionality and charm to showcase your favorite reads and decor
              elegantly."
            </div>
            <div className="Productcardfooter">
              <button id="bookshelfbutton">Add to cart</button>
              <h2 id="bookshelfprice"></h2>
            </div>
            <div className="quantity">
              <button id="bookshelfminus">-</button>
              <span id="bookshelfquantity"></span>
              <button
                onClick={() => {
                  changebookshelfqty(bookshelfqty + 1);
                  changebookshelfprice(bookshelfprice * bookshelfqty);
                }}
                id="bookshelfplus"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="productcard">
          <img src={cupboard} alt="" />
          <div className="Details">
            <div className="Productname">Wooden Cupboard</div>
            <div className="Productdescription">
              "Elevate your storage game with our wooden cupboard, marrying
              functionality and sophistication to keep your belongings neatly
              organized in style."
            </div>
            <div className="Productcardfooter">
              <button id="cupboardbutton">Add to cart</button>
              <h2 id="cupboardprice"></h2>
            </div>
            <div className="quantity">
              <button id="cupboardminus">-</button>
              <span id="cupboardquantity"></span>
              <button
                onClick={() => {
                  changecupboardqty(cupboardqty + 1);
                  changecupboardprice(cupboardprice * cupboardqty);
                }}
                id="cupboardplus"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="productcard">
          <img src={table} alt="" />
          <div className="Details">
            <div className="Productname">Wooden Table</div>
            <div className="Productdescription">
              "Experience timeless elegance with our wooden table, expertly
              crafted for durability and style, perfect for gatherings and
              everyday use."
            </div>
            <div className="Productcardfooter">
              <button id="tablebutton">Add to cart</button>
              <h2 id="tableprice"></h2>
            </div>
            <div className="quantity">
              <button id="tableminus">-</button>
              <span id="tablequantity"></span>
              <button
                onClick={() => {
                  changetableqty(tableqty + 1);
                  changetableprice(tableprice * tableqty);
                }}
                id="tableplus"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="productcard">
          <img src={bed} alt="" />
          <div className="Details">
            <div className="Productname">Wooden Bed</div>
            <div className="Productdescription">
              "Indulge in comfort and style with our wooden bed, designed for
              restful nights and lasting beauty in your bedroom sanctuary."
            </div>
            <div className="Productcardfooter">
              <button id="bedbutton">Add to cart</button>
              <h2 id="bedprice"></h2>
            </div>
            <div className="quantity">
              <button id="bedminus">-</button>
              <span id="bedquantity"></span>
              <button
                onClick={() => {
                  changebedqty(bedqty + 1);
                  changebedprice(bedprice * bedqty);
                }}
                id="bedplus"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="productcard">
          <img src={stool} alt="" />
          <div className="Details">
            <div className="Productname">Wooden Stool</div>
            <div className="Productdescription">
              "This rustic stool, made from solid wood, is compact and
              versatile. Use it as a side table, plant stand, or extra seat. Its
              neutral finish complements any decor"
            </div>
            <div className="Productcardfooter">
              <button id="stoolbutton">Add to cart</button>
              <h2 id="stoolprice"></h2>
            </div>
            <div className="quantity">
              <button id="stooldminus">-</button>
              <span id="stoolquantity"></span>
              <button
                onClick={() => {
                  changestoolqty(stoolqty + 1);
                  changestoolprice(stoolprice * stoolqty);
                }}
                id="stoolplus"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </section>
      <div id="popup">Added To Cart</div>
      <footer>
        <div className="Footernav">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
        </div>
        <div>&copy; 2024 Woody Furnitures</div>
      </footer>
      <script src="/productspecs.js"></script>
    </div>
  );
}
