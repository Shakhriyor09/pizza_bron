import React from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCart, getCurrentQuantity, increaseCart } from "./CartSlice";

const UpdateCartQuantity = ({ id }) => {
  const { quantity } = useSelector(getCurrentQuantity(id));
  const dispatch = useDispatch();
  return (
    <div className=" flex items-center">
      <Button type="rounded" onClick={() => dispatch(increaseCart(id))}>
        +
      </Button>
      <span>{quantity}</span>
      <Button type="rounded" onClick={() => dispatch(decreaseCart(id))}>
        -
      </Button>
    </div>
  );
};

export default UpdateCartQuantity;
