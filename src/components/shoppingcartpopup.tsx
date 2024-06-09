export default function ShoppingCartPopup(props: {
  list: { productName: String; qty: number; price: number }[];
}) {
  return (
    <div className="">
      {props.list.map((item) => (
        <div>{item.productName}</div>
      ))}
    </div>
  );
}
