import CreateUser from "../features/user/CreateUser";
import './style.css'
function Home() {
  return (
    <div className=" py-10  text-center pizza__home">
      <h1 className=" mb-5 text-3xl  font-bold text-white outline-1 sm:text-3xl md:text-4xl lg:text-5xl">
        The best pizza.
        <br />
        <span className="text-xl font-semibold italic text-pizza sm:text-2xl md:text-3xl">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
