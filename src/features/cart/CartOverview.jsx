import React from "react";
import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { getTotalCartPrice, getTotalCartQuantity } from "./CartSlice";
import { Link } from "react-router-dom";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  // totalCartQuantity.reduce((calc, item) => calc + (item.price * item.quantity), 0)
  // const totalPrice = useSelector(state => (state.cart.cart.reduce((calc, item) => calc + (item.quantity * item.unitPrice), 0)))
  // .cart.cart.reduce((calc, item) => calc + (item.price * item.quantity
  // console.log(totalPrice);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (totalCartQuantity <= 0) return null;
  return (
    <div
      className=" flex items-center justify-between bg-pizza px-3 py-3 md:py-6 uppercase text-stone-50 sm:px-5 md:px-10 lg:px-16"
      style={{ position: "sticky", bottom: 0 }}
    >
      <p className=" space-x-4">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
