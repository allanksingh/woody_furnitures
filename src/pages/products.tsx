import chair from "../Images/Chair.jpg";
import bed from "../Images/Bed.jfif";
import cupboard from "../Images/Cupboard.jpg";
import bookshelf from "../Images/Bookshelf.jpg";
import table from "../Images/Table.jfif";
import stool from "../Images/stool2.0.jpg";
import { Dispatch, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import ShoppingCartPopup from "../components/shoppingcartpopup";

export default function ProductPage() {
  const [chairprice, changechairprice] = useState(60);
  const [chairqty, changechairqty] = useState(1);
  const [tableprice, changetableprice] = useState(120);
  const [tableqty, changetableqty] = useState(1);
  const [bedprice, changebedprice] = useState(400);
  const [bedqty, changebedqty] = useState(1);
  const [cupboardprice, changecupboardprice] = useState(150);
  const [cupboardqty, changecupboardqty] = useState(1);
  const [stoolprice, changestoolprice] = useState(50);
  const [stoolqty, changestoolqty] = useState(1);
  const [bookshelfprice, changebookshelfprice] = useState(250);
  const [bookshelfqty, changebookshelfqty] = useState(1);
  const [showshoppingcart, setshowshoppingcart] = useState(false)

  const [shoppingcartlist, updateshoppingcartlist] = useState<{productName: string, qty: number, price: number}[]>([]);

  function changeqtyandprice(
    price: number,
    qty: number,
    changeprice: Dispatch<React.SetStateAction<number>>,
    changeqty: Dispatch<React.SetStateAction<number>>,
    method: "plus" | "minus"
  ) {
    if (method === "plus") {
      var newqty = qty + 1;
      changeqty(newqty);
      changeprice(price * newqty);
    } else {
      var newqty = Math.max(qty - 1, 1);
      changeqty(newqty);
      changeprice(price * newqty);
    }
  }


  function addtocart(productName: string, qty: number, price: number) {
    const index = shoppingcartlist.findIndex(item => item.productName === productName);

    if (index !== -1) {
      const updatedItem = { ...shoppingcartlist[index], qty, price };
      const updatedList = [...shoppingcartlist.slice(0, index), updatedItem, ...shoppingcartlist.slice(index + 1)];
      updateshoppingcartlist(updatedList);
    } else {
      const newItem = { productName, qty, price };
      const updatedList = [...shoppingcartlist, newItem];
      updateshoppingcartlist(updatedList);
    }
  }
  

  console.log(shoppingcartlist);
  return (
    <div>
      <nav>
        <p className="logo">Woody Furnitures</p>
        <div className="navicons">
          <FaShoppingCart className="icons" onClick={ ()=>{setshowshoppingcart(!showshoppingcart)}} />
          <FaUser className="icons" />
        </div>
      </nav>
      <section className="Productsection">
        {
          showshoppingcart&&  <ShoppingCartPopup list={shoppingcartlist}/>
        }
     
        <div className="productcard">
          <img src={chair} alt="" />
          <div className="Details">
            <div className="Productname">Wooden Chair</div>
            <div className="Productdescription">
              "Crafted from durable wood, our chair blends elegance with
              sturdiness for timeless comfort and style in any setting."
            </div>
            <div className="Productcardfooter">
              <h2 id="chairprice">${chairprice}</h2>
            </div>
            <div className="quantity">
              <button
                onClick={() =>
                  changeqtyandprice(
                    60,
                    chairqty,
                    changechairprice,
                    changechairqty,
                    "minus"
                  )
                }
                id="chairminus"
              >
                -
              </button>
              <span id="chairquantity">{chairqty}</span>
              <button
                onClick={() =>
                  changeqtyandprice(
                    60,
                    chairqty,
                    changechairprice,
                    changechairqty,
                    "plus"
                  )
                }
                id="chairplus"
              >
                +
              </button>
            </div>
            <button
              onClick={() => {
                addtocart("Wooden Chair", chairqty, chairprice);
              }}
              id="chairbutton"
            >
              Add to cart
            </button>
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
              <h2 id="bookshelfprice">${bookshelfprice}</h2>
            </div>
            <div className="quantity">
              <button
                onClick={() =>
                  changeqtyandprice(
                    250,
                    bookshelfqty,
                    changebookshelfprice,
                    changebookshelfqty,
                    "minus"
                  )
                }
                id="bookshelfminus"
              >
                -
              </button>
              <span id="bookshelfquantity">{bookshelfqty}</span>
              <button
                onClick={() =>
                  changeqtyandprice(
                    250,
                    bookshelfqty,
                    changebookshelfprice,
                    changebookshelfqty,
                    "plus"
                  )
                }
                id="bookshelfplus"
              >
                +
              </button>
            </div>
            <button
              onClick={() => {
                addtocart("Wooden Bookshelf", bookshelfqty, bookshelfprice);
              }}
              id="bookshelfbutton"
            >
              Add to cart
            </button>
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
              <h2 id="cupboardprice">${cupboardprice}</h2>
            </div>
            <div className="quantity">
              <button
                onClick={() =>
                  changeqtyandprice(
                    150,
                    cupboardqty,
                    changecupboardprice,
                    changecupboardqty,
                    "minus"
                  )
                }
                id="cupboardminus"
              >
                -
              </button>
              <span id="cupboardquantity">{cupboardqty}</span>
              <button
                onClick={() =>
                  changeqtyandprice(
                    150,
                    cupboardqty,
                    changecupboardprice,
                    changecupboardqty,
                    "plus"
                  )
                }
                id="cupboardplus"
              >
                +
              </button>
            </div>
            <button
              onClick={() => {
                addtocart("Wooden Cupboard", cupboardqty, cupboardprice);
              }}
              id="cupboardbutton"
            >
              Add to cart
            </button>
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
              <h2 id="tableprice">${tableprice}</h2>
            </div>
            <div className="quantity">
              <button
                onClick={() =>
                  changeqtyandprice(
                    120,
                    tableqty,
                    changetableprice,
                    changetableqty,
                    "minus"
                  )
                }
                id="tableminus"
              >
                -
              </button>
              <span id="tablequantity">{tableqty}</span>
              <button
                onClick={() =>
                  changeqtyandprice(
                    120,
                    tableqty,
                    changetableprice,
                    changetableqty,
                    "plus"
                  )
                }
                id="tableplus"
              >
                +
              </button>
            </div>
            <button
              onClick={() => {
                addtocart("Wooden Table", tableqty, tableprice);
              }}
              id="tablebutton"
            >
              Add to cart
            </button>
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
              <h2 id="bedprice">${bedprice}</h2>
            </div>
            <div className="quantity">
              <button
                onClick={() =>
                  changeqtyandprice(
                    400,
                    bedqty,
                    changebedprice,
                    changebedqty,
                    "minus"
                  )
                }
                id="bedminus"
              >
                -
              </button>
              <span id="bedquantity">{bedqty}</span>
              <button
                onClick={() =>
                  changeqtyandprice(
                    400,
                    bedqty,
                    changebedprice,
                    changebedqty,
                    "plus"
                  )
                }
                id="bedplus"
              >
                +
              </button>
            </div>
            <button
              onClick={() => {
                addtocart("Wooden Bed", bedqty, bedprice);
              }}
              id="bedbutton"
            >
              Add to cart
            </button>
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
              <h2 id="stoolprice">${stoolprice}</h2>
            </div>
            <div className="quantity">
              <button
                onClick={() =>
                  changeqtyandprice(
                    50,
                    stoolqty,
                    changestoolprice,
                    changestoolqty,
                    "minus"
                  )
                }
                id="stooldminus"
              >
                -
              </button>
              <span id="stoolquantity">{stoolqty}</span>
              <button
                onClick={() =>
                  changeqtyandprice(
                    50,
                    stoolqty,
                    changestoolprice,
                    changestoolqty,
                    "plus"
                  )
                }
                id="stoolplus"
              >
                +
              </button>
            </div>
            <button
              onClick={() => {
                addtocart("Wooden Stool", stoolqty, stoolprice);
              }}
              id="stoolbutton"
            >
              Add to cart
            </button>
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
