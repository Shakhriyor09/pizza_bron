import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { Form, redirect, useActionData } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const data = useActionData();
  console.log(data);
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  // const disptach = useDispatch();
  const { username } = useSelector((state) => state.user);
  // const handleClear = () => {};

  return (
    <div className=" py-10 sm:px-[30px] md:px-[50px] xl:px-[70px]  ">
      <h2 className="mb-6 text-center text-xl font-semibold md:text-2xl  lg:text-4xl">
        Ready to order? Let's go!
      </h2>

      <Form method="POST">
        <div className="gap mb-4 flex-row items-center sm:flex">
          <label className="basis-2/4 sm:basis-40">First Name</label>
          <input
            className="input grow"
            type="text"
            name="customer"
            required
            defaultValue={username}
          />
        </div>

        <div className="gap mb-4 flex-row items-center sm:flex">
          <label className="sm:basis-40">Phone number</label>
          <div className="w-full grow">
            <input className="input grow" type="tel" name="phone" required />
            <p>{data?.phone && <p className="text-red-500">{data.phone}</p>}</p>
          </div>
        </div>

        <div className="gap mb-4 flex-row items-center sm:flex">
          <label className="basis-2/4 sm:basis-40">Address</label>
          <div className="w-full grow">
            <input className="input grow" type="text" name="address" required />
          </div>
        </div>

        <div className=" mb-4 flex gap-2">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type={"primary"}>Order now</Button>
        </div>
      </Form>
    </div>
  );
}
// export async function action({ request }) {
//   const formData = await request.formData()
//   const data = Object.fromEntries(formData)
//   console.log(data);
//   const errors = {}
//   if (!isValidPhone(data.phone)) errors.phone = "Please write correct phone number"
//   if (Object.keys(errors).length > 0) return errors

//   const newOrder = {
//     ...data,
//     priority: data.priority === "on",
//     cart: JSON.parse(data.cart)
//   }
//   const order = await createOrder(newOrder)
//   console.log(order);
//   return redirect(`order/${order.id}`)
//   // return order
//  }
export async function action({ request }) {
  // console.log(request.);
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = {};
  if (!isValidPhone(data.phone))
    errors.phone = "Please write correct phone number";
  if (Object.keys(errors).length > 0) return errors;
  const newOrder = {
    ...data,
    priority: data.priority === "on",
    cart: JSON.parse(data.cart),
  };
  const order = await createOrder(newOrder);
  return redirect(`/order/${order.id}`);
}

export default CreateOrder;
