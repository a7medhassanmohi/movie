import React, { useEffect, useRef } from "react";
import logo from "../../img/tmovie.png";
import { NavLink, useNavigate } from "react-router-dom";
import "./nav.scss";

function Nav() {
  const navigate = useNavigate();
  const navref = useRef(null);
  let links = [
    { name: "Home", path: "/" },
    { name: "Movies", path: "/movie" },
    { name: "Tv", path: "/tv" },
  ];
  useEffect(() => {
    const scrollfn = () => {
      if (
        document.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        navref.current.classList.add("active");
      } else {
        navref.current.classList.remove("active");
      }
    };
    document.addEventListener("scroll", scrollfn);
    return () => {
      document.removeEventListener("scroll", scrollfn);
    };
  }, []);
  return (
    <nav className="nav" ref={navref}>
      <div className="nav_logo">
        <div className="wrap" onClick={() => navigate("/")}>
          <img src={logo} alt="" />
          <h2>BoxMovies</h2>
        </div>
      </div>
      <div className="nav_link">
        <ul>
          {links.map((it, i) => {
            return (
              <NavLink
                key={i}
                to={it.path}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {it.name}
              </NavLink>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
