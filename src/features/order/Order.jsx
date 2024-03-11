// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";
import Button from "../../ui/Button";

// const order = {
//   id: "ABCDEF",
//   customer: "Jonas",
//   phone: "123456789",
//   address: "Arroios, Lisbon , Portugal",
//   priority: true,
//   estimatedDelivery: "2027-04-25T10:00:00",
//   cart: [
//     {
//       pizzaId: 7,
//       name: "Napoli",
//       quantity: 3,
//       unitPrice: 16,
//       totalPrice: 48,
//     },
//     {
//       pizzaId: 5,
//       name: "Diavola",
//       quantity: 2,
//       unitPrice: 16,
//       totalPrice: 32,
//     },
//     {
//       pizzaId: 3,
//       name: "Romana",
//       quantity: 1,
//       unitPrice: 15,
//       totalPrice: 15,
//     },
//   ],
//   position: "-9.000,38.000",
//   orderPrice: 95,
//   priorityPrice: 19,
// };

function Order() {
  const order = useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    // id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    // cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="py-10 sm:px-[30px] md:px-[50px] xl:px-[70px]  ">
      <div className="items-center justify-between py-4 sm:flex">
        <h2 className="order mb-3 font-bold sm:mb-0 ">#{order.id} status:</h2>

        <div className="flex items-center justify-between gap-4">
          {priority && (
            <span className=" rounded-full bg-green-500 px-3 py-1  text-sm uppercase tracking-widest text-white">
              Priority
            </span>
          )}
          <span className="rounded-full bg-red-500 px-3 py-1  text-sm uppercase tracking-widest text-white">
            {status} order
          </span>
        </div>
      </div>

      <div className="items-center justify-between bg-stone-300 p-5 sm:flex">
        <p className=" mb-2 font-semibold">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className=" text-sm italic text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>
      <ul className=" my-8 divide-y-2 border-y-2">
        {order?.cart?.map((item) => (
          <OrderItem item={item} key={item.id} />
        ))}
      </ul>
      <div className="mb-4 flex flex-col justify-between gap-3 bg-stone-300 p-5 ">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
      <Button type="primary">Make Proprty</Button>
    </div>
  );
}

export async function loader({ params }) {
  const data = await getOrder(params.orederId);
  console.log(data);
  return data;
}
export default Order;
