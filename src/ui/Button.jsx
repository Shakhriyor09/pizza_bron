import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, type, to, onClick }) => {
  const className =
    "focus:ring-300 inline-block rounded-full text-sm sm:text-base font-semibold uppercase tracking-wide text-stone-600 duration-150  focus:ring";

  const styles = {
    primary:
      className +
      " px-3 py-2 md:px-4 md:py-3 bg-yellow-400 hover:bg-yellow-300",
    small:
      className +
      " py-2 px-2 md:px-4 md:py-3 text-sm bg-yellow-400 hover:bg-yellow-300",
    secondary:
      className +
      " text-stone-600 px-3 py-2 md:px-4 md:py-3 bg-stone-400 hover:bg-stone-200 border-2 ",
    rounded:
      className +
      "  text-sm bg-yellow-400 hover:bg-yellow-300 w-[30px] h-[30px] mx-2",
  };
  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  }

  return <button className={styles[type]}>{children}</button>;
};

export default Button;
