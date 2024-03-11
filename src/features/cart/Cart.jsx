import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import { clear } from "./CartSlice";
import EmptyCart from "./EmptyCart";

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },

// ];

function Cart() {
  const { username } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // const cart = fakeCart;

  const handelClear = () => {
    dispatch(clear());
  };

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="py-10 sm:px-[30px] md:px-[50px] xl:px-[70px]  ">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2>Your cart, {username}</h2>
      <div className=" divide-y-2 border-y-0">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </div>
      <div className="flex gap-5">
        <Button type="primary">
          <Link to="/order/new">Order Pizzas</Link>
        </Button>
        <Button type="secondary" onClick={handelClear}>
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
