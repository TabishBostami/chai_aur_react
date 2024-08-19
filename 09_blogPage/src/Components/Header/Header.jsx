import React from "react";
import "./Header.css";
import { Link,NavLink } from "react-router-dom";
import netflixLogo from "../../assets/netflixLogo.png";
function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="">
        <div className="">
          <Link>
            <img className="mr-3 h-12" src={netflixLogo} alt="" />
          </Link>
          <div>
            <NavLink>
              <Link className="block py-2 pr-4 pl-3 duration-200 
                     border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">Home</Link>
              <Link>Movie</Link>
              <Link>Series</Link>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
