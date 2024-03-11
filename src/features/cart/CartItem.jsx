import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";

function CartItem({ item }) {
  const { name, quantity, totalPrice } = item;

  return (
    <li className="flex items-center justify-between py-4">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center gap-4">
        <p>{formatCurrency(totalPrice)}</p>
        <DeleteItem />
      </div>
    </li>
  );
}

export default CartItem;
