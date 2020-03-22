import React from "react";
import { NavLink } from "react-router-dom";

interface INavBarItemProps {
  to: string;
  name?: string;
  className?: string;
}

const NavBarItem = (props: INavBarItemProps) => (
  <NavLink
    to={props.to}
    className={props.className}
    activeClassName="is-active"
  >
    {props.name}
  </NavLink>
);

export default NavBarItem;
