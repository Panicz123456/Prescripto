import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { items, menuItems } from "../constants";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [login, setLogin] = useState(true);

  return (
    <div className="flex  items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img src={assets.logo} alt="" className="w-44 cursor-pointer" />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        {items.map((item) => (
          <NavLink to={item.href} key={item.id}>
            <li className="py-1">
              {item.title}
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </li>
          </NavLink>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        {login ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              src={assets.profile_pic}
              alt=""
              className="rounded-full size-10"
            />
            <img src={assets.dropdown_icon} alt="" className="size-3" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                {menuItems.map((item) => (
                  <p
                    onClick={() => navigate(`${item.href}`)}
                    className="hover:text-black cursor-pointer"
                    key={item.id}>
                    {item.title}
                  </p>
                ))}
                <p
                  onClick={setLogin(false)}
                  className="hover:text-black cursor-pointer">
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block">
            Create account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
