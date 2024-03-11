import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const name = useSelector((state) => state.user.username);

  const navigate = useNavigate();
  const disptach = useDispatch();
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (username) {
      disptach(updateUsername(username));
      navigate("/menu");
      setUsername("");
    }
  }
  if (name) {
    return (
      <Button type="primary" to={"/order/new"}>
        Continue ordering, {name}
      </Button>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className=" mb-4 text-lm text-white  md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        className="mb-4 rounded-lg px-2 py-3 md:px-4 md:py-3 border-2 border-pizza outline-0 shadow-lg"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <Button type="primary" >Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
