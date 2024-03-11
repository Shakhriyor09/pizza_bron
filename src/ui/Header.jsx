import React from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import SerachOrder from "../features/order/SerachOrder";
const Header = () => {
    const { username } = useSelector((state) => state.user)
    // console.log(username);
    return (
        <header className="flex items-center justify-between bg-pizza px-3 sm:px-5 md:px-10 lg:px-16 py-3 font-poppins">
            <Link className="text-lg md:text-xl lg:text-2xl italic font-bold tracking-wide" to="/">Pizza Go</Link>
            <SerachOrder />
            <p>{username}</p>
        </header>
    );
};

export default Header;
