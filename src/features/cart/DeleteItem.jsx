import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { deleteToCart } from "./CartSlice";

const DeleteItem = ({ id }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteToCart(id));
  };
  return (
    <Button type="small" onClick={() => handleDelete(id)}>
      Delete
    </Button>
  );
};

export default DeleteItem;
