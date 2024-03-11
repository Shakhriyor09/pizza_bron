import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <div className=" font-poppins">
      <div className="grid py-10 sm:grid-cols-2 sm:gap-4 sm:px-[30px]   md:grid-cols-2 md:gap-6 md:px-[50px] lg:grid-cols-3 xl:grid-cols-4 xl:gap-8    xl:px-[70px] ">
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </div>
    </div>
  );
}

export async function loader() {
  const res = await getMenu();
  return res;
}

export default Menu;
