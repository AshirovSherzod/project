import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header>
      <NavLink to={"/"}>
        <h1>Finsweet</h1>
      </NavLink>

      <NavLink to={"/about"}>About</NavLink>
    </header>
  );
}
``