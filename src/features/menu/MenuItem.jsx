import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, getCurrentQuantity } from "../cart/CartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateCartQuantity from "../cart/UpdateCartQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const itemWQuantity = useSelector(getCurrentQuantity(id));
  const isAdd = itemWQuantity?.quantity > 0;
  console.log(itemWQuantity);

  const handelAddToCart = (e) => {
    e.preventDefault();
    const newPizza = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: 1 * unitPrice,
    };
    dispatch(addToCart(newPizza));
  };
  return (
    <>
      <div className="mb-6">
        <div class="max-w-sm overflow-hidden mx-auto rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 ">
          <div className="w-full overflow-hidden xl:h-72">
            <img
              className={`w-full rounded-t-lg duration-300 ease-in-out hover:scale-110  ${
                soldOut ? " opacity-75 grayscale" : ""
              }`}
              src={imageUrl}
              alt={name}
            />
          </div>
          <div
            class="flex flex-col justify-between px-5 py-3 "
            style={{ height: "200px" }}
          >
            <div>
              <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {name}
              </h5>
              <p class=" my-2 text-sm font-semibold italic tracking-tight text-gray-700 dark:text-white">
                {ingredients.join(", ")}
              </p>
            </div>
            <div class="mb-5 mt-2.5 flex items-center">
              <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg
                  class="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="h-4 w-4 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <span class="ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                5.0
              </span>
            </div>
            <div class="flex items-center justify-between">
              <div className="mb-auto mt-auto flex justify-between ">
                {!soldOut ? (
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    {formatCurrency(unitPrice)}
                  </p>
                ) : (
                  <p className="text-red-500">Sold out</p>
                )}
              </div>

              <div>
                {!soldOut && isAdd && (
                  <div className=" flex items-center justify-between gap-6">
                    <UpdateCartQuantity id={id} />
                    <DeleteItem id={id} />
                  </div>
                )}
                {!soldOut && !isAdd && (
                  <Button onClick={handelAddToCart} type="small">
                    Add To Card
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuItem;
